import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-zion-slate-light mb-6">
          We encountered an error while loading the login page. Please try again.
        </p>
        
        {error && (
          <details className="text-left mb-6">
            <summary className="text-zion-cyan cursor-pointer text-sm">Error details</summary>
            <pre className="text-xs text-red-400 mt-2 bg-black/20 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;
