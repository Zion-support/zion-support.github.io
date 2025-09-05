import React, {_createContext, _useContext, _useState, _useCallback, _ReactNode} from 'react';
import * as Sentry from '@sentry/nextjs';


interface ErrorContextType {_reportError: (_error: Error, _context?: unknown) => void;
  showRetryableError: (_error: Error, _retryAction?: () => void) => void;
  showNetworkError: (_retryAction?: () => void) => void;
  showAuthError: (_loginAction?: () => void) => void;
  clearAllErrors: () => void;}

const _ErrorContext = createContext<ErrorContextType | null>(null);

interface GlobalErrorHandlerProps {_children: ReactNode;}

export function GlobalErrorHandler(_{_children}: GlobalErrorHandlerProps) {_const [retryCount, _setRetryCount] = useState<Record<string, _number>>({});

  const _reportError = useCallback(_(error: Error, _context?: unknown) => {_// Log to console for development
    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction('Global Error Handler:', _error, _context);}

    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {_Sentry.withScope(_(scope) => {
        if (context) {
          scope.setContext('errorContext', _context);}
        scope.setLevel('error');
        Sentry.captureException(error);
      });
    }
  }, []);

  const _showRetryableError = useCallback(_(error: Error, _retryAction?: () => void) => {_const _errorKey = error.message;
    const _currentRetryCount = retryCount[errorKey] || 0;

    reportError(error, _{ retryCount: currentRetryCount});

    // Show user-friendly error message with retry option
    toast({_title: "Something went wrong", _description: getErrorMessage(error), _variant: "destructive", _action: retryAction ? {
        label: "Try Again", _onClick: () => {
          setRetryCount(prev => ({
            ...prev, _[errorKey]: currentRetryCount + 1}));
          retryAction();
        }
      } : undefined});
  }, [retryCount, reportError]);

  const _showNetworkError = useCallback(_(retryAction?: () => void) => {_const _isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    
    toast({
      title: isOnline ? "Connection Issue" : "No Internet Connection", _description: isOnline 
        ? "Unable to connect to our servers. Please check your connection and try again."
        : "You appear to be offline. Please check your internet connection.", _variant: "destructive", _action: retryAction ? {
        label: "Retry", _onClick: retryAction} : undefined});
  }, []);

  const _showAuthError = useCallback(_(loginAction?: () => void) => {_toast({
      title: "Authentication Required", _description: "Please log in to continue with this action.", _variant: "destructive", _action: loginAction ? {
        label: "Log In", _onClick: loginAction} : undefined});
  }, []);

  const _clearAllErrors = useCallback__(() => {_setRetryCount({});
    // Clear any active toasts would go here if the toast system supports it
  }, []);

  const contextValue: ErrorContextType = {_reportError, _showRetryableError, _showNetworkError, _showAuthError, _clearAllErrors};

  return (
    <ErrorContext.Provider value={_contextValue}>
      {_children}
    </ErrorContext.Provider>
  );
}

export function useGlobalErrorHandler(): ErrorContextType {_const _context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler');}
  return context;
}

// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(_error: Error): string {_const _message = error.message.toLowerCase();

  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection.";}

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {_return "Your session has expired. Please log in again.";}

  if (message.includes('forbidden') || message.includes('403')) {_return "You don't have permission to perform this action.";}

  if (message.includes('not found') || message.includes('404')) {_return "The requested information could not be found.";}

  if (message.includes('timeout')) {_return "Request timed out. Please try again.";}

  if (message.includes('validation') || message.includes('invalid')) {_return "Please check your input and try again.";}

  if (message.includes('server') || message.includes('500')) {_return "Our servers are experiencing issues. Please try again in a moment.";}

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again.";
}

// Utility hook for common error scenarios
export function useErrorHandler() {_const { reportError, _showRetryableError, _showNetworkError, _showAuthError} = useGlobalErrorHandler();

  const _handleApiError = useCallback(_(error: unknown, _retryAction?: () => void) => {_if (error.response?.status === 401 || error.response?.status === 403) {
      showAuthError();} else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {_showNetworkError(retryAction);} else {_showRetryableError(error, _retryAction);}
  }, [showRetryableError, showNetworkError, showAuthError]);

  const _handleAsyncOperation = useCallback(_async <T, _>(
    operation: () => Promise<T>,
    options?: {_onError?: (_error: Error) => void;
      retryAction?: () => void;
      successMessage?: string;}
  ): Promise<T | null> => {_try {
      const _result = await operation();
      
      if (options?.successMessage) {
        toast({
          title: "Success", _description: options.successMessage});
      }
      
      return result;
    } catch (error: unknown) {_reportError(error);
      
      if (options?.onError) {
        options.onError(error);} else {_handleApiError(error, _options?.retryAction);}
      
      return null;
    }
  }, [reportError, handleApiError]);

  return {_reportError, _handleApiError, _handleAsyncOperation};
} 