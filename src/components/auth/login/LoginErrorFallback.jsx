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
