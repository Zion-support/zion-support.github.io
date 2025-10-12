import React from 'react';

/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  logToConsole: boolean;
  /**
   * Whether to show detailed error messages
   */
  showDetailedErrors: boolean;
  /**
   * Whether to send errors to external service
   */
  sendToService: boolean;
  /**
   * Error reporting endpoint
   */
  reportingEndpoint?: string;
  /**
   * Whether to show error overlay in development
   */
  showErrorOverlay: boolean;
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
export const DEFAULT_ERROR_MESSAGES: Record<string, string> = {
  'ChunkLoadError': 'Failed to load application. Please refresh the page.',
  'TypeError': 'An unexpected error occurred. Please try again.',
  'ReferenceError': 'A reference error occurred. Please refresh the page.',
  'NetworkError': 'Network error. Please check your connection and try again.',
  'TimeoutError': 'Request timed out. Please try again.',
  'default': 'An unexpected error occurred. Please refresh the page.',
};

/**
 * Default fallback components
 */
export const DEFAULT_FALLBACK_COMPONENTS = {
  default: ({ error, resetError }: { error: Error; resetError: () => void }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h2>
        <p className="mt-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <div className="mt-6 flex space-x-3">
          <button
            onClick={resetError}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  ),
  network: ({ error, resetError }: { error: Error; resetError: () => void }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Network Error
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Please check your internet connection and try again.
        </p>
        <div className="mt-6 flex space-x-3">
          <button
            onClick={resetError}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  ),
  notFound: ({ error, resetError }: { error: Error; resetError: () => void }) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-2 text-center text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => window.history.back()}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  ),
};

/**
 * Default error boundary configuration
 */
export const DEFAULT_ERROR_BOUNDARY_CONFIG: ErrorBoundaryConfig = {
  logToConsole: true,
  showDetailedErrors: process.env.NODE_ENV === 'development',
  sendToService: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
  showErrorOverlay: process.env.NODE_ENV === 'development',
  maxErrors: 10,
  customMessages: DEFAULT_ERROR_MESSAGES,
  fallbackComponents: DEFAULT_FALLBACK_COMPONENTS,
};