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
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void
      {children}
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
    message.includes('connection')
  ) {
    return 'Unable to connect to our servers. Please check your internet connection.'
  }
    message.includes('401')
  ) {
    return 'Your session has expired. Please log in again.'
  }
  // Fallback for unknown errors
  return 'An unexpected error occurred. Please try again.'
// Utility hook for common error scenarios
export function useErrorHandler() {
  const { reportError, showRetryableError, showNetworkError, showAuthError } =
    useGlobalErrorHandler()
  const handleApiError = useCallback(
    (error: any, retryAction?: () => void) => {
    [showRetryableError, showNetworkError, showAuthError]
  )
  const handleAsyncOperation = useCallback(
    async <T,>(
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
          scope.setContext('errorContext', context),;
        }
;
  const handleApiError = useCallback((error:any, retryAction?:() => void) => {;
    if (error.response?.status === 401 || error.response?.status === 403) {;
      showAuthError(),;
    } else if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {;
      showNetworkError(retryAction),;
    } else {;
      showRetryableError(error, retryAction),;    }
  }, [showRetryableError, showNetworkError, showAuthError]),;
;
  const handleAsyncOperation = useCallback(async <T>(;
    operation:() => Promise<T>,;
    options?:{;
      onError?:(error:Error) => void,;
      retryAction?:() => void,;
      successMessage?:string;
    }
