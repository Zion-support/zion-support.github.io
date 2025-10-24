// Logger utility functions

const log = (level: string, message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    (console as any)[level](`[${level.toUpperCase()}] ${message}`, data);
  }
};

export const logger = {
  info: (message: string, data?: any) => log('log', message, data),
  error: (message: string, error?: any) => log('error', message, error),
  warn: (message: string, data?: any) => log('warn', message, data)
};

export default logger;