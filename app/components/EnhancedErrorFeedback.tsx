<<<<<<< HEAD
import React from 'react';

interface EnhancedErrorFeedbackProps {
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
  error?: Error;
  className?: string;
}

<<<<<<< HEAD
export default function EnhancedErrorFeedback({ error, className = '' }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`enhanced-error-feedback ${className}`}>
      <h3>Error Feedback</h3>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
=======
export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

export const LoadingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-300">Please wait while we load the content</p>
    </div>
  </div>
);

interface ErrorFallbackProps {
  error?: Error;
  errorInfo?: ErrorInfo;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, errorInfo }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm rounded-xl border border-red-500/20 p-8 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>

        {process.env['NODE_ENV'] === 'development' && error && (
          <div className="bg-slate-900/50 rounded-lg p-4 mb-6 text-left">
            <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
              {error.toString()}
            </pre>
            {errorInfo && (
              <pre className="text-sm text-gray-400 whitespace-pre-wrap overflow-auto max-h-40 mt-2">
                {errorInfo.componentStack}
              </pre>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRefresh}
            className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Go Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4">
            If this problem persists, please contact our support team:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              kleber@ziontechgroup.com
            </a>
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +1 (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
