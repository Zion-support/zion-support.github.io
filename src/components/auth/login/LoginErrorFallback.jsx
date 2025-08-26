import React from 'react';
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
