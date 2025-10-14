export const errorHandlerEnhanced = {
  handleError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Send to error tracking service
      console.error('Enhanced error handler:', error, context);
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    }
  },
  
  handleApiError: (error: unknown) => {
    const status = (error as any).response?.status;
    const message = (error as any).response?.data?.message || (error as Error).message;
    
    return {
      message,
      code: `API_ERROR_${status}`,
      status
    }
  }
}