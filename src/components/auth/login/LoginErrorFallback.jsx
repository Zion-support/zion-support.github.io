import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-slate-dark rounded-2xl p-8 border border-zion-cyan/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-zion-slate-light mb-6">
            We encountered an error while loading the login page. Please try again.
          </p>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-left">
              <p className="text-red-400 text-sm font-mono break-all">
                {error.message || 'Unknown error occurred'}
              </p>
            </div>
          )}
          
          <div className="space-y-3">
            <button
              onClick={resetErrorBoundary}
              className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-zion-slate-light/10 hover:bg-zion-slate-light/20 text-zion-slate-light hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;