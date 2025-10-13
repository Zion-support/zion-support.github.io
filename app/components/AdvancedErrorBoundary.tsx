import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
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
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // In production, you would typically send this to an error reporting service
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // This is where you would send the error to your error reporting service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    const errorData = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: 'anonymous' // You would get this from your auth context
    };

    // Example: Send to error reporting service
    // errorReportingService.captureException(error, { extra: errorData });
    
    console.log('Error logged:', errorData);
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              {/* Error Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>

              {/* Error ID for support */}
              <div className="bg-black/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID (for support):</p>
                <code className="text-cyan-400 font-mono text-sm break-all">
                  {this.state.errorId}
                </code>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Reload Page
                </button>
                
                <Link
                  to="/"
                  className="flex items-center justify-center px-6 py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </div>

              {/* Contact Support */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-gray-400 text-sm mb-4">
                  If the problem persists, please contact our support team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>

              {/* Development Error Details */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                    Error Details (Development Only)
                  </summary>
                  <div className="mt-4 p-4 bg-black/20 rounded-lg">
                    <pre className="text-xs text-red-400 overflow-auto">
                      {this.state.error.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;