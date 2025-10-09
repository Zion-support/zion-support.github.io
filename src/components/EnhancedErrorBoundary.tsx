interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}
class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
    // Report error to monitoring service
    if (this.props.enableReporting !== false) {
      this.reportError(error, errorInfo);
    }
    // Call custom error handler
    this.props.onError?.(error, errorInfo);
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };
    // Send to error reporting service
    this.sendErrorReport(errorReport);
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
        },
      });
    }
  };
  private sendErrorReport = (errorReport: any) => {
    // In a real application, you would send this to your error reporting service
    // For now, we'll just log it
    console.log('Error Report:', errorReport);
    // Example: Send to Sentry, LogRocket, or custom endpoint
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport),
    // }).catch(console.error);
  };
  private getUserId = (): string | null => {
    // Get user ID from your auth system
    return localStorage.getItem('userId') || null;
  };
  private getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };
  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };
  private handleReload = () => {
    window.location.reload();
  };
  private handleGoHome = () => {
    window.location.href = '/';
  };
  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
    };
    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy error details');
      });
  };
  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const { retryCount, error, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-md border border-red-500/20 rounded-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
              </div>
              {this.state.errorId && (
                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">
                    Error ID: <code className="text-cyan-400">{this.state.errorId}</code>
                  </p>
                  <p className="text-xs text-gray-500">
                    Please include this ID when contacting support.
                  </p>
                </div>
              )}
              {this.props.showDetails && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Technical Details
                  </summary>
                  <div className="mt-2 p-4 bg-slate-900/50 rounded-lg">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
                      {this.state.error.message}
                      {'\n\n'}
                      {this.state.error.stack}
                    </pre>
                    <button
                      onClick={this.copyErrorDetails}
                      className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
                    >
                      Copy Error Details
                    </button>
                  </div>
                </details>
              )}
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>
                If this problem persists, please contact our support team at{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}