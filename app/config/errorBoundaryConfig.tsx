import React from 'react';

export interface ErrorBoundaryConfig {
  fallback: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  fallback: ({ error, resetError }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error.message}</p>
          <button
            onClick={resetError}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  ),
  onError: (error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  }
};