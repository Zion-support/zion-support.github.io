// Simple logger implementation

      console.error(message, context);
    }
  }
};
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
}
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  message: string;
  stack: string | undefined;
  componentStack: string | null | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string | null;
  sessionId: string;
}
class AdvancedErrorBoundary extends Component
  private retryCount = 0;
  private maxRetries = 3;
    super(props);
      errorId: null
    };
  }
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
      errorInfo
    });
    // Log error to console in development
        errorInfo 
      });
    }
    // Call custom error handler
      this.props.onError(error, errorInfo);
    }
    // Report error to external service
      this.reportError(error, errorInfo);
    }
  }
      sessionId: this.getSessionId()
    };
    // Send to error reporting service
    this.sendErrorReport(errorReport);
  };
    // Try to get user ID from localStorage or other sources
      return localStorage.getItem('userId') || null;
      return null;
    }
  };
    // Generate or retrieve session ID
      let sessionId = sessionStorage.getItem('sessionId');
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  };
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
      // Send to your error reporting service
          'Content-Type': 'application/json'
        body: JSON.stringify(errorReport)
      });
        error: reportError 
      });
    }
  };
    if (this.retryCount 
    window.location.reload();
  };
    window.location.href = '/';
  };
      // Custom fallback UI
        return this.props.fallback;
      }
      // Default error UI
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <div className='text-center'>
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                  
                  >
                    
                    />
                  </svg>
                </div>
                <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                  Oops! Something went wrong
                </h2>
                <p className='mt-2 text-sm text-gray-600'>
                  We&apos;re sorry, but something unexpected happened. Our team
                  has been notified.
                </p>
              </div>
                <div className='mt-6 bg-red-50 border border-red-200 rounded-md p-4'>
                  <h3 className='text-sm font-medium text-red-800'>
                    Error Details:
                  </h3>
                  <div className='mt-2 text-sm text-red-700'>
                    <p>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                    <p>
                      <strong>Message:</strong> {this.state.error?.message}
                    </p>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Stack Trace
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>
                        {this.state.error?.stack}
                      </pre>
                    </details>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Component Stack
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>
                        {this.state.errorInfo?.componentStack}
                      </pre>
                    </details>
                  </div>
              )}
              <div className='mt-6 space-y-3'>
                {this.props.enableRetry &&
                  this.retryCount 
                    >
                      Try Again ({this.maxRetries - this.retryCount} attempts
                      left)
                    </button>
                  )}
                
                >
                  Reload Page
                </button>
                
                >
                  Go to Homepage
                </button>
              </div>
              <div className='mt-6 text-center'>
                <p className='text-xs text-gray-500'>
                  If this problem persists, please contact our support team
                  at&nbsp;
                  
                  >
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
    </div>
  );
    }
    return this.props.children;
  }
}
export default AdvancedErrorBoundary;
