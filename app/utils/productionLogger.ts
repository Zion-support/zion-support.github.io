export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'production') {
      if (level === 'error') {
        // Production error logging would go to external service
        console.error(message, data)
      } else {
        console.log(message, data)
      }
    } else {
      // In development, log everything
      console[level](message, data)
    }
  },
  
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
}