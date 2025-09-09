import React from 'react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark">
      <div className="max-w-md w-full space-y-8 p-8 bg-zion-slate rounded-xl border border-zion-cyan/20">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-zion-red">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-zion-slate-light">
            We encountered an error while loading the login page.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={resetErrorBoundary}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zion-cyan hover:bg-zion-cyan-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan"
          >
            Try again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full flex justify-center py-2 px-4 border border-zion-cyan text-sm font-medium rounded-md text-zion-cyan hover:bg-zion-cyan hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan"
          >
            Go to Home
          </button>
        </div>
        
        {error && (
          <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-md">
            <p className="text-sm text-red-400">
              Error details: {error.message || 'Unknown error occurred'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}