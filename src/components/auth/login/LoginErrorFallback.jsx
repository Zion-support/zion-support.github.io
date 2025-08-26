import React from 'react';

export const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Login Error</h2>
        <p className="text-gray-300 mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

