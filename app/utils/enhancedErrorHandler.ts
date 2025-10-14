export const enhancedErrorHandler = {
  handleError: (error: Error, _context?: string) => {
    console.error('Error occurred: ', error)
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    }
  },
  
  handleApiError: (error: unknown) => {
    const errorWithResponse = error as { response?: { status?: number; data?: { message?: string } }; message?: string };
    const status = errorWithResponse.response?.status;
    const message = errorWithResponse.response?.data?.message || errorWithResponse.message;
    
    switch (status) {
      case 400:
        return { message: 'Invalid request', code: 'BAD_REQUEST' }
      case 401:
        return { message: 'Unauthorized', code: 'UNAUTHORIZED' }
      case 403:
        return { message: 'Forbidden', code: 'FORBIDDEN' }
      case 404:
        return { message: 'Not found', code: 'NOT_FOUND' }
      case 500:
        return { message: 'Server error', code: 'SERVER_ERROR' }
      default:
        return { message: message || 'Unknown error', code: 'UNKNOWN_ERROR' }
    }
  },
  
  getErrorMessage: (error: any) => {
    if (error.response?.status) {
      switch (error.response.status) {
        case 400:
          return { message: 'Invalid request', code: 'BAD_REQUEST' }
        case 401:
          return { message: 'Unauthorized', code: 'UNAUTHORIZED' }
        case 403:
          return { message: 'Forbidden', code: 'FORBIDDEN' }
        case 404:
          return { message: 'Not found', code: 'NOT_FOUND' }
        case 500:
          return { message: 'Server error', code: 'SERVER_ERROR' }
        default:
          return { message: error.message || 'Unknown error', code: 'UNKNOWN_ERROR' }
      }
    }
    
    return { message: error.message || 'Unknown error', code: 'UNKNOWN_ERROR' }
  }
}