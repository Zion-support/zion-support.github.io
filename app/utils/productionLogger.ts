export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', _message: string, _data?: unknown) => {
    if (process.env.NODE_ENV === 'production') {
      // In production, only log errors
      if (level === 'error') {
        // Production error logging disabled
      }
    } else {
      // In development, log everything
      // Development logging disabled
    }
  },
  
  info: (message: string, data?: unknown) => productionLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => productionLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => productionLogger.log('error', message, data)
};