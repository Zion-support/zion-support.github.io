<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed
import React from 'react';

interface EnhancedErrorFeedbackProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function EnhancedErrorFeedback({ className = '', children }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`${className}`}>
=======
export default function EnhancedErrorFeedback({ className = '', children, ...props }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`enhanced-error-feedback-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function EnhancedErrorFeedback({ className = '', children, ...props }: EnhancedErrorFeedbackProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {,
    children: ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
}

interface State {,
    hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {,
    hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development)
                </h3>
                <pre className="text-red-300 text-sm overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button>
  onClick={this.handleRetry}>
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                Try Again
              </button>
<<<<<<< HEAD
              
              <button
                onClick={this.handleGoHome}
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
=======
              <button>
  onClick={this.handleGoHome}>
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Go Home
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2">
                <a >
  href="mailto:kleber@ziontechgroup.com" >
  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default GlobalErrorBoundary;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
export default GlobalErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
