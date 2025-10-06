/**
 * Development Utilities
 * Tools and helpers for development and debugging
 */
<<<<<<< HEAD
export const devLog = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    // DEV: ${message}
  }
};
export const devError = (message: string, error?: any) => {
  if (process.env.NODE_ENV === 'development') {
    // DEV ERROR: ${message}
  }
};
export const devWarn = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    // DEV WARN: ${message}
=======

export const devLog = (message: string, data?: unknown) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.log(`[DEV] ${message}`, data || '');
  }
};

export const devError = (message: string, error?: unknown) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.error(`[DEV ERROR] ${message}`, error || '');
  }
};

export const devWarn = (message: string, data?: unknown) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.warn(`[DEV WARN] ${message}`, data || '');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
  }
};
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env['NODE_ENV'] === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    // PERF: ${name}: ${(end - start).toFixed(2)}ms
  } else {
    fn();
  }
};
export const createDebugger = (componentName: string) => ({
  log: (message: string, data?: unknown) =>
    devLog(`[${componentName}] ${message}`, data),
  error: (message: string, error?: unknown) =>
    devError(`[${componentName}] ${message}`, error),
  warn: (message: string, data?: unknown) =>
    devWarn(`[${componentName}] ${message}`, data),
  measure: (name: string, fn: () => void) =>
    measurePerformance(`[${componentName}] ${name}`, fn),
});
export default {
  devLog,
  devError,
  devWarn,
  measurePerformance,
  createDebugger,
};
