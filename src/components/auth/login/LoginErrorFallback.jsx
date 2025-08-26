import React from 'react';

export default function LoginErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-futuristic">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-zion-slate-light mb-6">
            {error?.message || 'An unexpected error occurred during login.'}
          </p>
          <button
            onClick={resetErrorBoundary}
            className="btn-futuristic px-6 py-3"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}