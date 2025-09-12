export const useToast = () => {
  const toast = (message: string, options?: { type?: 'success' | 'error' | 'info' | 'warning' }) => {
    // Simple console log for now
    // // console.log(`Toast: ${message}`, options);
  };

  return { toast };
};