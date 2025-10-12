import React from 'react';

/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  logErrors: boolean;
  /**
   * Whether to show detailed error messages
   */
  showDetails: boolean;
  /**
   * Whether to send errors to external service
   */
  reportErrors: boolean;
  /**
   * Error reporting endpoint
   */
  reportingEndpoint?: string;
  /**
   * Whether to show error overlay in development
   */
  showOverlay: boolean;
  /**
   * Maximum number of errors to store
   */
  maxErrors: number;
  /**
   * Custom error messages by error type
   */
  customMessages: Record<string, string>;
  /**
   * Fallback UI components
   */
  fallbackComponents: {
    default: React.ComponentType<{ error: Error; resetError: () => void }>;
    network: React.ComponentType<{ error: Error; resetError: () => void }>;
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>;
  };
}

/**
 * Default error messages
 */
export const defaultErrorMessages: Record<string, string> = {
  'ChunkLoadError': 'Failed to load application. Please refresh the page.',
  'NetworkError': 'Network connection failed. Please check your internet connection.',
  'TypeError': 'An unexpected error occurred. Please try again.',
  'ReferenceError': 'An unexpected error occurred. Please try again.',
  'SyntaxError': 'An unexpected error occurred. Please try again.',
  'default': 'Something went wrong. Please try again or contact support if the problem persists.'
};

/**
 * Default error boundary configuration
 */
export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: true,
  showDetails: process.env.NODE_ENV === 'development',
  reportErrors: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.NODE_ENV === 'production' ? '/api/errors' : undefined,
  showOverlay: process.env.NODE_ENV === 'development',
  maxErrors: 10,
  customMessages: defaultErrorMessages,
  fallbackComponents: {
    default: ({ error, resetError }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900 text-center mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            {error.message || 'An unexpected error occurred'}
          </p>
          <div className="flex space-x-3">
            <button
              onClick={resetError}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    ),
    network: ({ error, resetError }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900 text-center mb-2">
            Network Error
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={resetError}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Try again
          </button>
        </div>
      </div>
    ),
    notFound: ({ error, resetError }) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900 text-center mb-2">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            The page you're looking for doesn't exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go back
          </button>
        </div>
      </div>
    )
  }
};