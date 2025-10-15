import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-300 mb-6">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        
        <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-6">
          <p className="text-red-200 text-sm font-mono">
            {error.message || 'An unknown error occurred'}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetError}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;