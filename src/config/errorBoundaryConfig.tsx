export default getErrorBoundaryConfig;
/**
 * Error Boundary Configuration;
 * Centralized configuration for error handling across the application;
 */
  /**
   * Whether to log errors to console;
   */
  logErrors: boolean;
  /**
   * Whether to show detailed error messages;
   */
  showDetails: boolean;
  /**
   * Whether to send errors to external service;
   */
  reportErrors: boolean;
  /**
   * Error reporting endpoint;
   */
  reportingEndpoint?: string;
  /**
   * Whether to show error overlay in development;
   */
  showErrorOverlay: boolean;
  /**
   * Maximum number of errors to store;
   */
  maxStoredErrors: number;
  /**
   * Custom error messages by error type;
   */
  customMessages: Record<string, string>;
  /**
   * Fallback UI components;
   */
    default: React.ComponentType<{error: Error; resetError: () => void}>;
    network: React.ComponentType<{error: Error; resetError: () => void}>;
    notFound: React.ComponentType<{error: Error; resetError: () => void}>;
  };
/**
 * Default error messages;
 */

};
/**
 * Get error boundary configuration based on environment;
 */
  const isDevelopment = process.env['NODE_ENV'] === 'development';
      notFound: NotFoundFallback;
  };
/**
 * Default error fallback component;
 */

          Oops! Something went wrong;
          {error.message || 'An unexpected error occurred'}
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>"
  )}
            Try Again;
 (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors""
            Go Home;
  );
}