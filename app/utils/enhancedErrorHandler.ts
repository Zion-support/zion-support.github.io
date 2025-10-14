export const enhancedErrorHandler = {
  handleError: (error: Error, context?: string) => {
    console.error('Error occurred:'
    if (typeof window !== 'undefined'
      window.gtag('event', 'exception'
      message: 'Something went wrong. Please try again.'
      code: 'GENERIC_ERROR'
        return { message: 'Invalid request', code: 'BAD_REQUEST'
        return { message: 'Unauthorized', code: 'UNAUTHORIZED'
        return { message: 'Forbidden', code: 'FORBIDDEN'
        return { message: 'Not found', code: 'NOT_FOUND'
        return { message: 'Server error', code: 'SERVER_ERROR'
        return { message: message || 'Unknown error', code: 'UNKNOWN_ERROR'