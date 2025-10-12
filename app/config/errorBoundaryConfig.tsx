import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryConfig {
  fallback: React.ComponentType<any>;
  onError?: (error: Error, errorInfo: any) => void;
  onReset?: () => void;
}

/**
 * Get error boundary configuration based on environment
 */
export const getErrorBoundaryConfig = (): ErrorBoundaryConfig => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    fallback: isDevelopment ? DevelopmentErrorFallback : ProductionErrorFallback,
    onError: (error, errorInfo) => {
      console.error('Error caught by boundary:', error, errorInfo);
      
      // In production, you might want to send this to an error reporting service
      if (!isDevelopment) {
        // Example: sendErrorToService(error, errorInfo);
      }
    },
    onReset: () => {
      // Reset any error state or redirect to a safe page
      window.location.reload();
    }
  };
};

/**
 * Default error fallback component
 */
const DefaultErrorFallback: React.FC<{ error?: Error; resetError?: () => void }> = ({
  error,
  resetError
}) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <div className="space-y-4">
        <button
          onClick={resetError}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </button>
        <Link
          to="/"
          className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  </div>
);

/**
 * Development error fallback component
 */
const DevelopmentErrorFallback: React.FC<{ error?: Error; resetError?: () => void }> = ({
  error,
  resetError
}) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Bug className="w-8 h-8 text-red-500 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">Development Error</h1>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Error Details:</h2>
        <pre className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800 overflow-auto">
          {error?.toString()}
        </pre>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={resetError}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </button>
        <Link
          to="/"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  </div>
);

/**
 * Production error fallback component
 */
const ProductionErrorFallback: React.FC<{ error?: Error; resetError?: () => void }> = ({
  error,
  resetError
}) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
      </p>
      <div className="space-y-4">
        <button
          onClick={resetError}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </button>
        <Link
          to="/"
          className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  </div>
);

export default getErrorBoundaryConfig;