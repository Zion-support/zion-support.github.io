import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
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
          
          <div className="flex space-x-3">
            <button
              onClick={resetError}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
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

export default ErrorFallback;