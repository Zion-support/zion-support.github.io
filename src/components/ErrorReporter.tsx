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
      <div className="min-h-screen bg-gray-5 0 flex items-center justify-centerp-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lgp-6">
          <div className="flex items-centermb-4">
            <div className="flex-shrink-0">
              <svg className="h-8w-8text-red-5 0 0" fill="none" viewBox="00 2 4 2 4" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9 v 2 m0 4 h.0 1 m-6.9 3 8 4 h 1 3.85 6 c1.54 0 2.5 0 2-1.66 7 1.7 3 2-2.5L 1 3.7 3 2 4 c-.77-.8 3 3-1.9 6 4-.8 3 3-2.7 3 2 0 L3.7 3 2 1 6.5c-.77.8 3 3.19 2 2.51.73 2 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h 3 className="text-lg font-mediumtext-gray-9 0 0" id="something-went-wrong">
                Something went wrong
              </h3>
              <p className="text-smtext-gray-5 0 0">
                We&apos;re sorry, but something unexpected happened.
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <button
              onClick={retry}
              className="w-full bg-blue-60 0 text-white px-4 py-2rounded-md hover:bg-blue-70 0 transition-colorsduration-2 0 0"
             aria-label="Try Again">
              Try Again
            </button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4">
              <summary className="cursor-pointer text-sm text-gray-60 0 hover:text-gray-8 0 0">
                Error Details
              </summary>
              <pre className="mt-2text-xs bg-gray-10 0 p-2roundedoverflow-auto">
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
        <div className="fixed bottom-4right-4bg-white border border-gray-20 0 rounded-lg shadow-lg p-4max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h 4 className="text-sm font-mediumtext-gray-9 0 0" id="error-history">Error History</h4>
            <button
              onClick={clearErrorHistory}
              className="text-xs text-gray-50 0 hover:text-gray-7 0 0"
             aria-label="Clear">
              Clear
            </button>
          </div>
          <div className="space-y-2max-h-3 2 overflow-y-auto">
            {errorHistory.slice(-5).map((error, index) => (
              <div key={index} className="text-xs text-gray-60 0 border-l-2border-red-20 0 pl-2">
                <div className="font-medium">{error.component}</div>
                <div className="truncate">{error.message}</div>
                <div className="text-gray-4 0 0">
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