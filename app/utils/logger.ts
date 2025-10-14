<<<<<<< HEAD
// Logger - Basic implementation;
export default function Logger() {
  return null;
}
=======
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
>>>>>>> 81be860c1fc3 (Fix all linting errors and merge conflicts)
