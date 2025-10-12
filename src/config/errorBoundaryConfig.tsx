/**
 * ErrorBoundary Configuration
 * Centralized configuration for error handling across the application
 */
  /**
   * Whether to log errors to console
   */
  log Errors: boolean;
  /**
   * Whether to show detailed error messages
   */
  show Details: boolean;
  /**
   * Whether to send errors to external service
   */
  report Errors: boolean;
  /**
   * Error reporting endpoint
   */
  reporting Endpoint?: string;
  /**
   * Whether to show error overlay in development
   */
  show Error Overlay: boolean;
  /**
   * Maximum number of errors to store
   */
  max Stored Errors: number;
  /**
   * Custom error messages by error type
   */
  custom Messages: Record<s tring, string>;
  /**
   * Fallback U I components
   */
    default: React.Component Type<{ e rror: Error; reset Error: () => void }>;
    network: React.Component Type<{ e rror: Error; reset Error: () => void }>;
    not Found: React.Component Type<{ e rror: Error; reset Error: () => void }>;
  };
}
/**
 * Default error messages
 */

};
/**
 * Get error boundary configuration based on environment
 */
  const is Development = process.env['N OD E_ EN V'] === 'development';
      not Found: Not Found Fallback
    }
  };
}
/**
 * Default error fallback component
 */
    <d iv class Name="m in-h-screen flex items-center justify-center bg-gray-50 px-4">
      <d iv class Name="m ax-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <d iv class Name="f lex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          
          >
            
            />
          </s vg>
        </d iv>
        <h2 c lass Name="m t-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h2>
        <p c lass Name="m t-2 text-center text-gray-600">
          {error.message || 'An unexpected error occurred'}
        </p>
          <p re class Name="m t-4 p-4 bg-gray-100 rounded text-xs overflow-auto">{error.stack}</p re>
        )}
        <d iv class Name="m t-6 flex gap-4">
          
          >
            Try Again
          </b utton>
          
            on Click={() => (window.location.href = '/')}
            class Name="f lex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Home
          </b utton>
        </d iv>
    </d iv>
  );
}
/**
 * Network error fallback component
 */
    <d iv class Name="m in-h-screen flex items-center justify-center bg-gray-50 px-4">
      <d iv class Name="m ax-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <d iv class Name="f lex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
          
          >
            
            />
          </s vg>
        </d iv>
        <h2 c lass Name="m t-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
        <p c lass Name="m t-2 text-center text-gray-600">
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        <d iv class Name="m t-6">
          
          >
            Retry Connection
          </b utton>
        </d iv>
    </d iv>
  );
}
/**
 * Not found error fallback component
 */
    <d iv class Name="m in-h-screen flex items-center justify-center bg-gray-50 px-4">
      <d iv class Name="m ax-w-md w-full text-center">
        <h1 c lass Name="t ext-6xl font-bold text-gray-900">404</h1>
        <h2 c lass Name="m t-4 text-2xl font-bold text-gray-900">Page Not Found</h2>
        <p c lass Name="m t-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <d iv class Name="m t-6 flex gap-4 justify-center">
          
            on Click={() => (window.location.href = '/')}
            class Name="b g-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </b utton>
          
            on Click={() => window.history.back()}
            class Name="b g-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Back
          </b utton>
        </d iv>
    </d iv>
  );
}
/**
 * Get error type from error object
 */
    return 'network';
  }
    return 'not Found';
  }
    return 'timeout';
  }
    return 'server Error';
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
export default get ErrorBoundary Config;
