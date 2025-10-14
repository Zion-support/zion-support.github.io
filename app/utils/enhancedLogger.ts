export const enhancedLogger = {
  log: (level: string, message: string, data?: unknown) => {
    const logEntry = {
      level,
      message,
      data,
      timestamp: new Date().toISOString()
    }
    
    // Log to console
    switch (level) {
      case 'error':
        console.error(message, data)
        break
      case 'warn':
        console.warn(message, data)
        break
      case 'info':
        console.info(message, data)
        break
      default:
        console.log(message, data)
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'log', {
        log_level: level,
        log_message: message
      })
    }
  },
  
  info: (message: string, data?: unknown) => enhancedLogger.log('info', message, data),
  warn: (message: string, data?: unknown) => enhancedLogger.log('warn', message, data),
  error: (message: string, data?: unknown) => enhancedLogger.log('error', message, data)
}