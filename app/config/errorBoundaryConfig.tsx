import React from 'react';

export interface ErrorBoundaryConfig {
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetOnStateChange?: boolean;
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  fallback: ({ error, resetError }) => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          {error.message}
        </p>
        <button
          onClick={resetError}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  onError: (error, errorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  },
  resetOnPropsChange: true,
  resetOnStateChange: false
};

export default defaultErrorBoundaryConfig;