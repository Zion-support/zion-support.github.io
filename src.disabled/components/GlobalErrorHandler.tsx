import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ErrorContextType {
  reportError: (error: Error, context?: any) => void;
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useErrorHandler = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrorHandler must be used within an ErrorProvider');
  }
  return context;
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
