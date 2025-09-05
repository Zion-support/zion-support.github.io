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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _reportError = useCallback(_(error: Error, _context?: unknown) => {_// Log to console for development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      logErrorToProduction('Global Error Handler:', error, context)
    }
=======
      logErrorToProduction('Global Error Handler:', _error, _context);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Report to Sentry for production
    if (process.env.NODE_ENV === 'production') {_Sentry.withScope(_(scope) => {
        if (context) {
<<<<<<< HEAD
          scope.setContext('errorContext', context)
        }
        scope.setLevel('error'),
        Sentry.captureException(error)
      })
=======
          scope.setContext('errorContext', _context);}
        scope.setLevel('error');
        Sentry.captureException(error);
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, []),

<<<<<<< HEAD
  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = error.message,
    const currentRetryCount = retryCount[errorKey] || 0,

    reportError(error, { retryCount: currentRetryCount }),

    // Show user-friendly error message with retry option
    toast({
      title: &quot;Something went wrong&quot;,
      description: getErrorMessage(error),
      variant: &quot;destructive&quot;,
      action: retryAction ? {
        label: &quot;Try Again&quot;,
        onClick: () => {
          setRetryCount(prev => ({
            ...prev,
            [errorKey]: currentRetryCount + 1
          })),
          retryAction()
=======
  const _showRetryableError = useCallback(_(error: Error, _retryAction?: () => void) => {_const _errorKey = error.message;
    const _currentRetryCount = retryCount[errorKey] || 0;

    reportError(error, _{ retryCount: currentRetryCount});

    // Show user-friendly error message with retry option
    toast({_title: "Something went wrong", _description: getErrorMessage(error), _variant: "destructive", _action: retryAction ? {
        label: "Try Again", _onClick: () => {
          setRetryCount(prev => ({
            ...prev, _[errorKey]: currentRetryCount + 1}));
          retryAction();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      } : undefined})
  }, [retryCount, reportError]),

<<<<<<< HEAD
  const showNetworkError = useCallback((retryAction?: () => void) => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true,
    
    toast({
      title: isOnline ? &quot;Connection Issue&quot; : &quot;No Internet Connection&quot;,
      description: isOnline 
        ? &quot;Unable to connect to our servers. Please check your connection and try again.&quot;
        : &quot;You appear to be offline. Please check your internet connection.&quot;,
      variant: &quot;destructive&quot;,
      action: retryAction ? {
        label: &quot;Retry&quot;,
        onClick: retryAction
      } : undefined})
  }, []),

  const showAuthError = useCallback((loginAction?: () => void) => {
    toast({
      title: &quot;Authentication Required&quot;,
      description: &quot;Please log in to continue with this action.&quot;,
      variant: &quot;destructive&quot;,
      action: loginAction ? {
        label: &quot;Log In&quot;,
        onClick: loginAction
      } : undefined})
  }, []),

  const clearAllErrors = useCallback(() => {
    setRetryCount({}),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // Clear any active toasts would go here if the toast system supports it
  }, []),

<<<<<<< HEAD
  const contextValue: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors},
=======
  const contextValue: ErrorContextType = {_reportError, _showRetryableError, _showNetworkError, _showAuthError, _clearAllErrors};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ErrorContext.Provider value={_contextValue}>
      {_children}
    </ErrorContext.Provider>
  )
}

<<<<<<< HEAD
export function useGlobalErrorHandler(): ErrorContextType {
  const context = useContext(ErrorContext),
  if (!context) {
    throw new Error('useGlobalErrorHandler must be used within a GlobalErrorHandler')
  }
  return context
}

// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase(),

  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again."
=======
    return &quot;Unable to connect to our servers. Please check your internet connection.&quot;;
  }

  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {
    return &quot;Your session has expired. Please log in again.&quot;;
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return &quot;You don't have permission to perform this action.&quot;;
  }

  if (message.includes('not found') || message.includes('404')) {
    return &quot;The requested information could not be found.&quot;;
  }

  if (message.includes('timeout')) {
    return &quot;Request timed out. Please try again.&quot;;
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return &quot;Please check your input and try again.&quot;;
  }

  if (message.includes('server') || message.includes('500')) {
    return &quot;Our servers are experiencing issues. Please try again in a moment.&quot;;
  }

  // Fallback for unknown errors
  return &quot;An unexpected error occurred. Please try again.&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

// Utility hook for common error scenarios
<<<<<<< HEAD
export function useErrorHandler() {
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler(),

  const handleApiError = useCallback((error: any, retryAction?: () => void) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      showAuthError()
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
      showNetworkError(retryAction)
    } else {
      showRetryableError(error, retryAction)
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
      
      if (options?.successMessage) {
        toast({
<<<<<<< HEAD
          title: "Success",
          description: options.successMessage})
=======
          title: &quot;Success&quot;,
          description: options.successMessage});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      return result
    } catch (error: any) {
      reportError(error),
      
      if (options?.onError) {
        options.onError(error)
      } else {
        handleApiError(error, options?.retryAction)
      }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return null
    }
  }, [reportError, handleApiError]),

<<<<<<< HEAD
  return {
    reportError,
    handleApiError,
    handleAsyncOperation}
=======
  return {_reportError, _handleApiError, _handleAsyncOperation};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
} 