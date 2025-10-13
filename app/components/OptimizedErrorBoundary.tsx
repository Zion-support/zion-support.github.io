import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
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

class OptimizedErrorBoundary extends Component<Props, State> {
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
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Send error to monitoring service
    this.reportError(error, errorInfo);
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // In production, send to your error reporting service
      console.log('Error reported:', errorData);
    }
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified 
                and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <p className="text-red-300 text-sm font-mono break-all">
                    {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <details className="mt-2">
                      <summary className="text-red-400 text-sm cursor-pointer">
                        Stack Trace
                      </summary>
                      <pre className="text-red-300 text-xs mt-2 whitespace-pre-wrap overflow-auto max-h-40">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Reload Page
                </button>
                
                <Link
                  to="/"
                  className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Go Home
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-4">
                  If this problem persists, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center group"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Contact Support
                  </Link>
                  <span className="text-gray-500 hidden sm:inline">•</span>
                  <span className="text-gray-400 text-sm">
                    Error ID: {this.state.errorId}
                  </span>
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

export default OptimizedErrorBoundary;