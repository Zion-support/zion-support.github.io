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
   * Fallback UI components;
   */,
}
/**;
 * Default error messages;
 */;
const DEFAULT_ERROR_MESSAGES = {default: 'Something went wrong. Please try again.',
  fallbackComponents: {}

    default: React.ComponentType<{ error: Error, resetError: () =&gt; void }>
    network: React.ComponentType<{ error: Error, resetError: () =&gt; void }>
    notFound: React.ComponentType<{ error: Error, resetError: () =&gt; void }>
  }
}
/**
 * Default error messages
 */
const DEFAULT_ERROR_MESSAGES = {
    default: 'Something went wrong. Please try again.',
  network: 'Network connection issue. Please check your internet connection.',
  notFound: 'The requested resource was not found.',
  timeout: 'Request timed out. Please try again.',
  serverError: 'Server error occurred. Please try again later.',
/**
 * Get error boundary configuration based on environment
 */
export function getErrorBoundaryConfig(): ErrorBoundaryConfig {
    return {
    logErrors: true,
    showDetails: isDevelopment,
    reportErrors: !isDevelopment,
    reportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
    showErrorOverlay: isDevelopment,
    maxStoredErrors: 50,
    customMessages: DEFAULT_ERROR_MESSAGES,
}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div></div></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full"></div></div></div>
          <svg>
            </svg><path>
          </svg>
        </div>
        <h2>Oops! Something went wrong;</h2>
        </h2>
        <p>{error.message || 'An unexpected error occurred'</p&gt;} </p>
        {process.env['NODE_ENV'] === 'development' && (} <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto"></p></pre>{error.stack</p&gt;}</pre>
        )}
          >
            Go Home;
          </button>
        </div>
      </div>
    </div>
  ),
}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6"></div></div></div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full"></div></div></div>
          <svg>
            </svg><path>
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900"></h2></h2>Connection Issue</h2>
        <p>Unable to connect to the server. Please check your internet connection and try again.</p>
        </p>
        <div className="mt-6"></div></div></div>
          <button>Retry Connection;</button>
          </button>
        </div>
      </div>
    </div>
          >
            Go Home;
          </button>
          >
            Go Back;
          </button>
        </div>
      </div>
    </div>
  ),
}
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          ></svg>
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
}
/**
 * Network error fallback component
 */
function NetworkErrorFallback({ resetError }: { error: Error; resetError: () =&gt; void }) {
  return (
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          &gt;</svg&gt;
}
/**
 * Not found error fallback component
 */
function NotFoundFallback(): JSX.Element {
  return (
}
/**
 * Get error type from error object
 */
export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
/**
 * Format error for logging
 */
export function formatErrorForLogging(error: Error): Record<string, unknown> {
    message: error.message,
    stack: error.stack,
    name: error.name,
    type: getErrorType(error),
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
