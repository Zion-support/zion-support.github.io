import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, MessageCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Generate a unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Update state with error info
    this.setState({
      errorInfo,
      errorId: this.state.errorId
    });

    // In production, you could send error to monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error monitoring service
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      // You can implement your error logging service here
      // Example: Sentry, LogRocket, etc.
      console.log('Error logged:', errorData);
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReportIssue = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Message: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `;

    // Open email client with error details
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(errorDetails)}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-zion-slate-light">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Bug className="w-5 h-5 text-zion-cyan" />
                <h2 className="text-lg font-semibold text-white">Error Details</h2>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Error ID:</span>
                  <span className="text-zion-cyan font-mono">{this.state.errorId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Message:</span>
                  <span className="text-white">{this.state.error?.message}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zion-slate-light">Time:</span>
                  <span className="text-white">{new Date().toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 border border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 text-zion-slate-light hover:text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              
              <button
                onClick={this.handleReportIssue}
                className="flex items-center justify-center gap-2 text-zion-slate-light hover:text-zion-cyan px-4 py-2 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Report Issue
              </button>
            </div>

            {/* Development Mode Info */}
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="mt-6 bg-zion-slate-dark/50 rounded-lg p-4">
                <summary className="text-zion-cyan cursor-pointer font-medium mb-2">
                  Component Stack Trace (Development)
                </summary>
                <pre className="text-xs text-zion-slate-light overflow-auto bg-zion-slate-dark p-3 rounded border border-zion-slate-light/20">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            {/* Contact Information */}
            <div className="text-center mt-8 text-sm text-zion-slate-light">
              <p>Need help? Contact our support team:</p>
              <div className="flex items-center justify-center gap-4 mt-2">
                <a 
                  href="mailto:support@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  support@ziontechgroup.com
                </a>
                <span>•</span>
                <a 
                  href="tel:+13024640950"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}