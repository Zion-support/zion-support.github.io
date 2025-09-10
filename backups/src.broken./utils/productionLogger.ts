// Production logger utility
export const logWarn = (message: string, ...args: unknown[]): void => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    // // console.warn(message, ...args);
  }
};

export const logError = (message: string, ...args: unknown[]): void => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    // // console.error(message, ...args);
  }
};

export const logInfo = (message: string, ...args: unknown[]): void => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    // // console.info(message, ...args);
  }
};

export const logErrorToProduction = (message: string, ...args: unknown[]): void => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    // // console.error(message, ...args);
  }
};

export const logDebug = (message: string, ...args: unknown[]): void => {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    // // console.debug(message, ...args);
  }
};