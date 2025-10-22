export const errorHandler = {
  log: (error: Error, context?: string) => {
    console.error('Error:', error.message, context ? `Context: ${context}` : '');
  },
  
  handle: (error: Error, fallback?: () => void) => {
    console.error('Handled error:', error.message);
    if (fallback) {
      fallback();
    }
  }
};
