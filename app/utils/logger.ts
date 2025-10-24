// Logger utility functions

export const logger = {
  info: (message: string, data?: any) => {
    // eslint-disable-next-line no-console
    console.log(`[INFO] ${message}`, data);
  },
  error: (message: string, error?: any) => {
    // eslint-disable-next-line no-console
    console.error(`[ERROR] ${message}`, error);
  },
  warn: (message: string, data?: any) => {
    // eslint-disable-next-line no-console
    console.warn(`[WARN] ${message}`, data);
  }
};

export default logger;