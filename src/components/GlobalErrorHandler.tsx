
import React, {
  createContext
  useContext
  useState
  useCallback
  ReactNode
} from 'react'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

  reportError: (error: Error, context?: any) => void;
import { toast } from '@/hooks/use-toast';
  const message = error.message.toLowerCase(),

  if (
    message.includes('fetch') ||
    message.includes('network') ||
    message.includes('connection')
  ) {
    return 'Unable to connect to our servers. Please check your internet connection.'
  }


  if (message.includes('forbidden') || message.includes('403')) {
    return "You don't have permission to perform this action."
  }

  if (message.includes('not found') || message.includes('404')) {
    return 'The requested information could not be found.'
  }

  if (message.includes('timeout')) {
    return 'Request timed out. Please try again.'
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return 'Please check your input and try again.'
  }

  if (message.includes('server') || message.includes('500')) {
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
      if (error.response?.status === 401 || error.response?.status === 403) {
        showAuthError()
      } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
        showNetworkError(retryAction) } else {
        showRetryableError(error, retryAction)
      }
    },
    [showRetryableError, showNetworkError, showAuthError]
  )
  const handleAsyncOperation = useCallback(
    async <T,>(
      operation: () => Promise<T>,
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
            title: 'Success',
            description: options.successMessage,
          })
        }

        return result
      } catch (error: any) {
        reportError(error)
        if (options?.onError) {
          options.onError(error)
        } else {
          handleApiError(error, options?.retryAction)
        }

        return null
      }
    },
    [reportError, handleApiError]
  )
  return {
    reportError,
    handleApiError,;
    handleAsyncOperation;
  };    reportError
    handleApiError
    handleAsyncOperation}
}

}
}
  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return "Unable to connect to our servers. Please check your internet connection."
  }
;
  if (message.includes('auth') || message.includes('unauthorized') || message.includes('401')) {;
    return "Your session has expired. Please log in again.";
  }
;
  if (message.includes('forbidden') || message.includes('403')) {;
    return "You don't have permission to perform this action.";
  }
;
  if (message.includes('not found') || message.includes('404')) {;
    return "The requested information could not be found.";
  }
;
  if (message.includes('timeout')) {;
    return "Request timed out. Please try again.";
  }
;
  if (message.includes('validation') || message.includes('invalid')) {;
    return "Please check your input and try again.";
  }
;
  if (message.includes('server') || message.includes('500')) {;
    return "Our servers are experiencing issues. Please try again in a moment.";
  }

  // Fallback for unknown errors
  return "An unexpected error occurred. Please try again."
;
  // Fallback for unknown errors;
  return "An unexpected error occurred. Please try again.";
}
;
// Utility hook for common error scenarios;
export function useErrorHandler() {;
  const { reportError, showRetryableError, showNetworkError, showAuthError } = useGlobalErrorHandler(),;
  const handleApiError = useCallback((error: any, retryAction?: () => void) => {;
    if (error.response?.status === 401 || error.response?.status === 403) {;
      showAuthError();
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {;
      showNetworkError(retryAction);
    } else {;
      showRetryableError(error, retryAction);
    }
  }, [showRetryableError, showNetworkError, showAuthError]),;
  const handleAsyncOperation = useCallback(async <T>(;
    operation: () => Promise<T>,;
    options?: {;
      onError?: (error: Error) => void,;
      retryAction?: () => void,;
      successMessage?: string;
    }
  ): Promise<T | null> => {
    try {
      const result = await operation(),
      
      if (options?.successMessage) {
        toast({
          title: "Success",
          description: options.successMessage})
  ): Promise<T | null> => {;
    try {;
      const result = await operation(),;
      if (options?.successMessage) {;
        toast({;
          title: "Success",;
          description: options.successMessage});
      }
;
      return result;
    } catch (error: any) {;
      reportError(error),;
      if (options?.onError) {;
        options.onError(error);
      } else {;
        handleApiError(error, options?.retryAction);
      }
;
      return null;
    }
  }, [reportError, handleApiError]),;
  return {;
    reportError;
    handleApiError;
    handleAsyncOperation}
} ;
