import React from 'react';

const LoginErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-red-500">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Login Error
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Something went wrong while loading the login page.
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-sm text-red-200">
              <strong>Error:</strong> {error?.message || 'Unknown error occurred'}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={resetErrorBoundary}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorFallback;