export const handleError = (error: Error): void => {
  console.error('Error:', error.message);
};

export const handleAsyncError = async (error: Error): Promise<void> => {
  console.error('Async Error:', error.message);
};