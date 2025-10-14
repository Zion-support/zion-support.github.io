import React from 'react';

interface ErrorBoundaryConfig {
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  showDetails?: boolean;
}

const defaultConfig: ErrorBoundaryConfig = {
  fallback: ({ resetError }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">An unexpected error occurred.</p>
        <button
          onClick={resetError}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  onError: (error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  },
  showDetails: process.env.NODE_ENV === 'development'
};

export default defaultConfig;
