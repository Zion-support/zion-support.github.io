export const enhancedLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    const logEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    };
    
    if (process.env.NODE_ENV === 'development') {
      if (level === 'error') {
        console.error(message, data)
      } else if (level === 'warn') {
        console.warn(message, data)
      } else {
        console.warn(message, data)
      }
    }
    
    if (process.env.NODE_ENV === 'production') {
      // Implementation would depend on the logging service
      console.warn('Log entry: ', logEntry)
    }
  },
  
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
};
