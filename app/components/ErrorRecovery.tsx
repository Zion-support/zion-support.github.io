import React, { useState, useEffect } from 'react';
import { errorHandler } from '../utils/errorHandler';

interface ErrorRecoveryProps {
  error?: Error;
  onRetry?: () => void;
  onReset?: () => void;
}

const ErrorRecovery: React.FC<ErrorRecoveryProps> = ({ 
  error, 
  onRetry, 
  onReset 
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [errorId, setErrorId] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const id = errorHandler.reportError(error, {
        component: 'ErrorRecovery',
        action: 'error_displayed'
      });
      setErrorId(id);
    }
  }, [error]);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);
    
    try {
      if (onRetry) {
        await onRetry();
      } else {
        // Default retry: reload the page
        window.location.reload();
      }
    } catch (retryError) {
      console.error('Retry failed:', retryError);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    } else {
      // Default reset: clear localStorage and reload
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  };

  const handleReportError = () => {
    if (errorId) {
      // In a real app, this would send error details to support
      const errorDetails = errorHandler.getErrorById(errorId);
      const supportEmail = 'support@ziontechgroup.com';
      const subject = `Error Report - ${errorId}`;
      const body = `Error ID: ${errorId}\n\nError Details:\n${JSON.stringify(errorDetails, null, 2)}`;
      
      window.open(`mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
  };

  if (!error) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Something went wrong
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
          
          {errorId && (
            <p className="text-xs text-gray-400 mb-4">
              Error ID: {errorId}
            </p>
          )}
          
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              disabled={isRetrying || retryCount >= 3}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRetrying ? 'Retrying...' : `Try Again ${retryCount > 0 ? `(${retryCount}/3)` : ''}`}
            </button>
            
            <button
              onClick={handleReset}
              className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reset Application
            </button>
            
            <button
              onClick={handleReportError}
              className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Report this error
            </button>
          </div>
          
          {retryCount >= 3 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                Multiple retry attempts failed. Please try resetting the application or contact support.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorRecovery;