import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  className?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetError, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 ${className}`}>
      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center border border-red-400/20">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" aria-hidden="true" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-red-300 bg-red-900/20 p-3 rounded overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetError}
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            aria-label="Try again"
          >
            <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            aria-label="Go to home page"
          >
            <Home className="w-4 h-4 mr-2" aria-hidden="true" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;