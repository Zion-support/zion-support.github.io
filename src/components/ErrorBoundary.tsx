
;
  public static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {;



interface Props {
  children: ReactNode;
  fallback?: ReactNode}

interface State {
  hasError: boolean;

    hasError: false,

  }



  public static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error }
  }



    
    // Send error to monitoring service""
    if (typeof window !== 'undefined') {
      // Example: Send to Sentry, LogRocket, etc.""
      console.log('Error reported to monitoring service')}
  }


                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />

                </svg>


                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>

              </p>
            </div>""

            <div className="mt-4">

                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"



              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
              
              <button
                onClick={this.handleContactSupport}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </button>
              
              <button
                onClick={this.handleDownloadErrorLog}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Log</span>
              </button>
            </div>

            {/* Status */}
            <div className="text-center">
              {this.state.isReporting && (
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span>Sending error report...</span>
                </div>
              )}
              
              {this.state.reportSent && (
                <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Error report sent successfully</span>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-4">
                If this problem persists, please contact our support team with the error ID above.
              </p>


            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )}


    return this.props.children}






