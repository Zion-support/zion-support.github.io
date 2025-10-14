'use client';

export const errorHandler = (error: Error) => {
  // Error handling utility
  console.error('Error:', error);
  return true;
};

export default errorHandler;