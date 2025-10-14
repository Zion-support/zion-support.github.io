export const errorHandler = {
  handleError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      console.error('Error handled:', error, context);
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    }
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
  },
  
  report: (_error: Error, _context?: Record<string, unknown>) => {
    // Error reporting logic
  }
}