import React, { Component, ErrorInfo, ReactNode } from 'react';
import React from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
    
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        Content
      </div>
        Content
      </div>
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        Content
      </div>
        Content
      </div>
            <div className="flex items-center mb-4">
        Content
      </div>
        Content
      </div>
              <div className="flex-shrink-0">
        Content
      </div>
        Content
      </div>
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        Content
      </svg>
        Content
      </svg>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        Content
      </path>
        Content
      </path>
                </svg>
              </div>
              <div className="ml-3">
        Content
      </div>
        Content
      </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Content
      </h3>
        Content
      </h3>
                  Something went wrong
                </h3>
              </div>
            </div>
            
            <div className="mt-4">
        Content
      </div>
        Content
      </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
        Content
      </p>
        Content
      </p>
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4">
        Content
      </details>
        Content
      </details>
                  <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
        Content
      </summary>
        Content
      </summary>
                    Error Details
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">
        Content
      </div>
        Content
      </div>
                    <div className="mb-2">
        Content
      </div>
        Content
      </div>
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div >
        Content
      </div>
        Content
      </div>
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
            
            <div className="mt-6 flex space-x-3">
        Content
      </div>
        Content
      </div>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;