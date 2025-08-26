import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-2xl font-bold text-white mb-4">Login Error</h1>
        <p className="text-gray-300 mb-6">
          Something went wrong while loading the login page. Please try again.
        </p>
        {error && (
          <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
            <p className="text-red-300 text-sm font-mono">
              {error.message || 'Unknown error occurred'}
            </p>
          </div>
        )}
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default LoginErrorFallback;