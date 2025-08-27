import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Login Error
        </h2>
        
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. This might be a temporary issue.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-zion-cyan cursor-pointer mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-zion-slate-light bg-zion-slate-dark/50 p-3 rounded-lg overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col gap-3">
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan/20 text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </a>
        </div>
        
        <p className="text-sm text-zion-slate-light mt-6">
          If this problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default LoginErrorFallback;

export const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
          <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Login Error
        </h1>
        <p className="text-gray-600 mb-6">
          {error?.message || 'An error occurred during login. Please try again.'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

