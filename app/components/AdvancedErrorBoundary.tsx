// Call the onError callback if provided
    if ($1) {}
  // If body


}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo,
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props),
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);";"
    this.setState({ error, errorInfo });
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    };
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {},'
      console.error('Error caught by AdvancedErrorBoundary:', error, errorInfo)'
    },
    {}
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo })
    },
    {}
  const handleRetry = () => {},
      this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    },
    {}
  const handleReload = () => {},
      window.location.reload()
    },
    {}
  const handleGoHome = () => {},
      window.location.href = '/'
    },
    {}
  const handleReportError = () => {},
      const { error, errorId } = this.state,
      const subject = `Error Report - ${errorId}`,
      const body = `
Error Details:;
- Error ID: ${errorId};
- Message: ${error?.message};
- Stack: ${error?.stack};
- Timestamp: ${new Date().toISOString()};
- User Agent: ${navigator.userAgent};
- URL: ${window.location.href};
    `,
      const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      window.open(mailtoLink)
    },
    {}
  render() {},;
      if (this.state.hasError) {};
      // Use custom fallback if provided
      if (this.props.fallback) {},
      return this.props.fallback
    },
    {}
      return ()
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">"
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <div className="flex justify-center mb-4"></div>"
              <AlertTriangle className="w-16 h-16 text-red-500" />"


            </div>
            
            <div className ="mt-4">";"
              <p className ="text-sm text-gray-600 dark:text-gray-400">","
                We're sorry, but something unexpected happened. Please try refreshing the page.";"
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (";"
                <details className ="mt-4">";"
                  <summary className ="text-sm font-medium text-gray-700 dark: text-gray-300 cursor-pointer">";"
                    Error Details
                  </summary>
                  <div className ="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">";"
                    <div className ="mb-2">","
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className ="whitespace-pre-wrap">{this.state.error.stack}</pre>";"
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
            

                Try Again
              </button>
              
              <buttononClick={this.handleReload},>
      const className ="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
              ></button
>
                <RefreshCw className="w-4 h-4 mr-2" />"
                Reload Page
              </button>
              
              <buttononClick={this.handleGoHome},>
      const className ="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              ></button
>
                <Home className="w-4 h-4 mr-2" />"
                Go Home
              </button>
              
              <buttononClick={this.handleReportError},>
      const className ="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              ></button
>
                <Mail className="w-4 h-4 mr-2" />"
                Report Issue
              </button>

            </div>
          </div>
        </div>
      ),
    }
;
    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
