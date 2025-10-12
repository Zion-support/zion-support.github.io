import React from 'react';
import { Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Error boundary configuration for different environments
 */
export const errorBoundaryConfig = {
  development: {
    showErrorDetails: true,
    logErrors: true,
    fallback: 'ErrorFallback'
  },
  production: {
    showErrorDetails: false,
    logErrors: true,
    fallback: 'NotFoundFallback'
  }
};

/**
 * Default error fallback component
 */
export function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">!</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-gray-300 mb-6">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={resetError}
            className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="block w-full px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-gray-400 cursor-pointer">Error Details</summary>
            <pre className="mt-4 p-4 bg-gray-800 rounded text-red-400 text-sm overflow-auto">
              {error.toString()}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

/**
 * Not found fallback component
 */
export function NotFoundFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">404</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-300 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
}

/**
 * Network error fallback component
 */
export function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">⚠</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Network Error</h1>
          <p className="text-gray-300 mb-6">
            There seems to be a network issue. Please check your connection and try again.
          </p>
        </div>
        
        <button
          onClick={resetError}
          className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Retry
        </button>
      </div>
    </div>
  );
}
