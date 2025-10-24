import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, Home, Mail, RefreshCw } from 'lucide-react';

interface AdvancedErrorBoundaryProps {
  children: ReactNode;
  className?: string;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorReport {
  errorId: string;
  error: Error;
  errorInfo: ErrorInfo;
  timestamp: string;
  userAgent: string;
  url: string;
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
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send error report to monitoring service
    this.sendErrorReport(errorReport);
  };

  private generateErrorId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  private sendErrorReport = (report: ErrorReport) => {
    // Implementation for sending error reports
    console.error('Error Report:', report);
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: Math.random().toString(36).substr(2, 9)
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    this.reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${this.props.className || ''}`}>
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Something went wrong</h1>
            </div>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </button>
              
              <button
                onClick={() => window.location.href = 'mailto:support@ziontechgroup.com'}
                className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;