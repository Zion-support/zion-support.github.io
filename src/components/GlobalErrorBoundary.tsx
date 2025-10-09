'use client';
<<<<<<< HEAD
interface Props {
  // TODO: Add content
};
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  // TODO: Add content
};
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}
class GlobalErrorBoundary extends Component
          
          
          
          
          
          
          
          
          <Props, State> {
  // TODO: Add content
}
  constructor(props: Props) {
  // TODO: Add content
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
>>>>>>> cursor/fix-errors-and-merge-to-main-2b60
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
  // TODO: Add content
}
      if (this.props.fallback) {
  // TODO: Add content
}
        return this.props.fallback;
      }
      return (
    
          
          
          
          
          
          
          
          <div>Coming Soon</div>
  )
        
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            {/* Error Message */}
            <h1 className="text-2xl font-bold text-white mb-4">
// Something went wrong
            
          
          
          
          
          
          
          
          
          </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && ()
              
          <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
// Error Details (Development)
                
          
          
          
          
          
          
          
          
          </summary>
                <div className="mt-2 p-4 bg-slate-800 rounded-lg text-xs text-red-300 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && ()
                    
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
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
// >
//                 Try Again
              
          
          
          
          
          
          
          
          
          </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300 font-medium"
// >
//                 Refresh Page
              
          
          
          
          
          
          
          
          
          </button>
              <a
                href="/"
                className="block w-full bg-transparent border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium"
// >
//                 Go Home
              
          
          
          
          
          
          
          
          
          </a>
            </div>
            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">
                Need help? Contact our support team:
              </p>
              <a
                href="tel:+13024640950"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
// >
//                 (302) 464-0950
              
          
          
          
          
          
          
          
          
          </a>
            </div>
=======
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300">Please refresh the page and try again.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2b60
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;