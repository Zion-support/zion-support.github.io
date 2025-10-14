export const errorHandler ={
  handle: (_error: Error, _context?: string) => {
    // Log to external service
    if (typeof window !=='undefined' && window.gtag) {
      window.gtag('event','exception',{

      });
    }
    
    return {
      message:'Something went wrong. Please try again.',
      code:'GENERIC_ERROR'
    };
  },
  handleApi Error: (error: unknown) => {
    const errorWith Response = error as { response?:{ status?: number; data?:{ message?: string } }; message?: string };
    const status = errorWith Response.response?.status;
    const message = errorWith Response.response?.data?.message || errorWith Response.message;
    
    switch (status) {
      case 400:
        return { message:'Invalid request', code:'BAD_REQUEST' };
      case 401:
        return { message:'Unauthorized', code:'UNAUTHORIZED' };
      case 403:
        return { message:'Forbidden', code:'FORBIDDEN' };
      case 404:
        return { message:'Not found', code:'NOT_FOUND' };
      case 500:
        return { message:'Server error', code:'SERVER_ERROR' };
      default:
        return { message: message || 'Unknown error', code:'UNKNOWN_ERROR' };
    }
  },
  log: (_error: Error, _context?: Record<string, unknown>) => {
    // Error logging logic
  },
  report: (_error: Error, _context?: Record<string, unknown>) => {
    // Error reporting logic
  }
};