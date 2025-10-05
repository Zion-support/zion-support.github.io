import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;
    const { errorId } = this.state;

    // Update state with error info
    this.setState({ errorInfo });

    // Log error details
    const errorDetails = {
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount
    };

    // Log to console in development
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error('Error Boundary caught an error:', errorDetails);
    }

    // Report error to external service
    this.reportError(error, errorInfo);

    // Call custom error handler if provided
    if (onError) {
      onError(error, errorInfo);
    }
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    // Log to console in development
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error('Error Report:', errorReport);
    }

    // In production, send to error reporting service:
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport)
    // });
  };

  getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or auth context
    return localStorage.getItem('userId');
  };

  getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  handleRetry = () => {
    this.retryCount++;
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;

    // In a real application, this would send to an error reporting service
    const errorReport = {
      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // For demo purposes, copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2));
      alert('Error details copied to clipboard');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error Report:', errorReport);
      alert('Error details logged to console');
    }
  };

  render() {
    const { hasError, error, errorId } = this.state;
    const { children, fallback, showDetails } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
          <div className='max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center'>
            <div className='mb-6'>
              <AlertTriangle className='w-16 h-16 text-red-500 mx-auto mb-4' />
              <h1 className='text-2xl font-bold text-gray-900 mb-2'>
                Oops! Something went wrong
              </h1>
              <p className='text-gray-600 mb-4'>
                We're sorry, but something unexpected happened. Our team has
                been notified and is working to fix this issue.
              </p>
            </div>

            <div className='bg-gray-100 rounded-lg p-4 mb-6 text-left'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Error Details:
              </h3>
              <p className='text-sm text-gray-600 mb-2'>
                <strong>Error ID:</strong> {errorId}
              </p>
              <p className='text-sm text-gray-600'>
                <strong>Message:</strong>{' '}
                {error?.message || 'Unknown error'}
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <button
                onClick={this.handleRetry}
                className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                <RefreshCw className='w-4 h-4 mr-2' />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className='inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'
              >
                <Home className='w-4 h-4 mr-2' />
                Go Home
              </button>
              <button
                onClick={this.handleReload}
                className='inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
              >
                <RefreshCw className='w-4 h-4 mr-2' />
                Reload Page
              </button>
            </div>

            <div className='mt-6 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-500 mb-3'>
                If this problem persists, please report it to our support team.
              </p>
              <button
                onClick={this.handleReportError}
                className='inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors'
              >
                <Mail className='w-4 h-4 mr-2' />
                Report Error
              </button>
            </div>

            {showDetails && this.state.errorInfo && (
              <details className='mt-6 text-left'>
                <summary className='cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900'>
                  Development Details
                </summary>
                <pre className='mt-2 text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto max-h-64'>
                  {error?.stack}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;
