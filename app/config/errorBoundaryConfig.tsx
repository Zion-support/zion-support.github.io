<<<<<<< HEAD
import React from 'react';
=======

import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
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
  customMessages: Record<string, string />;/**
   * Fallback UI components*/
  fallbackComponents: {}
<<<<<<< HEAD
=======
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    default: React.ComponentType<{ error: Error; resetError: () => void }>
    network: React.ComponentType<{ error: Error; resetError: () => void }>
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>}}
/**
 * Default error messages
 */

<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>

          >

            />
          </svg>
        </div>
        <h2 className="w-5 h-5ml-2" />
          Oops! Something went wrong

        <p className="w-5 h-5ml-2" />
/**
=======
        </div></div>
        </div></div>
        </div></div>

          Oops! Something went wrong

              /**
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
 * Default error messages*/
;
};/**
 * Get error boundary configuration based on environment*/
      notFound: NotFoundFallback,}
    },}}

/**
 * Default error fallback component*/
<<<<<<< HEAD
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (<div>
        </div></div>
        </div></div>
        </div></div>

<<<<<<< HEAD
            />
          </svg>
        </div>
        <h2 className="w-5 h-5ml-2" />Oops! Something went wrong
        </h2>
        <p className="w-5 h-5ml-2">{error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (}
          <pre className="mt-4p-4 b g-gray-100 roundedtext-xsoverflow-auto"  >{error.stack}</pre>)}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>

            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Try Again

            onClick="{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">
            Go Home

        </div>
    </div>
=======
        <h2 className="mt-4 text-2 xl font-boldtext-centertext-gray-900">Oops! Something went wrong
          {error.message || 'An unexpected error occurred'}
        {process.env['NODE_ENV'] === 'development' && (}
    
          <pre className="mt-4 p-4 bg-gray-100 roundedtext-xsoverflow-auto">{error.stack}</pre>)}
        </div></div>

            Try Again

 (window.location.href = '/')}

            Go Home

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  )}
/**
 * Network error fallback component
 */
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

        </div></div>
        </div></div>
        </div></div>

<<<<<<< HEAD
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
            Try Again

<<<<<<< HEAD
            onClick="{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">
            Go Home
          </button>
        </div>
=======
 (window.location.href = '/')}

            Go Home
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    </div>)}

/**
 * Network error fallback component*/;
<<<<<<< HEAD
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div>
        </div></div>
        </div></div>
        </div></div>

<<<<<<< HEAD
            />
          </svg>
        </div>
        <h2 className="mt-4t ext-2 xl font-boldtext-centertext-gray-900"  >Connection Issue</h2>
        <p className="w-5 h-5ml-2">Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>

            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Retry Connection

        </div>
    </div>
=======
        <h2 className="mt-4 text-2 xl font-boldtext-centertext-gray-900">Connection Issue</h2>
          Unable to connect to the server. Please check your internet connection and try again.
    
        </div></div>

            Retry Connection

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  )}
/**
 * Not found error fallback component
 */
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4t ext-2 xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="w-5 h-5ml-2">The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>

            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Go Home

            onClick="{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300 transition-colors">
            Go Back

        </div>
    </div>
=======

        </div></div>
      <div className="max-w-mdw-fulltext-center" /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.
    
        </div></div>

 (window.location.href = '/')}

            Go Home

 window.history.back()}

            Go Back

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  )}
/**
 * Get error type from error object
 */
    return 'network'
<<<<<<< HEAD
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Retry Connection
          </button>
        </div>
=======

            Retry Connection
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    </div>)}

/**
 * Not found error fallback component*/
<<<<<<< HEAD
function NotFoundFallback(): JSX.Element {return (<div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4t ext-2 xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="w-5 h-5ml-2">The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>

            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700 transition-colors">
=======

function NotFoundFallback(): JSX.Element {return (<div>
        </div></div>
      <div className="max-w-mdw-fulltext-center" /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.
    
        </div></div>

 (window.location.href = '/')}

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
            Go Home

<<<<<<< HEAD
            onClick="{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300 transition-colors">
            Go Back
          </button>
        </div>
=======
 window.history.back()}

            Go Back
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    </div>)}

/**
 * Get error type from error object*/
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {if (error.message.includes('Network') || error.message.includes('fetch')) {return 'network'}
  if (error.message.includes('404') || error.message.includes('not found')) {return 'notFound'}
  if (error.message.includes('timeout')) {return 'timeout'}
  if (error.message.includes('500') || error.message.includes('server')) {return 'serverError'}
  if (error.message.includes('validation')) {return 'validation'}
  return 'default'}
/**
 * Format error for logging
 */
export default getErrorBoundaryConfig
<<<<<<< HEAD
  </button>
  </button>
  </button>
  </path>
  </button>
  </button>
  </h2>
  </path>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

/**
 * Format error for logging*/
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',}

<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
