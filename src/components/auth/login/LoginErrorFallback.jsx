import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark">
      <div className="max-w-md w-full bg-zion-slate p-8 rounded-xl shadow-2xl text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-zion-slate-light mb-6">
          We encountered an error while loading the login page. Please try again.
        </p>
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-zion-slate-light font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Reload Page
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="text-zion-cyan cursor-pointer mb-2">Error Details</summary>
            <pre className="text-xs text-zion-slate-light bg-zion-slate-light/10 p-3 rounded overflow-auto">
              {error?.message || 'Unknown error'}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default LoginErrorFallback;