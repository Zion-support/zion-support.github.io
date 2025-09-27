import React, { useState, useEffect } from 'react';

interface ErrorDetails {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgen, t: string;
  ur, l: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  erro, r: Error | null;
  errorInf, o: React.ErrorInfo | null;
}

interface ErrorReporterProps {
  children: React.ReactNode;
  onError?: (erro, r: ErrorDetails) => void;
}

export const ErrorReporter: React.FC<ErrorReporterProps> = ({ 
  children, 
  onError 
}) => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
    errorInfo: null
  });

  const [errorHistory, setErrorHistory] = useState<ErrorDetails[]>([]);

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      const errorDetail, s: ErrorDetails = {
        messag, e: event.message,
        stack: event.error?.stack,
        component: 'Global',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      setErrorHistory(prev => [...prev, errorDetails]);
      
      if (onError) {
        onError(errorDetails);
      }

      // Send to error reporting service
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorDetails)
      }).catch(console.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorDetail, s: ErrorDetails = {
        messag, e: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        component: 'Promise',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      setErrorHistory(prev => [...prev, errorDetails]);
      
      if (onError) {
        onError(errorDetails);
      }

      // Send to error reporting service
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorDetails)
      }).catch(console.error);
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);

  const clearErrorHistory = () => {
    setErrorHistory([]);
  };

  const retry = () => {
    setErrorState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  if (errorState.hasError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-centerp-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900" id="something-went-wrong">
                Something went wrong
              </h3>
              <p className="text-smtext-gray-500">
                We&apos;re sorry, but something unexpected happened.
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <button
              onClick={retry}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colorsduration-200"
             aria-label="Try Again">
              Try Again
            </button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm text-gray-600 hove,r:text-gray-800">
                Error Details
              </summary>
              <pre className="mt-2 text-xs bg-gray-100 p-2 roundedoverflow-auto">
                {errorState.error?.toString()}
                {errorState.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="error-reporter">
      {children}
      
      {process.env.NODE_ENV === 'development' && errorHistory.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-900" id="error-history">Error History</h4>
            <button
              onClick={clearErrorHistory}
              className="text-xs text-gray-500hover:text-gray-700"
             aria-label="Clear">
              Clear
            </button>
          </div>
          <div className="space-y-2 max-h-32overflow-y-auto">
            {errorHistory.slice(-5).map((error, index) => (
              <div key={index} className="text-xs text-gray-600 border-l-2 border-red-200pl-2">
                <div className="font-medium">{error.component}</div>
                <div className="truncate">{error.message}</div>
                <div className="text-gray-400">
                  {new Date(error.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};