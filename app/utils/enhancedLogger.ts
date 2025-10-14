export const enhancedLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
    const logEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    };
    
    if (process.env.NODE_ENV === 'development') {
      console[level](logEntry);
    }
    
    // Send to external logging service in production
    if (process.env.NODE_ENV === 'production') {
      // Implementation would depend on the logging service
      console.log('Log entry:', logEntry);
    }
  },
  
  info: (message: string, data?: any) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: any) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: any) => enhancedLogger.log('error', message, data)
};