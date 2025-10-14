export const errorHandler = {
  handle: (_error: Error, context?: string) => {
    // Log to external service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false,
        custom_map: context ? { context } : undefined
      });
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    };
  },
  
  handleApiError: (error: unknown) => {
    const status = (error as any).response?.status;
    const message = (error as any).response?.data?.message || (error as Error).message;
    
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
  },
  
  log: (_error: Error, _context?: Record<string, unknown>) => {
    // Error logging logic
    console.error('Error logged:', _error, _context);
  },
  
  report: (_error: Error, _context?: Record<string, unknown>) => {
    // Error reporting logic
    console.error('Error reported:', _error, _context);
  }
};