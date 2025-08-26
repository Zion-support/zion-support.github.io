import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">Login Error</h1>
            <p className="text-zion-slate-light mb-6">
              We encountered an error while processing your login. Please try again.
            </p>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <p className="text-red-400 text-sm font-mono break-all">
                  {error.message || 'An unexpected error occurred'}
                </p>
              </div>
            )}
            
            <div className="space-y-3">
              <button
                onClick={resetErrorBoundary}
                className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Return Home
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-zion-slate-light text-sm">
                Need help? Contact us at{' '}
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;