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
export const DEFAULT_ERROR_MESSAGES = {
  default: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  notFound: 'The requested resource was not found.',
  timeout: 'Request timed out. Please try again.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
};

/**
 * Default error fallback component
 */
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error.message || 'An unexpected error occurred'}
          </p>
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">
              {error.stack}
            </pre>
          )}
          <div className="mt-6 flex space-x-3 justify-center">
            <button
              onClick={resetError}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Try Again
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Network error fallback component
 */
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
            Connection Issue
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Unable to connect to the server. Please check your internet connection and try again.
          </p>
          <div className="mt-6 flex space-x-3 justify-center">
            <button
              onClick={resetError}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Not found error fallback component
 */
function NotFoundFallback(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6 flex space-x-3 justify-center">
            <button
              onClick={() => (window.location.href = '/')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Go Home
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Get error type from error object
 */
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
    return 'network';
  }
  if (error.message.includes('404') || error.message.includes('not found')) {
    return 'notFound';
  }
  if (error.message.includes('timeout')) {
    return 'timeout';
  }
  if (error.message.includes('500') || error.message.includes('server')) {
    return 'serverError';
  }
  if (error.message.includes('validation')) {
    return 'validation';
  }
  return 'default';
}

/**
 * Format error for logging
 */
export function formatErrorForLogging(error: Error, context?: string) {
  return {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
  };
}

/**
 * Get error boundary configuration based on environment
 */
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {
  return {
    logErrors: true,
    showDetails: process.env.NODE_ENV === 'development',
    reportErrors: process.env.NODE_ENV === 'production',
    reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
    showOverlay: process.env.NODE_ENV === 'development',
    maxErrors: 10,
    customMessages: DEFAULT_ERROR_MESSAGES,
    fallbackComponents: {
      default: DefaultErrorFallback,
      network: NetworkErrorFallback,
      notFound: NotFoundFallback,
    },
  };
}

export default getErrorBoundaryConfig;