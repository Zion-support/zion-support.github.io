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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 text-center mb-2">
            Something went wrong
          </h1>
          
          <p className="text-gray-600 text-center mb-6">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          
          <div className="space-y-3">
            {onRetry && (
              <button
                onClick={onRetry}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Try Again
              </button>
            )}
            
            <button
              onClick={handleReport}
              className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Report Issue
            </button>
          </div>
          
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