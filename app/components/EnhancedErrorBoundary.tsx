import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
  constructor(props: Props) {
    super(props);
    };
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
      return this.state.fallback || (            <p className="text-gray-300 mb-6 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again cursor/analyze-improve-and-deploy-application-30da
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Bug className="w-4 h-4" />
                Contact Support
              </button>
            </div> cursor/analyze-improve-and-deploy-application-30da
          </div>
        </div>
      );
    }

    return this.props.children;
  }
    })}
  private handleReload = () => {
    window.location.reload()}
  private handleGoHome = () => {
    window.location.href = '/'}
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {

export default EnhancedErrorBoundary;

            <div className="mt-6 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2">
                Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
              </p>
            </div>
