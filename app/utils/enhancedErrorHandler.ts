export const enhancedErrorHandler = { handleError: (error: Error, context?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        context: context });
    }
    return { message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR' };
  },
  handleApiError: (error: unknown) => { const errorWithResponse = error as { response?: { status?: number; data?: { message?: string } }; message?: string };

const status = errorWithResponse.response?.status;

const message = errorWithResponse.response?.data?.message || errorWithResponse.message;
    switch (status) { case 400: return { message: 'Invalid request', code: 'BAD_REQUEST' };
      case 401: return { message: 'Unauthorized', code: 'UNAUTHORIZED' };
      case 403: return { message: 'Forbidden', code: 'FORBIDDEN' };
      case 404: return { message: 'Not found', code: 'NOT_FOUND' };
      case 500: return { message: 'Internal server error', code: 'SERVER_ERROR' };
      default: return { message: message || 'An error occurred', code: 'UNKNOWN_ERROR' };
    }
  },
  handleNetworkError: (error: unknown) => {
    return {
      message: 'Network error. Please check your connection.',
      code: 'NETWORK_ERROR'
    };
  },
  handleValidationError: (errors: Record<string, string[]>) => {
    const errorMessages = Object.values(errors).flat();
    return {
      message: errorMessages.join(', '),
      code: 'VALIDATION_ERROR',
      details: errors
    };
  }
};

export default enhancedErrorHandler;