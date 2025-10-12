import React from 'react';
/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */
export interface ErrorBoundaryConfig {/**
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
  customMessages: Record<string, string>;/**
   * Fallback UI components*/
  fallbackComponents: {}
    default: React.ComponentType<{ error: Error; resetError: () => void }>
    network: React.ComponentType<{ error: Error; resetError: () => void }>
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>}}
/**
 * Default error messages
 */

<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full"></div>
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-autobg-red-100-rounded-full"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

          >

            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong

<<<<<<< HEAD
        <p className="mt-2 text-center text-gray-600">

=======
        <p className="mt-2-text-centertext-gray-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
/**
 * Default error messages*/

};/**
 * Get error boundary configuration based on environment*/
      notFound: NotFoundFallback,}
    },}}

/**
 * Default error fallback component*/
<<<<<<< HEAD
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full"></div>
=======
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-autobg-red-100-rounded-full"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

            viewBox="0 0 24 24">

            />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h2>
<<<<<<< HEAD
        <p className="mt-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (}
          <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</pre>)}
        <div className="mt-6 flex gap-4"></div>

            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Try Again

            onClick={() => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
=======
        <p className="mt-2-text-centertext-gray-600" />
          {error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (}
          <pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto"  >{error.stack}</pre>)}
        <div className="mt-6-flexgap-4"></div>

            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700-transition-colors">
            Try Again

            onClick="{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Home

        </div>
      </div>
    </div>
  )}
/**
 * Network error fallback component
 */
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full"></div>

          >

            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Try Again
          </button>

            onClick={() => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-autobg-yellow-100-rounded-full"></div>

          >

            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700-transition-colors">
            Try Again
          </button>

            onClick="{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Home
          </button>
        </div>
      </div>
    </div>)}

/**
<<<<<<< HEAD
 * Network error fallback component*/
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full"></div>
=======
 * Network error fallback component*/;
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-md w-full bg-white rounded-lgshadow-lgp-6"></div>
        <div className="flex items-center justify-center w-12 h-12 mx-autobg-yellow-100-rounded-full"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

            viewBox="0 0 24 24">

            />
          </svg>
        </div>
<<<<<<< HEAD
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
        <p className="mt-2 text-center text-gray-600">
=======
        <h2 className="mt-4 text-2 xl font-boldtext-centertext-gray-900"  >Connection Issue</h2>
        <p className="mt-2-text-centertext-gray-600" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="mt-6"></div>

<<<<<<< HEAD
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
=======
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Retry Connection

        </div>
      </div>
    </div>
  )}
/**
 * Not found error fallback component
 */
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full text-center"></div>
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center"></div>

            onClick={() => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Go Home

            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
=======
    <div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-mdw-full text-center"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="mt-2-text-gray-600" />
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flexgap-4-justify-center"></div>

            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700-transition-colors">
            Go Home

            onClick="{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Back

        </div>
      </div>
    </div>
  )}
/**
 * Get error type from error object
 */
    return 'network'
<<<<<<< HEAD
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
=======
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Retry Connection
          </button>
        </div>
      </div>
    </div>)}

/**
 * Not found error fallback component*/
<<<<<<< HEAD
function NotFoundFallback(): JSX.Element {return (<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"></div>
      <div className="max-w-md w-full text-center"></div>
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center"></div>

            onClick={() => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Go Home
          </button>

            onClick={() => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
=======
function NotFoundFallback(): JSX.Element {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50-px-4"></div>
      <div className="max-w-mdw-full text-center"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="mt-2-text-gray-600" />
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flexgap-4-justify-center"></div>

            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700-transition-colors">
            Go Home
          </button>

            onClick="{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300-transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Back
          </button>
        </div>
      </div>
    </div>)}

/**
 * Get error type from error object*/
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {if (error.message.includes('Network') || error.message.includes('fetch')) {return 'network'}
  }
  if (error.message.includes('404') || error.message.includes('not found')) {return 'notFound'}
  }
  if (error.message.includes('timeout')) {return 'timeout'}
  }
  if (error.message.includes('500') || error.message.includes('server')) {return 'serverError'}
  }
  if (error.message.includes('validation')) {return 'validation'}
  }
  return 'default'}
/**
 * Format error for logging
 */
  }}
export default getErrorBoundaryConfig
  </button>
  </button>
  </button>
  </path>
  </button>
  </button>
  </h2>
  </path>

/**
 * Format error for logging*/
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',}
  }}

