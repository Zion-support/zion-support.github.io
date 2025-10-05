const fs = require('fs');
const path = require('path');

// Fix EnhancedErrorBoundary.tsx
const errorBoundaryContent = `import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
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
    return {
      hasError: true,
      error,
      errorId: \`error_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error: ', error, errorInfo);
    }
    
    this.reportError(error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };
    
    console.error('Error Report: ', errorReport);
  };

  getUserId = (): string | null => {
    return localStorage.getItem('userId');
  };

  getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = \`session_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const errorReport = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    
    const subject = encodeURIComponent(\`Error Report - \${this.state.errorId}\`);
    const body = encodeURIComponent(\`
Error ID: \${this.state.errorId}
Error Message: \${this.state.error?.message}
URL: \${window.location.href}
Timestamp: \${new Date().toISOString()}
Please describe what you were doing when this error occurred: [Your description here]

Stack Trace: \${this.state.error?.stack}
    \`);
    
    window.open(\`mailto:kleber@ziontechgroup.com?subject=\${subject}&body=\${body}\`);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified
                and is working to fix this issue.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Message:</strong> {this.state.error?.message || 'Unknown error'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">
                If this problem persists, please report it to our support team.
              </p>
              <button
                onClick={this.handleReportError}
                className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Error
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                  Development Details
                </summary>
                <pre className="mt-2 text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto max-h-64">
                  {this.state.error?.stack}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default EnhancedErrorBoundary;`;

fs.writeFileSync('/workspace/src/components/EnhancedErrorBoundary.tsx', errorBoundaryContent);
console.log('Fixed EnhancedErrorBoundary.tsx');
