export const enhancedLogger = {
  log: (level: string, message: string, data?: unknown) => {
    if (typeof window !== 'undefined') {
      const logEntry = {
        level,
        message,
        data,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };
      
      if (level === 'info') {
        console.info(logEntry);
      } else if (level === 'warn') {
        console.warn(logEntry);
      } else if (level === 'error') {
        console.error(logEntry);
      }
    }
  },
  
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
};