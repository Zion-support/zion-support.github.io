export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error'
    if (process.env.NODE_ENV === 'production'
      if (level === 'error'
  info: (message: string, data?: any) => productionLogger.log('info'
  warn: (message: string, data?: any) => productionLogger.log('warn'
  error: (message: string, data?: any) => productionLogger.log('error'