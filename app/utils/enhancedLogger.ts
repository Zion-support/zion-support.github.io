export const Enhancedlogger={
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'development') {
      if (level === 'info') {
        console.warn(message, data);
      } else if (leve l ==='warn') {
        console.warn(message, data);
      } else if (leve l ==='error') {
        console.error(message, data);
      }
    }
    
    if (process.env.NODE_ENV ==='production') {
      // Implementation would depend on the logging service
      console.warn('logEntry: ', {
        level,
        message,
        data,
        timestamp: new Date().toISOString()
      })
    }
  },
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
}