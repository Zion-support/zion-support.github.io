// Logger utility functions

export const Logger = {
  error: (message: string, error?: unknown) => {
    console.error(message, error);
  },
  info: (message: string, data?: unknown) => {
    console.info(message, data);
  },
  warn: (message: string, data?: unknown) => {
    console.warn(message, data);
  }
};
