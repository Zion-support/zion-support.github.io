<<<<<<< HEAD
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react',
import { toast } from '@/hooks/use-toast',
import { Button } from '@/components/ui/button',
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import * as Sentry from '@sentry/nextjs',
import {logErrorToProduction} from '@/utils/productionLogger',


interface ErrorContextType {
  reportError: (error: Error, context?: any) => void,
  showRetryableError: (error: Error, retryAction?: () => void) => void,
  showNetworkError: (retryAction?: () => void) => void,
  showAuthError: (loginAction?: () => void) => void,
  clearAllErrors: () => void
}

const ErrorContext = createContext<ErrorContextType | null>(null),

interface GlobalErrorHandlerProps {
  children: ReactNode
}

export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [retryCount, setRetryCount] = useState<Record<string number>>({}),
=======
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';


interface ErrorContextType {
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | null>(null);

interface GlobalErrorHandlerProps {
  children: ReactNode;
}

export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [retryCount, setRetryCount] = useState<Record<string, number>>({});
>>>>>>> origin/auto/autonomy-17186719616

  const reportError = useCallback((error: Error, context?: any) => {
    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      logErrorToProduction('Global Error Handler:', error, context),
=======
      logErrorToProduction('Global Error Handler:', error, context);
>>>>>>> origin/auto/autonomy-17186719616
    }

    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        if (context) {
<<<<<<< HEAD
          scope.setContext('errorContext', context),
        }
        scope.setLevel('error'),
        Sentry.captureException(error),
      }),
    }
  }, []),

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = error.message,
    const currentRetryCount = retryCount[errorKey] || 0,

    reportError(error, { retryCount: currentRetryCount }),
=======
          scope.setContext('errorContext', context);
        }
        scope.setLevel('error');
        Sentry.captureException(error);
      });
    }
  }, []);

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = error.message;
    const currentRetryCount = retryCount[errorKey] || 0;

    reportError(error, { retryCount: currentRetryCount });
>>>>>>> origin/auto/autonomy-17186719616

    // Show user-friendly error message with retry option
    toast({
      title: "Something went wrong",
      description: getErrorMessage(error),
      variant: "destructive",
      action: retryAction ? {
        label: "Try Again",
        onClick: () => {
          setRetryCount(prev => ({
            ...prev,
            [errorKey]: currentRetryCount + 1
<<<<<<< HEAD
          })),
          retryAction(),
        }
      } : undefined}),
  }, [retryCount, reportError]),

  const showNetworkError = useCallback((retryAction?: () => void) => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true,
=======
          }));
          retryAction();
        }
      } : undefined,
    });
  }, [retryCount, reportError]);

  const showNetworkError = useCallback((retryAction?: () => void) => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
>>>>>>> origin/auto/autonomy-17186719616
    
    toast({
      title: isOnline ? "Connection Issue" : "No Internet Connection",
      description: isOnline 
        ? "Unable to connect to our servers. Please check your connection and try again."
        : "You appear to be offline. Please check your internet connection.",
      variant: "destructive",
      action: retryAction ? {
        label: "Retry",
        onClick: retryAction
<<<<<<< HEAD
      } : undefined}),
  }, []),
=======
      } : undefined,
    });
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const showAuthError = useCallback((loginAction?: () => void) => {
    toast({
      title: "Authentication Required",
      description: "Please log in to continue with this action.",
      variant: "destructive",
      action: loginAction ? {
        label: "Log In",
        onClick: loginAction
<<<<<<< HEAD
      } : undefined}),
  }, []),

  const clearAllErrors = useCallback(() => {
    setRetryCount({}),
    // Clear any active toasts would go here if the toast system supports it
  }, []),
=======
      } : undefined,
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setRetryCount({});
    // Clear any active toasts would go here if the toast system supports it
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  const contextValue: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
<<<<<<< HEAD
    clearAllErrors},
=======
    clearAllErrors,
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
<<<<<<< HEAD
  ),
}

export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext(ErrorContext),
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler'),
  }
  return context,
=======
  );
}

export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler');
  }
  return context;
>>>>>>> origin/auto/autonomy-17186719616
}

// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
<<<<<<< HEAD
  const message = error.message.toLowerCase(),

  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection."
  }

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {
    return "Your session has expired. Please log in again.",
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return "You don't have permission to perform this action.",
  }

  if (message.includes('not found') || message.includes('404')) {
    return "The requested information could not be found.",
  }

  if (message.includes('timeout')) {
    return "Request timed out. Please try again.",
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return "Please check your input and try again.",
  }

  if (message.includes('server') || message.includes('500')) {
    return "Our servers are experiencing issues. Please try again in a moment.",
  }

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again.",
=======
  const message = error.message.toLowerCase();

  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection.";
  }

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {
    return "Your session has expired. Please log in again.";
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return "You don't have permission to perform this action.";
  }

  if (message.includes('not found') || message.includes('404')) {
    return "The requested information could not be found.";
  }

  if (message.includes('timeout')) {
    return "Request timed out. Please try again.";
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return "Please check your input and try again.";
  }

  if (message.includes('server') || message.includes('500')) {
    return "Our servers are experiencing issues. Please try again in a moment.";
  }

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again.";
>>>>>>> origin/auto/autonomy-17186719616
}

// Utility hook for common error scenarios
export function useErrorHandler() {
<<<<<<< HEAD
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler(),

  const handleApiError = useCallback((error: any, retryAction?: () => void) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      showAuthError(),
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
      showNetworkError(retryAction),
    } else {
      showRetryableError(error, retryAction),
    }
  }, [showRetryableError, showNetworkError, showAuthError]),

  const handleAsyncOperation = useCallback(async <T>(
    operation: () => Promise<T>,
    options?: {
      onError?: (error: Error) => void,
      retryAction?: () => void,
      successMessage?: string
    }
  ): Promise<T | null> => {
    try {
      const result = await operation(),
=======
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler();

  const handleApiError = useCallback((error: any, retryAction?: () => void) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      showAuthError();
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
      showNetworkError(retryAction);
    } else {
      showRetryableError(error, retryAction);
    }
  }, [showRetryableError, showNetworkError, showAuthError]);

  const handleAsyncOperation = useCallback(async <T,>(
    operation: () => Promise<T>,
    options?: {
      onError?: (error: Error) => void;
      retryAction?: () => void;
      successMessage?: string;
    }
  ): Promise<T | null> => {
    try {
      const result = await operation();
>>>>>>> origin/auto/autonomy-17186719616
      
      if (options?.successMessage) {
        toast({
          title: "Success",
<<<<<<< HEAD
          description: options.successMessage}),
      }
      
      return result,
    } catch (error: any) {
      reportError(error),
      
      if (options?.onError) {
        options.onError(error)
      } else {
        handleApiError(error, options?.retryAction),
      }
      
      return null,
    }
  }, [reportError, handleApiError]),
=======
          description: options.successMessage,
        });
      }
      
      return result;
    } catch (error: any) {
      reportError(error);
      
      if (options?.onError) {
        options.onError(error);
      } else {
        handleApiError(error, options?.retryAction);
      }
      
      return null;
    }
  }, [reportError, handleApiError]);
>>>>>>> origin/auto/autonomy-17186719616

  return {
    reportError,
    handleApiError,
<<<<<<< HEAD
    handleAsyncOperation},
} 
=======
    handleAsyncOperation,
  };
} 
>>>>>>> origin/auto/autonomy-17186719616
