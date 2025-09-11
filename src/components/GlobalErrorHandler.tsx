reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void


  create_context,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react';
import * as Sentry from '@sentry / nextjs';
import { logErrorToProduction } from '@/utils / production_logger';
interface ErrorContextType {
  report_error: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retry_action?: () => void) => void;
  showNetworkError: (retry_action?: () => void) => void;
  showAuthError: (login_action?: () => void) => void;
  clearAllErrors: () => void;
}, []);
export /**
 * GlobalErrorHandler - Function description
 */
function GlobalErrorHandler() {
  const [retry_count, setRetryCount] = useState < Record < string, number>>({});
  const report_error = useCallback ((error: Error, context?: any, ) => {
    // Log to console for development;
    // Check condition
if ( {) {
  $2
}
      logErrorToProduction ('Global Error Handler:', error, context);
    }
    // Report to Sentry for production;
    // Check condition
if ( {) {
  $2
}
      Sentry.with_scope (scope => {        // Check condition
if ( {) {
  $2
}
          scope.set_context ('error_context', context);

        }
        scope.set_level ('error');
        Sentry.capture_exception (error);
      });
    }

  }, []);
  const showRetryableError = useCallback (
    (error: Error, retry_action?: () => void) => {
      const error_key = error.message;
      const currentRetryCount = retry_count[error_key] || 0;
      report_error (error, { retry_count: currentRetryCount });
      // Show user - friendly error message with retry option;
      toast ({
        title: 'Something went wrong',
        description: getErrorMessage (error),
        variant: 'destructive',
        action: retry_action;
          ? {
              label: 'Try Again',
              on_click: () => {
                setRetryCount (prev => ({
                  ...prev,
                  [error_key]: currentRetryCount + 1,
                }));
                retry_action ();
              },
            }
          : undefined,
      });
    },
    [retry_count, report_error]);
  const showNetworkError = useCallback ((retry_action?: () => void) => {
    const is_online = typeof navigator !== 'undefined' ? navigator.on_line : true;
    toast ({
      title: is_online ? 'Connection Issue' : 'No Internet Connection',
      description: is_online;
        ? 'Unable to connect to our servers. Please check your connection and try again.';
        : 'You appear to be offline. Please check your internet connection.',
      variant: 'destructive',
      action: retry_action;
        ? {
            label: 'Retry',
            on_click: retry_action,
          }
        : undefined,
    });
  }, []);
  const showAuthError = useCallback ((login_action?: (, ) => void) => {
    toast ({
      title: 'Authentication Required',
      description: 'Please log in to continue with this action.',
      variant: 'destructive',
      action: login_action;
        ? {
            label: 'Log In',
            on_click: login_action,
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

import { toast } from '@/hooks/use-toast';
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


// Helper function to convert technical errors to user-friendly messages
function getErrorMessage(error: Error): string {
  const message = error.message.toLowerCase(),