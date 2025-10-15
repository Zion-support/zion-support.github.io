import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Something went wrong</h2>
          <p className="text-gray-400 mb-6">
            We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={resetErrorBoundary}
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            Try Again
          </button>
          
          <Link
            to="/"
            className="block w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-gray-400 hover:text-white">
              Error Details (Development)
            </summary>
            <pre className="mt-4 p-4 bg-slate-800 rounded-lg text-sm text-red-400 overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;