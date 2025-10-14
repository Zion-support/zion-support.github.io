export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'production') {
      // In production, only log errors
      if (level === 'error') {
        // eslint-disable-next-line no-console
        console.error(message, data);
      }
    } else {
      // In development, log everything
      // eslint-disable-next-line no-console
      console[level](message, data);
    }
  },
  
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
};