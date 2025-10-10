'use client';

import React from 'react';

interface ErrorBoundaryConfig {
  fallback: React.ComponentType<any>;
  onError?: (error: Error, errorInfo: any) => void;
  onReset?: () => void;
}

const ErrorBoundaryConfig: React.FC = () => {
  const config: ErrorBoundaryConfig = {
    fallback: () => (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
        <p>An error occurred. Please try again later.</p>
      </div>
    ),
    onError: (error: Error, errorInfo: any) => {
      console.error('Error caught by boundary:', error, errorInfo);
    },
    onReset: () => {
      console.log('Error boundary reset');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Boundary Config</h3>
      <p className="text-gray-600">Configuration for error boundary components.</p>
    </div>
  );
};

export default ErrorBoundaryConfig;
