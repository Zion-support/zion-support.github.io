import React from 'react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="bg-zion-blue-dark/20 border border-zion-cyan/30 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
          <p className="text-zion-slate-light mb-6">
            We encountered an error while loading the login page. Please try again.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              Go Home
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="text-zion-cyan cursor-pointer text-sm">Error Details</summary>
              <pre className="mt-2 text-xs text-zion-slate-light bg-zion-slate-dark p-3 rounded overflow-auto">
                {error?.message || 'Unknown error'}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}