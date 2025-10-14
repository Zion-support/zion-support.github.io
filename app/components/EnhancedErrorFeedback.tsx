import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

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
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback: React.FC<{ error?: Error }> = ({ error }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleReportError = () => {
    const errorDetails = {
      message: error?.message || 'Unknown error',
      stack: error?.stack || 'No stack trace available',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // In a real app, you would send this to your error reporting service
    console.error('Error details for reporting:', errorDetails);
    
    // For now, just show an alert
    alert('Error has been reported. Thank you for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-lg p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-red-400">
          <AlertTriangle className="w-16 h-16" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>

        {error && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
              Error Details
            </summary>
            <pre className="mt-2 text-xs text-red-300 bg-slate-900 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}

        <div className="space-y-3">
          <button
            onClick={handleRefresh}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Page
          </button>
          
          <button
            onClick={handleGoHome}
            className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </button>
          
          <button
            onClick={handleReportError}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Report Error
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalErrorBoundary;