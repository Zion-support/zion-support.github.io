import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
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
    this.setState({
      error,
      errorInfo,
    });

    // Enhanced error reporting
    this.reportError(error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  reportError = async (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      errorId: this.state.errorId,
      buildVersion: process.env.REACT_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Data:', errorData);
      console.groupEnd();
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      try {
        // You can integrate with services like Sentry, LogRocket, etc.
        await this.sendToErrorService(errorData);
      } catch (reportingError) {
        console.warn('Failed to report error:', reportingError);
      }
    }
  };

  sendToErrorService = async (errorData: any) => {
    // Example: Send to your error reporting service
    // Replace with your actual error reporting endpoint
    const response = await fetch('/api/error-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    });

    if (!response.ok) {
      throw new Error(`Error reporting failed: ${response.status}`);
    }
  };

  getUserId = (): string | null => {
    // Get user ID from your auth system
    return localStorage.getItem('userId') || null;
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
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Please describe what you were doing when this error occurred:\n\n\n\n---\n\nError Details:\n${JSON.stringify(errorData, null, 2)}`;
    
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>

            {this.state.errorId && (
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <p className="font-mono text-cyan-400 text-sm break-all">{this.state.errorId}</p>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-gray-800/50 rounded-lg p-4">
                <summary className="cursor-pointer text-sm text-gray-300 hover:text-white mb-2">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-gray-900/50 rounded text-xs font-mono overflow-auto max-h-64">
                  <div className="mb-2">
                    <strong className="text-red-400">Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong className="text-red-400">Stack:</strong>
                      <pre className="whitespace-pre-wrap text-gray-300">{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong className="text-red-400">Component Stack:</strong>
                      <pre className="whitespace-pre-wrap text-gray-300">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold group"
              >
                <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold group"
              >
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </button>

              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Report Bug
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                If this problem persists, please contact our support team at{' '}
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
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

export default EnhancedErrorBoundary;