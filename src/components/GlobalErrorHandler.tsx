<<<<<<< HEAD
"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
=======
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import React, { createContext, useContext, useState, ReactNode } from 'react'
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a

interface ErrorContextType {
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

<<<<<<< HEAD
export function useErrorHandler() {
=======
export const useErrorHandler = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrorHandler must be used within an ErrorProvider');
  }
  return context;
<<<<<<< HEAD
}

interface ErrorState {
  type: 'retryable' | 'network' | 'auth' | null;
  message: string;
  retryAction?: () => void;
  loginAction?: () => void;
}

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<ErrorState>({ type: null, message: '' });

  const reportError = useCallback((error: Error, context?: any) => {
    console.error('Global error:', error, context);
    setError({
      type: 'retryable',
      message: error.message || 'An unexpected error occurred',
    });
  }, []);

  const showRetryableError = useCallback((error: Error, retryAction?: () => void) => {
    setError({
      type: 'retryable',
      message: error.message || 'Something went wrong. Please try again.',
      retryAction,
    });
  }, []);

  const showNetworkError = useCallback((retryAction?: () => void) => {
    setError({
      type: 'network',
      message: 'Network connection lost. Please check your internet connection.',
      retryAction,
    });
  }, []);

  const showAuthError = useCallback((loginAction?: () => void) => {
    setError({
      type: 'auth',
      message: 'Authentication required. Please log in to continue.',
      loginAction,
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setError({ type: null, message: '' });
  }, []);

  const handleRetry = () => {
    if (error.retryAction) {
      error.retryAction();
    }
    clearAllErrors();
  };

  const handleLogin = () => {
    if (error.loginAction) {
      error.loginAction();
    }
    clearAllErrors();
  };

  const getErrorIcon = () => {
    switch (error.type) {
      case 'network':
        return <WifiOff className="h-8 w-8 text-red-500" />;
      case 'auth':
        return <Shield className="h-8 w-8 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-8 w-8 text-red-500" />;
    }
  };

  const getErrorTitle = () => {
    switch (error.type) {
      case 'network':
        return 'Connection Error';
      case 'auth':
        return 'Authentication Required';
      default:
        return 'Something Went Wrong';
    }
  };

  return (
    <ErrorContext.Provider
      value={{
        reportError,
        showRetryableError,
        showNetworkError,
        showAuthError,
        clearAllErrors,
      }}
    >
      {children}
      {error.type && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {getErrorIcon()}
              </div>
              <CardTitle className="text-xl">{getErrorTitle()}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">{error.message}</p>
              <div className="flex gap-2 justify-center">
                {error.type === 'auth' ? (
                  <Button onClick={handleLogin} className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Log In
                  </Button>
                ) : (
                  <Button onClick={handleRetry} className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                )}
                <Button variant="outline" onClick={clearAllErrors}>
                  Dismiss
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </ErrorContext.Provider>
  );
}
=======
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState<Array<{
    id: string;
    type: 'error' | 'network' | 'auth';
    message: string;
    retryAction?: () => void;
    loginAction?: () => void;
  }>>([]);

  const reportError = (error: Error, context?: any) => {
    console.error('Error reported:', error, context);
    // In a real app, you would send this to your error reporting service
  };

  const showRetryableError = (error: Error, retryAction?: () => void) => {
    const errorId = Date.now().toString();
    setErrors(prev => [...prev, {
      id: errorId,
      type: 'error',
      message: error.message,
      retryAction
    }]);
  };

  const showNetworkError = (retryAction?: () => void) => {
    const errorId = Date.now().toString();
    setErrors(prev => [...prev, {
      id: errorId,
      type: 'network',
      message: 'Network connection failed. Please check your internet connection.',
      retryAction
    }]);
  };

  const showAuthError = (loginAction?: () => void) => {
    const errorId = Date.now().toString();
    setErrors(prev => [...prev, {
      id: errorId,
      type: 'auth',
      message: 'Authentication required. Please log in to continue.',
      loginAction
    }]);
  };

  const clearAllErrors = () => {
    setErrors([]);
  };

  const dismissError = (errorId: string) => {
    setErrors(prev => prev.filter(error => error.id !== errorId));
  };

  const value: ErrorContextType = {
    reportError,
    showRetryableError,
    showNetworkError,
    showAuthError,
    clearAllErrors
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
      {errors.map(error => (
        <div key={error.id} className="fixed top-4 right-4 z-50 max-w-sm">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {error.type === 'network' ? (
                  <WifiOff className="h-5 w-5 text-red-400" />
                ) : error.type === 'auth' ? (
                  <Shield className="h-5 w-5 text-red-400" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                )}
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-red-800">
                  {error.message}
                </p>
                <div className="mt-2 flex space-x-2">
                  {error.retryAction && (
                    <button
                      onClick={() => {
                        error.retryAction?.();
                        dismissError(error.id);
                      }}
                      className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
                    >
                      <RefreshCw className="h-4 w-4 inline mr-1" />
                      Retry
                    </button>
                  )}
                  {error.loginAction && (
                    <button
                      onClick={() => {
                        error.loginAction?.();
                        dismissError(error.id);
                      }}
                      className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
                    >
                      Login
                    </button>
                  )}
                  <button
                    onClick={() => dismissError(error.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ErrorContext.Provider>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
