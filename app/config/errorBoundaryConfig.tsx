<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
=======
import React from 'react';
<<<<<<< HEAD
=======
export interface ErrorBoundaryConfig {/**
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {if (error.message.includes('Network') || error.message.includes('fetch')) {return 'network'}
export default getErrorBoundaryConfig;
/**
 * Error Boundary Configuration;
 * Centralized configuration for error handling across the application;
 */
   * Whether to log errors to console*/
  /**
   * Whether to show detailed error messages*/
  /**
   * Whether to send errors to external service*/
  /**
   * Error reporting endpoint*/
  reportingEndpoint?: string;/**
   * Whether to show error overlay in development*/
  /**
   * Maximum number of errors to store*/
  /**
   * Custom error messages by error type*/
  customMessages: Record<string, string   />;/**
   * Fallback UI components*/
  fallbackComponents: {}
    default: React.ComponentType<{error: Error; resetError: () => void}>
    network: React.ComponentType<{error: Error; resetError: () => void}>
    notFound: React.ComponentType<{error: Error; resetError: () => void}>}}
/**
 * Default error messages;
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

const ErrorBoundaryConfig = {
  fallback: <div>Something went wrong</div>,
  onError: (error: Error) => {
    console.error('Error caught by boundary:', error);
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ErrorBoundaryConfig;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
/**
 * Get error boundary configuration based on environment
 */
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {return {
    logErrors: true,
    showDetails: isDevelopment,
    reportErrors: !isDevelopment,
    reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
    showErrorOverlay: isDevelopment,
    maxStoredErrors: 50,
    customMessages: DEFAULT_ERROR_MESSAGES,
    fallbackComponents: {
      default: DefaultErrorFallback,
      network: NetworkErrorFallback,
      notFound: NotFoundFallback;
    },
  };
}

/**
 * Default error fallback component
 */
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full"></div>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
=======
 * Default error messages*/
;
};/**
 * Get error boundary configuration based on environment*/
      notFound: NotFoundFallback,}
    },}}
/**
 * Default error fallback component*/

            />
          </svg>
        </div>
        <h2 className="w-5h-5ml-2"   />Oops! Something went wrong;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
        </h2>
        <p className="mt-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred'}
        </p>
<<<<<<< HEAD
        {process.env['NODE_ENV'] === 'development' && (
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>
        )}
        <div className="mt-6 flex gap-4"></div>
          <button
            onClick={resetError}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
=======
        {process.env['NODE_ENV'] === 'development' && (}

          <pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto">{error.stack}</pre>
  )}
        </div></div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======
  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
/**
 * Network error fallback component
 */
<<<<<<< HEAD
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full"></div>
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
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
        <p className="mt-2 text-center text-gray-600">
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="mt-6"></div>
          <button
            onClick={resetError}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    </div>
  );
}

=======

        </div></div>
        </div></div>
        </div></div>

            Try Again

 (window.location.href = '/')}

            Go Home

    </div>
  )}
/**
 * Network error fallback component*/;
function NetworkErrorFallback({resetError}: {error: Error; resetError: () => void}) {return (
    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            viewBox="0 0 24 24">

function NetworkErrorFallback({ resetError}: {error: Error; resetError: () => void}) {return (
    <div>
        </div></div>
        </div></div>
        </div></div>

        <h2 className="mt-4 text-2 xl font-boldtext-centertext-gray-900">Connection Issue</h2>
          Unable to connect to the server. Please check your internet connection and try again.

        </div></div>

            Retry Connection

  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
/**
 * Not found error fallback component
 */
<<<<<<< HEAD
function NotFoundFallback(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full text-center"></div>
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center"></div>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

=======

        </div></div>
      <div className="max-w-mdw-fulltext-center"   /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.

        </div></div>

 (window.location.href = '/')}

            Go Home

 window.history.back()}

            Go Back

  )}
/**
 * Get error type from error object;
 */
    return 'network'
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Retry Connection;
          </button>
        </div>
    </div>
  )}
/**
 * Not found error fallback component*/

function NotFoundFallback(): JSX.Element {return (
    <div>
        </div></div>
      <div className="max-w-mdw-fulltext-center"   /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.

        </div></div>

 (window.location.href = '/')}

            Go Home

 window.history.back()}

            Go Back

    </div>
  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
/**
 * Get error type from error object
 */
<<<<<<< HEAD
export function getErrorType(error: Error,): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
    return 'network';
  }
  if (error.message.includes('404') || error.message.includes('not found')) {
    return 'notFound';
  }
=======

export interface ErrorBoundaryConfig {
  logToConsole: boolean;
  showDetailedErrors: boolean;
  reportToExternalService: boolean;
  errorReportingEndpoint?: string;
}

export const DEFAULT_ERROR_MESSAGES = {
  network: 'Network error occurred. Please check your connection.',
  timeout: 'Request timed out. Please try again.',
  server: 'Server error occurred. Please try again later.',
  unknown: 'An unexpected error occurred.',
} as const;

export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
    return 'network';
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  if (error.message.includes('timeout')) {
    return 'timeout';
  }
  if (error.message.includes('500') || error.message.includes('server')) {
<<<<<<< HEAD
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
export function formatErrorForLogging(error: Error,): Record<string, unknown> {
  return {
    message: error.message,
    stack: error.stack,
    name: error.name,
    type: getErrorType(error),
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
  };
}

export default getErrorBoundaryConfig;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
export default getErrorBoundaryConfig

/**
 * Format error for logging*/
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',}
  }};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    return 'server';
  }
  return 'unknown';
}

export const getErrorBoundaryConfig = (): ErrorBoundaryConfig => ({
  logToConsole: true,
  showDetailedErrors: process.env.NODE_ENV === 'development',
  reportToExternalService: process.env.NODE_ENV === 'production',
  errorReportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
});

export default getErrorBoundaryConfig;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
