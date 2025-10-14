export const enhanced Logger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'development') {
      if (level === 'info') {
        console.warn(message, data);
      } else if (level === 'warn') {
        console.warn(message, data);
      } else if (level === 'error') {
        console.error(message, data);
      }
    }
    
    if (process.env.NODE_ENV === 'production') {
      // Implementation would depend on the logging service
      console.warn('Log entry: ', {
        level,
        message,
        data,
        timestamp: new Date().to ISOString()
      })
    }
  },
  info: (message: string, data?: unknown) => enhanced Logger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhanced Logger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhanced Logger.log('error', message, data)
}