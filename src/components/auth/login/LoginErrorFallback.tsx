import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export default function LoginErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          
          <p className="text-zion-slate-light mb-6">
            We encountered an error while loading the login page. Please try again.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6 text-left">
              <summary className="text-zion-cyan cursor-pointer mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-xs text-zion-slate-light bg-black/20 p-3 rounded overflow-auto">
                {error?.message || 'Unknown error'}
              </pre>
            </details>
          )}
          
          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-zion-blue-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}