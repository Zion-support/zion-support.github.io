import { Component, ErrorInfo, ReactNode } from 'react';

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
    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Replace with your error monitoring service (e.g., Sentry, LogRocket, etc.)
      this.reportError(error, errorInfo);
    } else {
      // In development, store error for debugging
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      severity: this.determineErrorSeverity(error),
    };
    
    // Send to your error monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: fetch('/api/error-report', { method: 'POST', body: JSON.stringify(errorData) });
      this.sendToErrorService(errorData);
    }
    
    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorData);
      localStorage.setItem('errorLogs', JSON.stringify(existingErrors.slice(-10))); // Keep last 10 errors
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  private determineErrorSeverity = (error: Error): 'low' | 'medium' | 'high' | 'critical' => {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      return 'low';
    }
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return 'medium';
    }
    if (error.message.includes('TypeError') || error.message.includes('ReferenceError')) {
      return 'high';
    }
    if (error.message.includes('OutOfMemory') || error.message.includes('Maximum call stack')) {
      return 'critical';
    }
    return 'medium';
  }

  private sendToErrorService = async (errorData: any) => {
    try {
      // Replace with your actual error reporting service
      // await fetch('/api/error-report', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (e) {
      // Silently fail to avoid infinite error loops
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Application Error</h3>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reload Page
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