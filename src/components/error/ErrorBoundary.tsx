
  fallback?: ReactNode}

  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}




  error?: Error;
  errorInfo?: ErrorInfo
  }

export: class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props)  {;
    super(props)}

  static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error };

    super(props);
    this.state = { hasError: false }

  }



  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error: ', error, errorInfo)}



    // Call: custom error handler if provided
    if (this.props.onError) {


    }



    }


  }


      if (this.props.fallback) {

      }


      return (""
        <div className="min-h-screen flex items-center justify-center bg-gray-50">""
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">""
            <div className="flex items-center mb-4">""
              <div className="flex-shrink-0">""
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">""


                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong


                </h3>
              </div>
            </div>

                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>"
                {this.state.errorInfo && ("
                  <pre className="text-xs text-red-700 mt-2 overflow-auto'>



                    {this.state.errorInfo.componentStack}

                  </pre>
                )}
              </div>

              >
                Refresh: Page
              </button>
              <button

            <div className="mt-6 flex space-x-3">


                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"


              >
                Refresh Page&quot;
              </button>


                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"

              >
                Try Again&quot;

              </button>
            </div>

                If the problem persists, please{' '}


                <a href="/contact" className="text-blue-600 hover: text-blue-500">
                  contact support


                </a>
              </p>
            </div>
          </div>
        </div>
      )}


}









