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
  
  info: function(message: string, data?: any) { return this.log('info', message, data); },
  warn: function(message: string, data?: any) { return this.log('warn', message, data); },
  error: function(message: string, data?: any) { return this.log('error', message, data); }
};