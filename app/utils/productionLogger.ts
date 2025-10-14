export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    const logEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    };
    
    if (process.env.NODE_ENV === 'production') {
      // In production, send to external logging service
      console.warn('Production log:', logEntry);
    } else {
      // In development, use console
      if (level === 'error') {
        console.error(message, data);
      } else if (level === 'warn') {
        console.warn(message, data);
      } else {
        console.warn(message, data);
      }
    }
  },
  
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
};
