export const enhancedLogger = {
  log: (level: 'info' | 'warn' | 'error'
    if (process.env.NODE_ENV === 'development'
    if (process.env.NODE_ENV === 'production'
      console.log('Log entry:'
  info: (message: string, data?: any) => enhancedLogger.log('info'
  warn: (message: string, data?: any) => enhancedLogger.log('warn'
  error: (message: string, data?: any) => enhancedLogger.log('error'