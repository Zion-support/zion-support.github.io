/**
 * Development Utilities
 * Tools and helpers for development and debugging
 */

export const devLog = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEV] ${message}`, data || '');
  }
};

export const devError = (message: string, error?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[DEV ERROR] ${message}`, error || '');
  }
};

export const devWarn = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[DEV WARN] ${message}`, data || '');
  }
};

export const devInfo = (message: string, data?: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.info(`[DEV INFO] ${message}`, data || '');
  }
};

export const devGroup = (label: string, collapsed: boolean = false) => {
  if (process.env.NODE_ENV === 'development') {
    if (collapsed) {
      console.groupCollapsed(label);
    } else {
      console.group(label);
    }
  }
};

export const devGroupEnd = () => {
  if (process.env.NODE_ENV === 'development') {
    console.groupEnd();
  }
};

export const devTable = (data: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.table(data);
  }
};

export const devTime = (label: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.time(label);
  }
};

export const devTimeEnd = (label: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.timeEnd(label);
  }
};

export const devTrace = (message?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.trace(message);
  }
};

export const devAssert = (condition: boolean, message: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.assert(condition, message);
  }
};

export const devCount = (label: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.count(label);
  }
};

export const devCountReset = (label: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.countReset(label);
  }
};

export const devClear = () => {
  if (process.env.NODE_ENV === 'development') {
    console.clear();
  }
};

export const devDir = (obj: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.dir(obj);
  }
};

export const devDirxml = (node: Element) => {
  if (process.env.NODE_ENV === 'development') {
    console.dirxml(node);
  }
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export const isTest = (): boolean => {
  return process.env.NODE_ENV === 'test';
};

export default {
  devLog,
  devError,
  devWarn,
  devInfo,
  devGroup,
  devGroupEnd,
  devTable,
  devTime,
  devTimeEnd,
  devTrace,
  devAssert,
  devCount,
  devCountReset,
  devClear,
  devDir,
  devDirxml,
  isDevelopment,
  isProduction,
  isTest,
};
