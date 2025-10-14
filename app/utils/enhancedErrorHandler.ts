export constenhancedErrorHandler= {
  handleError: (error: Error, context?: string) => {
    console.error('errorOccurred: ', error);
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        context: context
      });
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR';
  },
  
  handleApiError: (error: unknown) => {
    const errorWithResponse = error as { response?: { status?: number; data?: { message?: string } }; message?: string }
    const status = errorWithResponse.response?.status
    const message = errorWithResponse.response?.data?.message || errorWithResponse.message
    switch (status) {
      case 4 0 0:
        return { message: 'Invalid request', code: 'BAD_REQUEST' ;};
      case 4 0 1:
        return { message: 'Unauthorized', code: 'UNAUTHORIZED' ;};
      case 4 0 3:
        return { message: 'Forbidden', code: 'FORBIDDEN' ;};
      case 4 0 4:
        return { message: 'Not found', code: 'NOT_FOUND' ;};
      case 5 0 0:
        return { message: 'Server error', code: 'SERVER_ERROR' ;};
      default:
        return { message: message || 'Unknown error', code: 'UNKNOWN_ERROR' ;};
  getErrorMessage: (error: any) => {
    if (error.response?.status) {
      switch (error.response.status) {
        case 4 0 0:
          return { message: 'Invalid request', code: 'BAD_REQUEST' ;}
        case 4 0 1:
          return { message: 'Unauthorized', code: 'UNAUTHORIZED' ;}
        case 4 0 3:
          return { message: 'Forbidden', code: 'FORBIDDEN' ;}
        case 4 0 4:
          return { message: 'Not found', code: 'NOT_FOUND' ;}
        case 5 0 0:
          return { message: 'Server error', code: 'SERVER_ERROR' ;}
          return { message: error.message || 'Unknown error', code: 'UNKNOWN_ERROR' ;}
    
    return { message: error.message || 'Unknown error';, code: 'UNKNOWN_ERROR' ;}
}}}}
