}

interface State {
  hasError: boolean;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console in development
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error tracking service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
  }

      // Example: Send to your error tracking service
      // errorTrackingService.captureException(errorData);
      console.log('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
      // Default error UI
      return (
                <svg 
                  className="w-8 h-8 text-red-400" "
                  fill="none" "
                  stroke="currentColor" "
                  viewBox="0 0 24 24""
                  aria-hidden="true""
                >
                  <path 
                >
                  Try Again
                </button>
                <div className="flex space-x-3">"
                  <button
                  >
                    Go Home
                  </button>
                  <button
                  >
                    Reload Page
                  </button>
                </div>
              </div>
                  Still having trouble? Contact our support team:
                </p>
                <div className="text-sm text-cyan-400">"
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: +1-302-464-0950</p>
                </div>
              </div>
                    </div>
                    <div className="mb-2">"
                      <strong>Stack:</strong>
                      </pre>
                    </div>
                    { this.state.errorInfo && (
                      <div>
                        <strong>Component Stack:</strong>
                        </pre>
                      </div>
                    )
                  </div>
                </details>
            </div>
          </div>
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

