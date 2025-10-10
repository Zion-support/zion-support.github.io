/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
import React from 'react'
export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  logErrors: boolean,
  /**
   * Whether to show detailed error messages
   */
  showDetails: boolean,
  /**
   * Whether to send errors to external service
   */
  reportErrors: boolean,
  /**
   * Error reporting endpoint
   */
  reportingEndpoint?: string

  /**
   * Whether to show error overlay in development
   */
  showErrorOverlay: boolean,
  /**
   * Maximum number of errors to store
   */
  maxStoredErrors: number,
  /**
   * Custom error messages by error type
   */
  customMessages: Record<string, string>

  /**
   * Fallback UI components
   */
  fallbackComponents: {}
    default: React.ComponentType<{ error: Error; resetError: () => void }>
    network: React.ComponentType<{ error: Error; resetError: () => void }>
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>
  }}
/**
 * Default error messages
 */
const DEFAULT_ERROR_MESSAGES = {
  default: 'Something went wrong. Please try again.',
  network: 'Network connection issue. Please check your internet connection.',
  notFound: 'The requested resource was not found.',
  timeout: 'Request timed out. Please try again.',
  serverError: 'Server error occurred. Please try again later.',
  validation: 'Validation error. Please check your input.',}
}

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
      notFound: NotFoundFallback,}
    },
  }}
/**
 * Default error fallback component
 */
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (</div></div></div></$1></$1>
          Oops! Something went wrong</$1>
          {error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (;}
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>
        )}
        <div className="mt-6 flex gap-4"></div>
            Try Again</$1> (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Home</$1></$1></$1></$1>
  )
}
/**
 * Network error fallback component
 */
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {
  return (</div></div></div></$1></$1>Connection Issue</h2>
          Unable to connect to the server. Please check your internet connection and try again.</$1></div>
            Retry Connection</$1></$1></$1></$1>
  )
}
/**
 * Not found error fallback component
 */
function NotFoundFallback(): JSX.Element {
  return (</div></div>404</h1>Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.</$1></div> (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home</$1> window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Back</$1></$1></$1></$1>
  )
}
/**
 * Get error type from error object
 */
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
    return 'network';}
  }
  if (error.message.includes('404') || error.message.includes('not found')) {
    return 'notFound';}
  }
  if (error.message.includes('timeout')) {
    return 'timeout';}
  }
  if (error.message.includes('500') || error.message.includes('server')) {
    return 'serverError';}
  }
  if (error.message.includes('validation')) {
    return 'validation';}
  }
  return 'default'
}
/**
 * Format error for logging
 */
export function formatErrorForLogging(error: Error): Record<string, unknown> {
  return {
    message: error.message,
    stack: error.stack,
    name: error.name,
    type: getErrorType(error),
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',;}
  }}
export default getErrorBoundaryConfig
