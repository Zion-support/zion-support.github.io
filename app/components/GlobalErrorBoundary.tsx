

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {

}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {

    this.state = { hasError: false };
  };
  static getDerivedStateFromError(error: Error): State {
    return {,
      hasError: true,
      error,

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development

    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {""";
      // Here you would typically send the error to a logging service

    }

    this.setState({
    error,
      errorInfo,

  }

  render() {
    if (this.state.hasError) {
      return (

            </div>
            
            <h1 className ="text-2xl font-bold text-white mb-4">";
              Oops! Something went wrong
            </h1>
            
            <p className ="text-gray-300 mb-6">";
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.""'"
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (""";
              <div className ="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">";
                <h3 className ="text-red-400 font-semibold mb-2">Error Details:</h3>";
                <p className ="text-red-200 text-sm font-mono break-all">";
                  {this.state.error.message}
                </p>
                {this.state.errorId && (

                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

              <button onClick ={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />";
                Try Again
              </button>
              
              <Link to ="/";
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >

                Go Home
              </Link>
            </div>
          </div>
        </div>

    }

    return this.props.children
  }
}

