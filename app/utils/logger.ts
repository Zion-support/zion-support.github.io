// Logger utility functions

export const Logger = {
  error: (message: string, error?: Error, context?: Record<string, unknown>) => {
    console.error(`[ERROR] ${message}`, error, context);
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    console.warn(`[WARN] ${message}`, context);
  },
  info: (message: string, context?: Record<string, unknown>) => {
    console.info(`[INFO] ${message}`, context);
  },
  debug: (message: string, context?: Record<string, unknown>) => {
    console.debug(`[DEBUG] ${message}`, context);
  },
};

// Export logger as default for backward compatibility
export const logger = Logger;
