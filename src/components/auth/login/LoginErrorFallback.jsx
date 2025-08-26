import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
      <div className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/50 max-w-md w-full text-center">
        <div className="text-red-500 mb-4">
          <AlertTriangle className="w-16 h-16 mx-auto" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Login Error</h2>
        
        <p className="text-zion-slate-light mb-6">
          We encountered an error while processing your login. Please try again.
        </p>
        
        {error && (
          <details className="text-left mb-6">
            <summary className="text-zion-cyan cursor-pointer mb-2">Error Details</summary>
            <pre className="text-xs text-zion-slate-light bg-zion-slate/50 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetErrorBoundary}
            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <a
            href="/"
            className="flex-1 bg-zion-slate/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-zion-slate/70 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

