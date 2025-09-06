  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void




// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase(),
