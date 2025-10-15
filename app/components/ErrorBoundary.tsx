import React, { Component, ErrorInfo, ReactNode } from 'react';
import { handleError, logError } from '../utils/errorHandler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = handleError(error);
    logError(appError, 'ErrorBoundary');
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-8 mx-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
              
              {this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">
                    Technical Details
                  </summary>
                  <div className="bg-gray-100 p-3 rounded-md text-xs font-mono text-gray-700 overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="mt-1 whitespace-pre-wrap">{this.state.error.stack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
              
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  🔄 Reload Page
                </button>
                
                <button
                  onClick={() => this.setState({ hasError: false, error: undefined })}
                  className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  🔄 Try Again
                </button>
                
                <a
                  href="/"
                  className="block w-full px-6 py-3 text-center text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-colors"
                >
                  🏠 Go Home
                </a>
                
                <a
                  href="/contact"
                  className="block w-full px-6 py-3 text-center text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-lg transition-colors"
                >
                  📞 Contact Support
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  If this problem persists, please contact our support team with this error ID.
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

export default ErrorBoundary;