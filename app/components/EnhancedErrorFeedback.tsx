import React from 'react';
import { AlertTriangle, Send } from 'lucide-react';

interface ErrorFeedbackProps {
  error: Error;
  onRetry?: () => void;
  onReport?: (error: Error) => void;
}

const EnhancedErrorFeedback: React.FC<ErrorFeedbackProps> = ({
  error,
  onRetry,
  onReport
}) => {
  const handleReport = () => {
    if (onReport) {
      onReport(error);
    } else {
      // Default behavior: log to console
      console.error('Error reported:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-red-500" />
          </div>
          
          <h1 className="text-xl font-semibold text-gray-900 text-center mb-2">
            Something went wrong
          </h1>
          
          <p className="text-gray-600 text-center mb-6">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          
          <div className="flex space-x-3 mb-6">
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            )}
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              Reload Page
            </button>
          </div>

          <button
            onClick={handleReport}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <Send className="h-4 w-4 mr-2" />
            Report Error
          </button>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-gray-100 rounded-md">
              <summary className="cursor-pointer font-medium text-gray-700">
                Error Details (Development)
              </summary>
              <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                {error.toString()}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedErrorFeedback;