import React from 'react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-futuristic">
      <div className="max-w-md w-full bg-zion-slate-dark p-8 rounded-lg border border-zion-cyan/20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zion-cyan mb-4">Something went wrong</h2>
          <p className="text-gray-300 mb-6">
            {error?.message || 'An unexpected error occurred during login.'}
          </p>
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-3 bg-zion-cyan text-zion-slate-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}