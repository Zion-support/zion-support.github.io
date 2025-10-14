'use client';

export const messageHandler = (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
  console.log(`[${type.toUpperCase()}] ${message}`);
  
  // You can add more sophisticated message handling here
  // such as displaying toast notifications, sending to logging service, etc.
  return {
    message,
    type,
    timestamp: new Date().toISOString()
  };
};

export default messageHandler;