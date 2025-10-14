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
  
  info: function(message: string, data?: any) { return this.log('info', message, data); },
  warn: function(message: string, data?: any) { return this.log('warn', message, data); },
  error: function(message: string, data?: any) { return this.log('error', message, data); }
};