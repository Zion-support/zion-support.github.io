import React, { useState, useEffect, useCallback } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

interface ErrorReporterProps {
  children: React.ReactNode;
  onError?: (error: ErrorInfo) => void;
}

export const ErrorReporter: React.FC<ErrorReporterProps> = ({ children, onError }) => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const reportError = useCallback((error: Error, errorInfo?: any) => {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    setErrors(prev => [...prev, errorData]);

    // Send to external service if online
    if (isOnline && onError) {
      onError(errorData);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorData);
    }
  }, [isOnline, onError]);

  const handleError = useCallback((event: ErrorEvent) => {
    const error = new Error(event.message);
    error.stack = `${event.filename}:${event.lineno}:${event.colno}`;
    reportError(error);
  }, [reportError]);

  const handleUnhandledRejection = useCallback((event: PromiseRejectionEvent) => {
    const error = event.reason instanceof Error ? 
      event.reason : 
      new Error(String(event.reason));
    reportError(error);
  }, [reportError]);

  useEffect(() => {
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleError, handleUnhandledRejection]);

  return (
    <div className="error-reporter">
      {children}
      {process.env.NODE_ENV === 'development' && errors.length > 0 && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <div className="font-bold">Errors Detected ({errors.length})</div>
          {errors.slice(-3).map((error, index) => (
            <div key={index} className="text-sm mt-1">
              {error.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ErrorReporter;