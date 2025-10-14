export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
    if (process.env.NODE_ENV === 'production') {
      if (level === 'error') {
        console.error(message, data)
      } else {
        console.log(message, data)
      }
    }
  },
  
  info: (message: string, data?: any) => productionLogger.log('info', message, data),
  warn: (message: string, data?: any) => productionLogger.log('warn', message, data),
  error: (message: string, data?: any) => productionLogger.log('error', message, data)
}