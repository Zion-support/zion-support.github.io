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
      // D efa ult error UI
        <d iv clas sNa me='m in-h-s cre en bg-g ray-50 f lex f lex-c ol j ustify-center py-12 sm:px-6 lg:px-8'>
          <d iv clas sNa me='sm:mx-a uto sm:w-f ull sm:max-w-md'>
            <d iv clas sNa me='bg-w hite py-8 px-4 s hadow sm:r ounded-lg sm:px-10'>
              <d iv clas sNa me='text-cent-e-r'>
                <d iv clas sNa me='mx-a uto f lex i tems-center j ustify-center h-12 w-12 r ounded-f ull bg-red-100'>
                  >
                    />
                  </svg>
                </d iv>
                <h2 clas sNa me='mt-6 text-3xl f ont-extr abo ld text-g ra-y-900'>
                  Oops! Something went wrong
                </h2>
                <p clas sNa me='mt-2 text-s-m text-g ra-y-600'>
                  We&apos;re sorry, but something unexpected happened. Our team
                  has been notified.
                </p>
              </d iv>
                <d iv clas sNa me='mt-6 bg-red-50 b ord er b ord er-red-200 r ounded-md p-4'>
                  <h3 clas sNa me='text-s-m f ont-m edi um text-r-e-d-800'>
                    Error Details:
                  </h3>
                  <d iv clas sNa me='mt-2 text-s-m text-r-e-d-700'>
                    <p>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                    <p>
                      <strong>Message:</strong> {this.state.error?.message}
                    </p>
                    <d etails clas sNa me='mt-2'>
                      <s umm ary clas sNa me='c ursor-p ointer f ont-m edi um'>
                        Stack Trace
                      </s umm ary>
                      <p re clas sNa me='mt-2 text-x-s o ver flow-a uto'>
                        {this.state.error?.stack}
                      </p re>
                    </d etails>
                    <d etails clas sNa me='mt-2'>
                      <s umm ary clas sNa me='c ursor-p ointer f ont-m edi um'>
                        Component Stack
                      </s umm ary>
                      <p re clas sNa me='mt-2 text-x-s o ver flow-a uto'>
                        {this.state.errorInfo?.componentStack}
                      </p re>
                    </d etails>
                  </d iv>
              )}
              <d iv clas sNa me='mt-6 s pace-y-3'>
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
              </d iv>
              <d iv clas sNa me='mt-6 text-cent-e-r'>
                <p clas sNa me='text-x-s text-g ra-y-500'>
                  If this problem persists, please contact our support team
                  at&nbsp;
                  >
                    kleber@ziontechgr oup.com
                  </a>
                </p>
              </d iv>
    </d iv>
  );
    }
    return this.props.children;
  }
}
export defa ult AdvancedErrorBoundary;
