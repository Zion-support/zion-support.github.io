export const enhancedLogger = {
  log: (_level: 'info' | 'warn' | 'error', _message: string, _data?: unknown) => {
    // Logging logic
    
  log: (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console[level](message, data)
    }
    
    if (process.env.NODE_ENV === 'production') {
      console.log('Log entry:', {
        level,
        message,
        data,
        timestamp: new Date().toISOString()
      })
    }
  },
  
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
};
  info: (message: string, data?: any) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: any) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: any) => enhancedLogger.log('error', message, data)
}
