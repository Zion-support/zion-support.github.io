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

export class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1,
      }));
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-sm text-red-300 whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-sm text-red-300 whitespace-pre-wrap break-words mt-2">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {this.state.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-2">
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  {' | '}
                  <a 
                    href="tel:+13024640950" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
