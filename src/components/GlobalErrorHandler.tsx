<<<<<<< HEAD

import React, {
  createContext
  useContext
  useState
  useCallback
  ReactNode
} from 'react'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';
interface ErrorContextType {
=======
import React, {;
  createContext,;
  useContext,;
  useState,;
  useCallback,;
  ReactNode,;
} from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react';
import * as Sentry from '@sentry/nextjs';
import { logErrorToProduction } from '@/utils/productionLogger';

interface ErrorContextType {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void

<<<<<<< HEAD
}, [])
export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [retryCount, setRetryCount] = useState<Record<string, number>>({})
  const reportError = useCallback((error: Error, context?: any,) => {
    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction('Global Error Handler:', error, context)
    }
    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope(scope => {        if (context) {
          scope.setContext('errorContext', context)
        }
        scope.setLevel('error')
        Sentry.captureException(error)
      })
    }
  }, [])
  const showRetryableError = useCallback(
    (error: Error, retryAction?: () => void) => {
      const errorKey = error.message
      const currentRetryCount = retryCount[errorKey] |0
      reportError(error, { retryCount: currentRetryCount })
      // Show user-friendly error message with retry option
      toast({
        title: 'Something went wrong'
        description: getErrorMessage(error)
        variant: 'destructive'
        action: retryAction
          ? {
              label: 'Try Again'
              onClick: () => {
                setRetryCount(prev => ({
                  ...prev
                  [errorKey]: currentRetryCount + 1
                }))
                retryAction()
              }
            }
          : undefined
      })
    }
    [retryCount, reportError]
  )
  const showNetworkError = useCallback((retryAction?: () => void) => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true
    toast({
      title: isOnline ? 'Connection Issue' : 'No Internet Connection'
      description: isOnline
        ? 'Unable to connect to our servers. Please check your connection and try again.'
        : 'You appear to be offline. Please check your internet connection.'
      variant: 'destructive'
      action: retryAction
        ? {
            label: 'Retry'
            onClick: retryAction
          }
        : undefined
    })
  }, [])
  const showAuthError = useCallback((loginAction?: (,) => void) => {
    toast({
      title: 'Authentication Required'
      description: 'Please log in to continue with this action.'
      variant: 'destructive'
      action: loginAction
        ? {
            label: 'Log In'
            onClick: loginAction
          }
        : undefined
    })
  }, [])
  const clearAllErrors = useCallback(() => {
    setRetryCount({});    // Clear any active toasts would go here if the toast system supports it
  }, [])
  const contextValue: ErrorContextType = {
    reportError
    showRetryableError
    showNetworkError
    showAuthError
    clearAllErrors
  }
=======
export function GlobalErrorHandler(): any ({ children }: GlobalErrorHandlerProps) {;
  const [retryCount, setRetryCount] = useState<Record<string, number>>({});

  const reportError = useCallback((error: Error, context?: any,) => {;
    // Log to console for development;
    if (process && process.env.NODE_ENV === 'development') {;
      logErrorToProduction('Global Error Handler:', error, context);
    }

    // Report to Sentry for production;
    if (process && process.env.NODE_ENV === 'production') {;
      Sentry && Sentry.withScope(scope => {        if (context) {;
          scope && scope.setContext('errorContext', context);
        }
        scope && scope.setLevel('error');
        Sentry && Sentry.captureException(error);
      });
    }
  }, []);

  const showRetryableError = useCallback(;
    (error: Error, retryAction?: () => void) => {;
      const errorKey = error && error.message;
      const currentRetryCount = retryCount[errorKey] || 0;
      reportError(error, { retryCount: currentRetryCount });

      // Show user-friendly error message with retry option;
      toast({;
        title: 'Something went wrong',;
        description: getErrorMessage(error),;
        variant: 'destructive',;
        action: retryAction;
          ? {;
              label: 'Try Again',;
              onClick: () => {;
                setRetryCount(prev => ({;
                  ...prev,;
                  [errorKey]: currentRetryCount + 1,;
                }));
                retryAction();
              },;
            }
          : undefined,;
      });
    },;
    [retryCount, reportError];
  );

  const showNetworkError = useCallback((retryAction?: () => void) => {;
    const isOnline = typeof navigator !== 'undefined' ? navigator && navigator.onLine : true;
    toast({;
      title: isOnline ? 'Connection Issue' : 'No Internet Connection',;
      description: isOnline;
        ? 'Unable to connect to our servers. Please check your connection and try again.';
        : 'You appear to be offline. Please check your internet connection.',;
      variant: 'destructive',;
      action: retryAction;
        ? {;
            label: 'Retry',;
            onClick: retryAction,;
          }
        : undefined,;
    });
  }, []);

  const showAuthError = useCallback((loginAction?: (,) => void) => {;
    toast({;
      title: 'Authentication Required',;
      description: 'Please log in to continue with this action.',;
      variant: 'destructive',;
      action: loginAction;
        ? {;
            label: 'Log In',;
            onClick: loginAction,;
          }
        : undefined,;
    });
  }, []);

  const clearAllErrors = useCallback(() => {;
    setRetryCount({});    // Clear any active toasts would go here if the toast system supports it;
  }, []);

  const contextValue: ErrorContextType = {;
    reportError,;
    showRetryableError,;
    showNetworkError,;
    showAuthError,;
    clearAllErrors,;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <ErrorContext && ErrorContext.Provider value={contextValue}>;
      {children}
<<<<<<< HEAD
    </ErrorContext.Provider>
  )
export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error(
      'useGlobalErrorHandler must be used within a GlobalErrorHandler'
    )
  }
  return context
// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase()
  if (
    message.includes('fetch') |
    message.includes('network') |
    message.includes('connection')
  ) {
    return 'Unable to connect to our servers. Please check your internet connection.'
  }
  if (
    message.includes('auth') |
    message.includes('unauthorized') |
    message.includes('401')
  ) {
    return 'Your session has expired. Please log in again.'
  }
  if (message.includes('forbidden') |message.includes('403')) {
    return "You don't have permission to perform this action."
  }
  if (message.includes('not found') |message.includes('404')) {
    return 'The requested information could not be found.'
  }
  if (message.includes('timeout')) {
    return 'Request timed out. Please try again.'
  }
  if (message.includes('validation') |message.includes('invalid')) {
    return 'Please check your input and try again.'
  }
  if (message.includes('server') |message.includes('500')) {
    return 'Our servers are experiencing issues. Please try again in a moment.'
  }
  // Fallback for unknown errors
  return 'An unexpected error occurred. Please try again.'
// Utility hook for common error scenarios
export function useErrorHandler() {
  const { reportError, showRetryableError, showNetworkError, showAuthError } =
    useGlobalErrorHandler()
  const handleApiError = useCallback(
    (error: any, retryAction?: () => void) => {
      if (error.response?.status === 401 |error.response?.status === 403) {
        showAuthError()
      } else if (error.code === 'NETWORK_ERROR' |!navigator.onLine) {
        showNetworkError(retryAction) } else {
        showRetryableError(error, retryAction)
      }
    }
    [showRetryableError, showNetworkError, showAuthError]
  )
  const handleAsyncOperation = useCallback(
    async <T,>(
      operation: () => Promise<T>
      options?: {
        onError?: (error: Error) => void
        retryAction?: () => void
        successMessage?: string
      }
    ): Promise<T | null> => {
      try {
        const result = await operation()
        if (options?.successMessage) {
          toast({
            title: 'Success'
            description: options.successMessage
          })
        }
        return result
      } catch (error: any) {
        reportError(error)
        if (options?.onError) {
          options.onError(error)
        } else {
          handleApiError(error, options?.retryAction)
=======
    </ErrorContext && ErrorContext.Provider>;
  );

export function useGlobalErrorHandler(): any (): ErrorContextType {;
  const context = useContext(ErrorContext);
  if (!context) {;
    throw new Error(;
      'useGlobalErrorHandler must be used within a GlobalErrorHandler';
    );
  }
  return context;

// Helper function to convert technical errors to user-friendly messages;
function getErrorMessage(): any (error: Error): string {;
  const message = error && error.message.toLowerCase(),;

  if (;
    message && message.includes('fetch') ||;
    message && message.includes('network') ||;
    message && message.includes('connection');
  ) {;
    return 'Unable to connect to our servers. Please check your internet connection.';
  }

  if (;
    message && message.includes('auth') ||;
    message && message.includes('unauthorized') ||;
    message && message.includes('401');
  ) {;
    return 'Your session has expired. Please log in again.';
  }

  if (message && message.includes('forbidden') || message && message.includes('403')) {;
    return "You don't have permission to perform this action.";
  }

  if (message && message.includes('not found') || message && message.includes('404')) {;
    return 'The requested information could not be found.';
  }

  if (message && message.includes('timeout')) {;
    return 'Request timed out. Please try again.';
  }

  if (message && message.includes('validation') || message && message.includes('invalid')) {;
    return 'Please check your input and try again.';
  }

  if (message && message.includes('server') || message && message.includes('500')) {;
    return 'Our servers are experiencing issues. Please try again in a moment.';
  }

  // Fallback for unknown errors;
  return 'An unexpected error occurred. Please try again.';

// Utility hook for common error scenarios;
export function useErrorHandler() {;
  const { reportError, showRetryableError, showNetworkError, showAuthError } =;
    useGlobalErrorHandler();

  const handleApiError = useCallback(;
    (error: any, retryAction?: () => void) => {;
      if (error && error.response?.status === 401 || error && error.response?.status === 403) {;
        showAuthError();
      } else if (error && error.code === 'NETWORK_ERROR' || !navigator && navigator.onLine) {;
        showNetworkError(retryAction);      } else {;
        showRetryableError(error, retryAction);
      }
    },;
    [showRetryableError, showNetworkError, showAuthError];
  );

  const handleAsyncOperation = useCallback(;
    async <T,>(;
      operation: () => Promise<T>,;
      options?: {;
        onError?: (error: Error) => void;
        retryAction?: () => void;
        successMessage?: string;
      }
    ): Promise<T | null> => {;
      try {;
        const result = await operation();

        if (options?.successMessage) {;
          toast({;
            title: 'Success',;
            description: options && options.successMessage,;
          });
        }

        return result;
      } catch (error: any) {;
        reportError(error);

        if (options?.onError) {;
          options && options.onError(error);
        } else {;
          handleApiError(error, options?.retryAction);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
        return null
      }
<<<<<<< HEAD
    }
    [reportError, handleApiError]
  )
  return {
    reportError
    handleApiError
    handleAsyncOperation
  };    reportError
    handleApiError

    handleAsyncOperation}
}
=======
    },;
    [reportError, handleApiError];
  );

  return {;
    reportError,;
    handleApiError,;
    handleAsyncOperation,;
  };    reportError;
    handleApiError;
    handleAsyncOperation}
} ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
