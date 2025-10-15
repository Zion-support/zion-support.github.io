import { Component, ErrorInfo, ReactNode } from 'react';
import { handleError, logError } from '../utils/errorHandler';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = handleError(error);
    logError(appError, 'GlobalErrorBoundary');
    
    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Example error reporting - replace with your service
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    };
    
    // Send to your error monitoring service
    // Example: fetch('/api/error-report', { method: 'POST', body: JSON.stringify(errorData) });
    
    // For now, store in localStorage for debugging
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
        existingErrors.push(errorData);
        localStorage.setItem('errorLogs', JSON.stringify(existingErrors.slice(-10))); // Keep last 10 errors
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-md w-full glass-effect p-8 text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Application Error</h3>
            <p className="text-gray-300 mb-6">
              {this.state.error?.message || 'An unexpected error occurred. Our team has been notified.'}
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="btn-futuristic w-full"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;