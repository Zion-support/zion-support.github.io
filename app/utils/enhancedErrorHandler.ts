export const enhancedErrorHandler = {
  handleError: (error: Error, context?: string) => {
    // Error occurred
    
    // Log to external service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        context: context
      });
    }
    
    // Show user-friendly message
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    };
  },
  
  handleApiError: (error: any) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    
    switch (status) {
      case 400:
        return { message: 'Invalid request', code: 'BAD_REQUEST' };
      case 401:
        return { message: 'Unauthorized', code: 'UNAUTHORIZED' };
      case 403:
        return { message: 'Forbidden', code: 'FORBIDDEN' };
      case 404:
        return { message: 'Not found', code: 'NOT_FOUND' };
      case 500:
        return { message: 'Server error', code: 'SERVER_ERROR' };
      default:
        return { message: message || 'Unknown error', code: 'UNKNOWN_ERROR' };
    }
  }
};