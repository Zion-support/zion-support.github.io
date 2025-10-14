export const error Handler = {
  handle: (_error: Error, context?: string) => {
    // Log to external service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false,
        custom_map: { context: context || 'unknown' }
      });
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    };
  },
  handle Api Error: (error: unknown) => {
    const error With Response = error as { response?: { status?: number; data?: { message?: string } }; message?: string };
    const status = error With Response.response?.status;
    const message = error With Response.response?.data?.message || error With Response.message;
    
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