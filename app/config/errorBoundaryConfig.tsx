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

    <div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          >


 * Default error messages*/
;
};/**
 * Get error boundary configuration based on environment*/
      notFound: NotFoundFallback,}
    },}}
/**
 * Default error fallback component*/

  )}
/**
 * Network error fallback component;
 */

    </div>)}
/**
 * Network error fallback component*/;
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () => void }) {return (<div className="min-h-screen flex items-center justify-centerbg-gray-50px-4"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            viewBox="0 0 24 24">


  )}
/**
 * Not found error fallback component;
 */

  )}
/**
 * Get error type from error object;
 */
    return 'network'
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lghover:bg-blue-700 transition-colors">
            Retry Connection;
          </button>
        </div>
    </div>)}
/**
 * Not found error fallback component*/

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
