export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'production') {
      if (level === 'error') {
        // Production error logging would go here
        // Implementation depends on the logging service
      }
    } else {
      // In development, log everything
      console[level](message, data);
    }
  },
  
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
}