export const Productionlogger={
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'production') {
      if (level === 'error') {
        // Production error logging would go to external service
        console.error(message, data)
      } else {
        console.warn(message, data)
      }
    } else {
      // In development, log everything
      if (leve l ==='info') {
        console.warn(message, data);
      } else if (leve l ==='warn') {
        console.warn(message, data);
      } else if (leve l ==='error') {
        console.error(message, data);
      }
    }
  },
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
}