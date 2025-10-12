'use client';
/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
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
  showErrorOverlay: boolean;
  /**
   * Maximum number of errors to store
   */
  maxStoredErrors: number;
  /**
   * Custom error messages by error type
   */
  customMessages: Record<string, string>;
  /**
   * Fallback UI components
   */
    default: React.ComponentType<{ error: Error; resetError: () => void }>;
    network: React.ComponentType<{ error: Error; resetError: () => void }>;
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>;
  };
}
/**
 * Default error messages
 */

/**
 * Get error boundary configuration based on environment
 */
  const isDevelopment = process.env['NODE_ENV'] === 'development';
      notFound: NotFoundFallback
    }
  };
}
/**
 * Default error fallback component
 */
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          
          >
            
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h2>
        <p className="mt-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred'}
        </p>
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>
        )}
        <div className="mt-6 flex gap-4">
          
          >
            Try Again
          </button>
          
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
/**
 * Network error fallback component
 */
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
          
          >
            
            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
        <p className="mt-2 text-center text-gray-600">
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="mt-6">
          
          >
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          
            onClick={() => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
          
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
/**
 * Get error type from error object
 */
    return 'network';
  }
    return 'notFound';
  }
    return 'timeout';
  }
    return 'serverError';
  }
    return 'validation';
  }
  return 'default';
}
/**
 * Format error for logging
 */
    url: typeof window !== 'undefined' ? window.location.href : 'unknown'
  };
}
