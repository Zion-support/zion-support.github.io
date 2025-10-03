/**
 * Enhanced Error Boundary Component
 * Comprehensive error handling with performance monitoring and user feedback
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { securityMonitoring } from '../utils/securityEnhancements';
import { analyticsUtils } from '../utils/seoOptimizations';

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
    const { onError, showDetails = false } = this.props;
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
      console.error('Error Boundary caught an error:', errorDetails);
    }

    // Send to analytics
    analyticsUtils.trackEvent('error_boundary_caught', {
      error_id: errorId,
      error_message: error.message,
      error_stack: error.stack?.substring(0, 500), // Truncate for analytics
      component_stack: errorInfo.componentStack.substring(0, 500),
      retry_count: this.retryCount
    });

    // Log security event if suspicious
    if (securityMonitoring.detectSuspiciousActivity(errorDetails)) {
      securityMonitoring.logSecurityEvent('suspicious_error', errorDetails);
    }

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
    const { hasError, error, errorInfo, errorId } = this.state;
    const { children, fallback, showDetails } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 text-red-600">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  Something went wrong
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We're sorry, but something unexpected happened. Our team has been notified.
                </p>
                
                {showDetails && error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <h3 className="text-sm font-medium text-red-800">Error Details</h3>
                    <p className="mt-1 text-sm text-red-700">Error ID: {errorId}</p>
                    <p className="mt-1 text-sm text-red-700">Message: {error.message}</p>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {this.retryCount < this.maxRetries && (
                    <button
                      onClick={this.handleRetry}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Try Again ({this.maxRetries - this.retryCount} attempts left)
                    </button>
                  )}
                  
                  <button
                    onClick={this.handleReportError}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Report Error
                  </button>
                  
                  <button
                    onClick={() => window.location.reload()}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Reload Page
                  </button>
                </div>
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