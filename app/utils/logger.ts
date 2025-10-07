/**
 * Safe Logger Utility
 * Provides development-only logging to prevent console pollution in production
 */

const isDevelopment = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

export const logger = {
  /**
   * Log information messages (development only)
   */
  log: (...args: unknown[]) => {
    if (isDevelopment) {
      console.log('[INFO]', ...args);
    }
  },

  /**
   * Log warning messages (development only)
   */
  warn: (...args: unknown[]) => {
    if (isDevelopment) {
      console.warn('[WARN]', ...args);
    }
  },

  /**
   * Log error messages (always logged)
   */
  error: (...args: unknown[]) => {
    console.error('[ERROR]', ...args);
  },

  /**
   * Log debug messages (development only)
   */
  debug: (...args: unknown[]) => {
    if (isDevelopment) {
      console.debug('[DEBUG]', ...args);
    }
  },

  /**
   * Log performance metrics (development only)
   */
  perf: (label: string, value: number, unit = 'ms') => {
    if (isDevelopment) {
      console.log(`[PERF] ${label}: ${value}${unit}`);
    }
  },

  /**
   * Group related logs (development only)
   */
  group: (label: string, fn: () => void) => {
    if (isDevelopment) {
      console.group(label);
      fn();
      console.groupEnd();
    }
  },

  /**
   * Log with custom styling (development only)
   */
  styled: (message: string, style: string) => {
    if (isDevelopment) {
      console.log(`%c${message}`, style);
    }
  },
};

export default logger;