import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}
>>>>>>> origin/main;
>>>>>>> origin/main
class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}````
    };
>>>>>>> origin/main;
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
    // Call the onError callback if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);'
    }
    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a logging service;
      console.error('Production error:', error);'
>>>>>>> origin/main;
    }
>>>>>>> origin/main;
 origin/main;
  render() {
    if (this.state.hasError) {
      // Custom fallback UI;
      if (this.props.fallback) {
        return this.props.fallback;
return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development Only)
                </h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div>
                    <strong>Error:</strong> {this.state.error.message;
                  </div>
                  <div>
                    <strong>Error ID:</strong> {this.state.errorId;
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="mt-2 text-xs bg-black/40 p-2 rounded overflow-auto">
                        {this.state.error.stack;
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-2 text-xs bg-black/40 p-2 rounded overflow-auto">
                        {this.state.errorInfo.componentStack;
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome;
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </button>
              
              <button
                onClick={this.handleReload;
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p>Error ID: {this.state.errorId}</p>
              <p>If this problem persists, please contact our support team with this error ID.</p>
            </div>
>>>>>>> origin/main;
          </div>
        </>
)}

    return this.props.children;
}
export default EnhancedErrorBoundary;
export default EnhancedErrorBoundary;
              )}`
        </div>``
      );```
    }````
    return this.props.children;`````
  }``````
}```````
;````````
export default EnhancedErrorBoundary;`````````
>>>>>>> origin/main;``````````
 origin/main;```````````