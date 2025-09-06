reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void

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
          }import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react';
import * as Sentry from '@sentry/nextjs',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ErrorContextType {;
  reportError: (error: Error, context?: any) => void,;
  showRetryableError: (error: Error, retryAction?: () => void) => void,;
  showNetworkError: (retryAction?: () => void) => void,;
  showAuthError: (loginAction?: () => void) => void,;
  clearAllErrors: () => void;
}
;
const ErrorContext = createContext<ErrorContextType | null>(null),;
interface GlobalErrorHandlerProps {;
  children: ReactNode;
}
;
export function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {;
  const [retryCount, setRetryCount] = useState<Record<string number>>({}),;
  const reportError = useCallback((error: Error, context?: any) => {;
    // Log to console for development;
    if (process.env.NODE_ENV === 'development') {;
      logErrorToProduction('Global Error Handler:', error, context);
    }
;
    // Report to Sentry for production;
    if (process.env.NODE_ENV === 'production') {;
      Sentry.withScope((scope) => {;
        if (context) {;
          scope.setContext('errorContext', context);
        }
        scope.setLevel('error'),;
        Sentry.captureException(error);
      });
    }
  }, []),

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    const errorKey = error.message,
    const currentRetryCount = retryCount[errorKey] || 0,

    reportError(error, { retryCount: currentRetryCount }),

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
          })),
          retryAction()
        }
      } : undefined})
  }, [retryCount, reportError]),

  const showNetworkError = useCallback((retryAction?: () => void) => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true,
    
    toast({
      title: isOnline ? "Connection Issue" : "No Internet Connection",
      description: isOnline 
        ? "Unable to connect to our servers. Please check your connection and try again."
        : "You appear to be offline. Please check your internet connection.",
      variant: "destructive",
      action: retryAction ? {
        label: "Retry",
        onClick: retryAction
      } : undefined})
  }, []),

  const showAuthError = useCallback((loginAction?: () => void) => {
    toast({
      title: "Authentication Required",
      description: "Please log in to continue with this action.",
      variant: "destructive",
      action: loginAction ? {
        label: "Log In",
        onClick: loginAction
      } : undefined})
  }, []),

  const clearAllErrors = useCallback(() => {
    setRetryCount({}),
    // Clear any active toasts would go here if the toast system supports it
  }, []),

  const contextValue: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors},

