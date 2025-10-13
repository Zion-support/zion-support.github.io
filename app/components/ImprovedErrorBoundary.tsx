<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b6b8
=======
interface Props {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
}
class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
    }
    // Call custom error handler if provided
    if (this.props.onError) {
    }
    // In production, you might want to send this to an error reporting service
  }
  handleRetry = () => {
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <Link
                to="/"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </div>
            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-red-400 cursor-pointer hover:text-red-300">
                  Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">
                Still having issues? Contact our support team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get Support
              </Link>
            </div>
          </div>
        </div>
    }
  }
}
// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ImprovedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ImprovedErrorBoundary>
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
// Hook for functional components to handle errors
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    // In production, you might want to send this to an error reporting service
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
};

// Hook for functional components to handle errors
export const _useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by hook:', error, errorInfo);

    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  };
};
=======
}
>>>>>>> origin/main
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
