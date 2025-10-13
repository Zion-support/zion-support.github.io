import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
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
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, retryCount: 0 });
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
              {/* Error Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong</h1>
                <p className="text-gray-300 text-lg">
                  We encountered an unexpected error. Don't worry, our team has been notified.
                </p>
              </div>

              {/* Error Details */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                  <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Error Details (Development)
                  </h3>
                  <p className="text-red-300 text-sm mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.state.errorInfo && (
                    <details className="text-red-300 text-xs">
                      <summary className="cursor-pointer mb-2">Stack Trace</summary>
                      <pre className="whitespace-pre-wrap bg-red-900/30 p-2 rounded">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {this.state.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-2">
                  If this problem persists, please contact our support team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    support@ziontechgroup.com
                  </a>
                  <a 
                    href="tel:+1-302-464-0950" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1-302-464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;