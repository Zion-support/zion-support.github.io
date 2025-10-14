export const enhancedLogger = {
  log: (level: 'info' | 'warn' | '_error', message: string, data?: unknown) => {
    const LogEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    };
    
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
    }
    
    // Send to external logging service in production
    if (process.env.NODE_ENV === 'production') {
      // Implementation would depend on the logging service
      }
  },
  
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('_error', message, data)
};