import React from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw } from 'lucide-react';

export function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          
          <p className="text-zion-slate-light mb-6">
            We encountered an error while loading the login page. This might be a temporary issue.
          </p>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <p className="text-red-200 text-sm font-mono">
                {error.message || 'Unknown error occurred'}
              </p>
            </div>
          )}
          
          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Go to Homepage
            </button>
          </div>
          
          <p className="text-zion-slate-light text-sm mt-6">
            If the problem persists, please contact our support team at{' '}
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="text-zion-cyan hover:text-zion-cyan-light underline"
            >
              kleber@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
=======

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

>>>>>>> cf2ffffd833531dbba8aa60328cfcb5452a016af
