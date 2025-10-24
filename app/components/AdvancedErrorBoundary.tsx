'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
interface AdvancedErrorBoundaryProps {
  className?: string;
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}
class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    // Report to error tracking service
    console.error('Error reported:', errorReport);
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  };
  private generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    this.reportError(error, errorInfo);
  }
  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  private handleGoHome = () => {
    window.location.href = '/';
  };
  private handleReportBug = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack
    };
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report&body=${encodeURIComponent(JSON.stringify(errorDetails, null, 2))}`;
    window.open(mailtoLink);
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className={`min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4 ${this.props.className || ''}`}>
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600 mb-4">
                  We're sorry, but something unexpected happened. Our team has been notified.
                </p>
                {this.state.errorId && (
                  <p className="text-sm text-gray-500 mb-4">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
                <button
                  onClick={this.handleReportBug}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Report Bug
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default AdvancedErrorBoundary;