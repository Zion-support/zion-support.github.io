import { useCallback } from 'react';

interface ErrorHandlerOptions {
  onError?: (error: Error, context?: string) => void;
  logToConsole?: boolean;
}

export const useErrorHandler = (options: ErrorHandlerOptions = {}) => {
  const { onError, logToConsole = true } = options;

  const handleError = useCallback((error: Error, context?: string) => {
    if (logToConsole) {
      console.error(`Error in ${context || 'unknown context'}:`, error);
    }

    if (onError) {
      onError(error, context);
    }

    // In production, you might want to send errors to a monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { context });
    }
  }, [onError, logToConsole]);

  return { handleError };
};

export default useErrorHandler;
