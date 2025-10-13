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
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-md rounded-2xl border border-red-500/20 p-8 text-center">
            {/* Error Icon */}
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>

            {/* Error Title */}
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 mb-6">
              We encountered an unexpected error. Don't worry, our team has been notified and is working on a fix.
            </p>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-red-300 font-mono overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Contact Support */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">
                Still having issues? Contact our support team:
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  support@ziontechgroup.com
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
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

export default GlobalErrorBoundary;