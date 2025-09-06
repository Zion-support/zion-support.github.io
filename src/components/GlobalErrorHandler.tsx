import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';
interface ErrorContextType {
  reportError: (error: Error, context?: any) => void,
  showRetryableError: (error: Error, retryAction?: () => void) => void,
  showNetworkError: (retryAction?: () => void) => void,
  showAuthError: (loginAction?: () => void) => void,
  clearAllErrors: () => void
}

const ErrorContext = $2;
interface GlobalErrorHandlerProps {
  children: ReactNode}

export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [retryCount, setRetryCount] = useState<Record<string, number>>({}),

  const reportError = useCallback((error: Error, context?: any) => {
    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      logErrorToProduction('Global Error Handler:', error, context)
    }

    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        if (context) {
          scope.setContext('errorContext', context)
        }
        scope.setLevel($2);
        Sentry.captureException(error)
      })
    }
  }, []),

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = $2;
    const currentRetryCount = $2;
    reportError($2);
    // Show user-friendly error message with retry option
    toast($2);
      variant: "destructive",
      action: retryAction ? {
        label: "Try Again",
        onClick: () => {
          setRetryCount(prev = $2;
            [errorKey]: currentRetryCount + 1
          })),
          retryAction()
        }
      } : undefined})
  }, [retryCount, reportError]),

  const showNetworkError = $2;
    toast({
      title: isOnline ? "Connection Issue" : "No Internet Connection",
      description: isOnline ? "Unable to connect to our servers. Please check your connection and try again."
        : "You appear to be offline. Please check your internet connection.",
      variant: "destructive",
      action: retryAction ? {
        label: "Retry",
        onClick: retryAction} : undefined})
  }, []),

  const showAuthError = $2;
      description: "Please log in to continue with this action.",
      variant: "destructive",
      action: loginAction ? {
        label: "Log In",
        onClick: loginAction} : undefined})
  }, []),

  const clearAllErrors = useCallback(() => {
    setRetryCount($2);
    // Clear any active toasts would go here if the toast system supports it
  }, []),

  const contextValue: ErrorContextType = $2;
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors},

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  )
}

export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext($2);
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler')
  }
  return context
}

// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase($2);
  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection."
  }

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {
    return "Your session has expired. Please log in again."
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return "You don't have permission to perform this action."
  }

  if (message.includes('not found') || message.includes('404')) {
    return "The requested information could not be found."
  }

  if (message.includes('timeout')) {
    return "Request timed out. Please try again."
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return "Please check your input and try again."
  }

  if (message.includes('server') || message.includes('500')) {
    return "Our servers are experiencing issues. Please try again in a moment."
  }

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again."
}

// Utility hook for common error scenarios
export function useErrorHandler() {
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler($2);
  const handleApiError = useCallback((error: any, retryAction?: () => void) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      showAuthError()
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
      showNetworkError(retryAction)
    } else {
      showRetryableError(error, retryAction)
    }
  }, [showRetryableError, showNetworkError, showAuthError]),

  const handleAsyncOperation = $2;
    options?: {
      onError?: (error: Error) => void,
      retryAction?: () => void,
      successMessage?: string
    }
  ): Promise<T | null> => {
    try {
      const result = await operation($2);
      if (options?.successMessage) {
        toast({
          title: "Success",
          description: options.successMessage})
      }
      
      return result
    } catch (error: any) {
      reportError($2);
      if (options?.onError) {
        options.onError(error)
      } else {
        handleApiError(error, options?.retryAction)
      }
      
      return null
    }
  }, [reportError, handleApiError]),

  return {
    reportError,
    handleApiError,
    handleAsyncOperation}
} 