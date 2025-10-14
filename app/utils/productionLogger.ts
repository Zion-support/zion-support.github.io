export const productionLogger = {
  log: (level: 'info' | 'warn' | 'error', message: string, data?: any) => {
    if (process.env.NODE_ENV === 'production') {
      // In production, only log errors
      if (level === 'error') {
        console.error(message, data);
      }
    } else {
      // In development, log everything
      console[level](message, data);
    }
  },
  
  info: (message: string, data?: any) => this.log('info', message, data),
  warn: (message: string, data?: any) => this.log('warn', message, data),
  error: (message: string, data?: any) => this.log('error', message, data)
};