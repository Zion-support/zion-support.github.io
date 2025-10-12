import React from 'react';
<<<<<<< HEAD
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
  customMessages: Record<string, string />;/**
   * Fallback UI components*/
  fallbackComponents: {}
    default: React.ComponentType<{ error: Error; resetError: () => void }>
    network: React.ComponentType<{ error: Error; resetError: () => void }>
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>}}
/**
 * Default error messages;
 */
<<<<<<< HEAD

    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          >


 * Default error messages*/
=======
    <div className = "min-h-screen flex items-center justify-centerbg-gray-50px-4"></div></div></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          >
            />
          </svg>
        </div>
        <h2 className="w-5 h-5 ml-2" />
          Oops! Something went wrong
        <p className="w-5 h-5 ml-2" />
/**
            />
          </svg>
        </div>
        <h2 className="w-5h-5ml-2" /></h2>;
          Oops! Something went wrong;
        <p className = "w-5h-5ml-2" /></p>
/**
 * Default error messages*/;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
;
};/**
 * Get error boundary configuration based on environment*/
      notFound: NotFoundFallback,}
    },}}
/**
 * Default error fallback component*/
<<<<<<< HEAD

=======
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (<div className = "min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            viewBox="0 0 24 24">
            />
          </svg>
        </div>;
        <h2 className="w-5h-5ml-2" />Oops! Something went wrong;
        </h2>
        <p className = "w-5h-5ml-2">{error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (};
function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {return (
    <div>Content</div>
  );
    <>
      <div className = "min-h-screen flex items-center justify-centerbg-gray-50px-4"></div></div></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            viewBox="0 0 24 24">
            />
          </svg>
        </div>
        <h2 className="w-5 h-5 ml-2" />Oops! Something went wrong
        </h2>
        <p className="w-5 h-5 ml-2">{error.message || 'An unexpected error occurred'}
        </p>
        {process.env['NODE_ENV'] === 'development' && (}
          <pre className="mt-4p-4 b g-gray-100 roundedtext-xsoverflow-auto"  >{error.stack}</pre>)}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Try Again
            onClick="{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">
            Go Home
        </div>
    </div>
          <pre className="mt-4p-4b g-g ray-100 roundedtext-xsoverflow-auto"  >{error.stack}</pre>)}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Try Again;
            onClick = "{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">;
            Go Home;
        </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  )}
/**
 * Network error fallback component;
 */
<<<<<<< HEAD

=======
        </div></div>
        </div></div>
        </div></div>
            Try Again
 (window.location.href = '/')}
            Go Home
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          >
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Try Again;
          </button>
            onClick = "{()" => (window.location.href = '/')}
            className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lghover:bg-gray-300 transition-colors">;
            Go Home;
          </button>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    </div>)}
/**
 * Network error fallback component*/;
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div className = "min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
<<<<<<< HEAD
            viewBox="0 0 24 24">


=======
            viewBox="0 0 24 24">;
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div >
        </div></div>
        </div></div>
        </div></div>
        <h2 className = "mt-4 text-2 xl font-boldtext-centertext-gray-900">Connection Issue</h2>
          Unable to connect to the server. Please check your internet connection and try again.
        </div></div>
            Retry Connection
            />
          </svg>
        </div>
        <h2 className="mt-4text-2xl font-boldtext-centertext-gray-900"  >Connection Issue</h2>
        <p className="w-5h-5ml-2">Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Retry Connection;
        </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  )}
/**
 * Not found error fallback component;
 */
<<<<<<< HEAD

=======
        </div></div>
      <div className = "max-w-mdw-fulltext-center" /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.
        </div></div>
 (window.location.href = '/')}
            Go Home
 window.history.back()}
            Go Back
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4text-2xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="w-5h-5ml-2">The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Go Home;
            onClick = "{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300 transition-colors">;
            Go Back;
        </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  )}
/**
 * Get error type from error object;
 */
    return 'network'
            className = "w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Retry Connection;
          </button>
        </div>
    </div>)}
/**
 * Not found error fallback component*/
<<<<<<< HEAD

=======
function NotFoundFallback(): JSX.Element {return (<div >
        </div></div>
      <div className = "max-w-mdw-fulltext-center" /></div>
        <h1 className="text-6 xlfont-boldtext-gray-900">404</h1>
        <h2 className="mt-4 text-2 xlfont-boldtext-gray-900">Page Not Found</h2>
          The page you're looking for doesn't exist or has been moved.
        </div></div>
 (window.location.href = '/')}
            Go Home
 window.history.back()}
            Go Back
function NotFoundFallback(): JSX.Element {return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <h1 className="text-6 xlfont-boldtext-gray-900"  >404</h1>
        <h2 className="mt-4text-2xlfont-boldtext-gray-900"  >Page Not Found</h2>
        <p className="w-5h-5ml-2">The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            onClick="{()" => (window.location.href = '/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lghover:bg-blue-700 transition-colors">;
            Go Home;
          </button>
            onClick = "{()" => window.history.back()}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lghover:bg-gray-300 transition-colors">;
            Go Back;
          </button>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    </div>)}
/**
 * Get error type from error object*/
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
 * Format error for logging;
 */
<<<<<<< HEAD
export default getErrorBoundaryConfig

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ConfigPage() {
  return (
    <>
      <Helmet>
        <title>Config - Zion Tech Group</title>
        <meta name="description" content="Professional config services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Config</h1>
          <p className="text-lg text-gray-300 mb-8">Professional config services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
  }}
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
;
;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
