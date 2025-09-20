import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react';
import * as Sentry from '@sentry/browser';
import { logErrorToProduction } from '@/utils/productionLogger';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ErrorContextType {
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void;
  handleAsyncOperation: <T>(operation: () => Promise<T>) => Promise<T | null>;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorType: 'general' | 'network' | 'auth' | null;
  retryAction?: () => void;
  loginAction?: () => void;
}

interface ErrorProviderProps {
  children: ReactNode;
}

export function ErrorProvider({ children }: ErrorProviderProps) {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    errorType: null,
  });

  const reportError = (error: Error, context?: any) => {
    logErrorToProduction('Global error reported', { error: error.message, context });
    Sentry.captureException(error, { extra: context });
    
    setErrorState({
      hasError: true,
      error,
      errorType: 'general',
    });
  };

  const showRetryableError = (error: Error, retryAction?: () => void) => {
    setErrorState({
      hasError: true,
      error,
      errorType: 'general',
      retryAction,
    });
  };

  const showNetworkError = (retryAction?: () => void) => {
    setErrorState({
      hasError: true,
      error: new Error('Network connection failed'),
      errorType: 'network',
      retryAction,
    });
  };

  const showAuthError = (loginAction?: () => void) => {
    setErrorState({
      hasError: true,
      error: new Error('Authentication required'),
      errorType: 'auth',
      loginAction,
    });
  };

  const clearAllErrors = () => {
    setErrorState({
      hasError: false,
      error: null,
      errorType: null,
    });
  };

  const handleAsyncOperation = async <T,>(operation: () => Promise<T>): Promise<T | null> => {
    try {
      return await operation();
    } catch (error) {
      if (error instanceof Error) {
        reportError(error);
      }
      return null;
    }
  };

  const handleRetry = () => {
    if (errorState.retryAction) {
      errorState.retryAction();
    }
    clearAllErrors();
  };

  const handleLogin = () => {
    if (errorState.loginAction) {
      errorState.loginAction();
    }
    clearAllErrors();
  };

  const contextValue: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors,
    handleAsyncOperation,
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
      {errorState.hasError && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Alert variant="destructive" className="max-w-md">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>
              {errorState.errorType === 'network' && 'Network Error'}
              {errorState.errorType === 'auth' && 'Authentication Required'}
              {errorState.errorType === 'general' && 'Something went wrong'}
            </AlertTitle>
            <AlertDescription className="mt-2">
              {errorState.error?.message || 'An unexpected error occurred'}
            </AlertDescription>
            <div className="mt-4 flex gap-2">
              {errorState.retryAction && (
                <Button onClick={handleRetry} size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry
                </Button>
              )}
              {errorState.loginAction && (
                <Button onClick={handleLogin} size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}
              <Button onClick={clearAllErrors} variant="outline" size="sm">
                Dismiss
              </Button>
            </div>
          </Alert>
        </div>
      )}
    </ErrorContext.Provider>
  );
}

export function useErrorHandler() {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useErrorHandler must be used within an ErrorProvider');
  }
  return context;
}