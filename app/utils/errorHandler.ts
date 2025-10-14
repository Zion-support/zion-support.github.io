'use client';

<<<<<<< HEAD
export const ErrorHandler = () => {
  // Implementation
  return true;
};

export default ErrorHandler;
=======
export const errorHandler = (error: Error) => {
  // Error handling utility
  console.error('Error:', error);
  return true;
};

export default errorHandler;
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
