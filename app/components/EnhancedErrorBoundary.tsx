import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  enableAnalytics?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
    
    this.sessionId = this.generateSessionId();
    this.errorReportingEndpoint = process.env.NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT || '/api/error-report';
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (this.props.enableErrorReporting) {
      console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
      
      // Send error to analytics if enabled
      if (this.props.enableAnalytics && typeof window !== 'undefined') {
        // Send to analytics service
        if ((window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: error.message,
            fatal: true,
            custom_map: {
              error_boundary: 'enhanced'
            }
          });
        }
      }
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const canRetry = this.state.retryCount < this.maxRetries;

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
          <div className="max-w-2xl w-full mx-4">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-red-200">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-8">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
              </p>

              {this.state.error && (
                <div className="bg-gray-100 rounded-lg p-4 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Details:</h3>
                  <p className="text-sm text-gray-600 font-mono">{this.state.error.message}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {canRetry && (
                  <button
                    onClick={this.handleRetry}
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reload Page
                </button>
                
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </div>

              {this.props.enableErrorReporting && this.state.errorInfo && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 mb-4">
                    Technical Details (for developers)
                  </summary>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs font-mono overflow-auto max-h-64">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error?.message}
                    </div>
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.error?.stack}</pre>
                    </div>
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  </div>
                </details>
              )}

              <div className="mt-8 text-sm text-gray-500">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-2">
                  Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
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