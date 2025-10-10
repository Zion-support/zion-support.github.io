'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Here you could send error to monitoring service
    // Example: sendErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const { error, errorInfo } = this.state;
    const errorReport = {
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send error report (implement your error reporting service)
    console.log('Error report:', errorReport);
    
    // For now, just show an alert
    alert('Error has been reported. Thank you for your feedback!');
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
              <div className="flex justify-center mb-8">
                <AlertTriangle className="w-24 h-24 text-red-400" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Oops! Something went wrong
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-4 mb-8 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-200 text-sm overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                  </pre>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReportError}
                  className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Report Issue
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-2">
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    support@ziontechgroup.com
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