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
  default: 'An unexpected error occurred. Please try again.',
  network: 'Network error. Please check your connection and try again.',
  notFound: 'The requested resource was not found.',
  timeout: 'Request timed out. Please try again.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.'
};

/**
 * Default error fallback component
 */
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h2>
        <p className="mt-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred'}
        </p>
        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>
        )}
        <div className="mt-6 flex gap-4">
          <button
            onClick={resetError}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Go Home
          </button>
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
        <p className="mt-2 text-center text-gray-600">
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="mt-6">
          <button
            onClick={resetError}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Retry Connection
          </button>
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Go Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Go Back
          </button>
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
export function formatErrorForLogging(error: Error, errorInfo?: any) {
  return {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    errorInfo
  };
}

/**
 * Get error boundary configuration based on environment
 */
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    logErrors: true,
    showDetails: isDevelopment,
    reportErrors: !isDevelopment,
    reportingEndpoint: isDevelopment ? undefined : '/api/errors',
    showOverlay: isDevelopment,
    maxErrors: 10,
    customMessages: DEFAULT_ERROR_MESSAGES,
    fallbackComponents: {
      default: DefaultErrorFallback,
      network: NetworkErrorFallback,
      notFound: NotFoundFallback
    }
  };
}

export default getErrorBoundaryConfig;