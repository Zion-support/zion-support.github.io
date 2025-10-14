export const enhancedLogger ={
  log: (level:'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_EN V ==='development') {
      if (leve l ==='info') {
        console.warn(message, data);
      } else if (leve l ==='warn') {
        console.warn(message, data);
      } else if (leve l ==='error') {
        console.error(message, data);
      }
    }
    
    if (process.env.NODE_EN V ==='production') {
      // Implementation would depend on the logging service
      console.warn('Log entry:',{
        level,
        message,
        data,
        timestamp: newDate().to ISOString()
      })
    }
  },
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
}