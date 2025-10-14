export const errorReporter ={
  report: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo ={
      message: error.message,
      stack: error.stack,
      timestamp: newDate().to ISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_EN V ==='development') {
      console.error('Error reported:', errorInfo)
    }
    
    if (typeof window !=='undefined') {
      window.gtag('event','exception',{
        description: error.message,
        fatal: false
      })
    }
  }
}