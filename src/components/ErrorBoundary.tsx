import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to external service (e.g., Sentry, LogRocket)
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-zion-cyan/20">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-zion-slate-light mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-zion-slate-dark/50 p-4 rounded-lg text-sm font-mono text-zion-slate-light overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-2 text-xs overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="inline-flex items-center justify-center px-4 py-2 bg-zion-slate-light/20 text-white rounded-lg hover:bg-zion-slate-light/30 transition-all duration-300 font-medium"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-zion-slate-light/20">
              <p className="text-sm text-zion-slate-light mb-3">
                Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
                <span className="hidden sm:inline text-zion-slate-light">•</span>
                <a
                  href="tel:+13024640950"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: any) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    // Log error to external service
    // logErrorToService(error, errorInfo);
  };
};

// Component for catching async errors
export const AsyncErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  const handleError = useErrorHandler();

  React.useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleError(new Error(event.reason), { type: 'unhandledRejection' });
    };

    const handleErrorEvent = (event: ErrorEvent) => {
      handleError(event.error || new Error(event.message), { type: 'errorEvent' });
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleErrorEvent);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleErrorEvent);
    };
  }, [handleError]);

  return <>{children}</>;
};