'use client';

export const errorHandler = (error: Error, context?: string) => {
  console.error('Error occurred:', error.message);
  if (context) {
    console.error('Context:', context);
  }
  
  // You can add more sophisticated error handling here
  // such as sending to error reporting service
  return {
    message: error.message,
    context,
    timestamp: new Date().toISOString()
  };
};

export default errorHandler;