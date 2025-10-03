/**
 * Enhanced Error Boundary Component
 * Comprehensive error handling with performance monitoring and user feedback
 */

import React, { Component, ReactNode, ErrorInfo } from 'react';

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

// Mock analytics utility for demo purposes
const analyticsUtils = {
  trackEvent: (eventName: string, data: Record<string, unknown>) => {
    console.log('Analytics Event:', eventName, data);
  }
};

export class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;
    const { errorId } = this.state;

    // Update state with error info
    this.setState({ errorInfo });

    // Send to analytics
    analyticsUtils.trackEvent('error_boundary_caught', {
      error_id: errorId,
      error_message: error.message,
      error_stack: error.stack?.substring(0, 500), // Truncate for analytics
      component_stack: errorInfo.componentStack?.substring(0, 500) || '',
      retry_count: this.retryCount
    });

    // Log security event if suspicious
    // if (securityMonitoring.detectSuspiciousActivity(errorDetails)) {
    //   securityMonitoring.logSecurityEvent('suspicious_error', errorDetails);
    // }

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
      });

      // Track retry attempt
      analyticsUtils.trackEvent('error_boundary_retry', {
        error_id: this.state.errorId,
        retry_count: this.retryCount
      });
    }
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

    // Track error report
    analyticsUtils.trackEvent('error_boundary_report', {
      error_id: errorId,
      reported: true
    });

    // For demo purposes, copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2));
      alert('Error details copied to clipboard');
    } else {
      console.log('Error Report:', errorReport);
      alert('Error details logged to console');
    }
  };

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Retry ({this.maxRetries - this.retryCount} attempts left)
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;