import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real app, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Send to error reporting service
    console.error('Error logged:', errorData);
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Bug className="w-5 h-5 mr-2" />
                Error Details
              </h2>
              <div className="text-left">
                <p className="text-red-400 font-mono text-sm mb-2">
                  {this.state.error?.message || 'Unknown error occurred'}
                </p>
                {process.env.NODE_ENV === 'development' && this.state.error?.stack && (
                  <details className="mt-4">
                    <summary className="text-gray-300 cursor-pointer hover:text-white">
                      Stack Trace
                    </summary>
                    <pre className="mt-2 p-4 bg-black/50 rounded text-xs text-gray-300 overflow-auto max-h-40">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} left)
                </button>
              )}
              
              <button
                onClick={this.handleGoHome}
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
              
              <button
                onClick={this.handleReload}
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </button>
            </div>

            {this.state.retryCount >= this.maxRetries && (
              <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-300 text-sm">
                  Maximum retry attempts reached. Please try reloading the page or contact support if the problem persists.
                </p>
              </div>
            )}

            <div className="mt-8 text-sm text-gray-400">
              <p>Error ID: {Date.now().toString(36)}</p>
              <p>If this problem continues, please contact our support team.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional error boundary for specific components
export const ErrorBoundary: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error) => void;
}> = ({ children, fallback, onError }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(new Error(event.message));
      if (onError) {
        onError(new Error(event.message));
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [onError]);

  if (hasError) {
    return fallback || (
      <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
        <p className="text-red-300">Something went wrong: {error?.message}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default GlobalErrorBoundary;