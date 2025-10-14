import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      retryCount: 0;
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });
    // Call the onError callback if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development'
      console.error('GlobalErrorBoundary caught an error:'
    }

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production'
      // Here you would typically send the error to a logging service;
      console.error('Production error:'
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1;
      }));
    } else {
      // Reset retry count and try again;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: 0;
      });
    }
  };
  handleGoHome = () => {
    window.location.href = '/'
  };
  handleReportError = () => {
    const { error, errorInfo } = this.state;
    if (error) {
      // Create error report;
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href;
      };
      // Send error report (in a real app, you'
      console.log('Error Report:'
      
      // For now, just show an alert;
      alert('Error has been reported. Thank you for your feedback!'
    }
  };
  handleReportError = () => {
    const errorData = {
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href;
    };
    // Create mailto link with error details;
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`
    const body = encodeURIComponent(JSON.stringify(errorData, null, 2));
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`
    
    window.open(mailtoLink);
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI;
      return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
            <h1 className="text-2xl font-bold text-white mb-4"
              Oops! Something went wrong;
            </h1>
            
            <p className="text-gray-300 mb-6"
              We'
            </p>

            {this.state.retryCount > 0 && (
              <p className="text-sm text-yellow-400 mb-4"
                Retry attempt {this.state.retryCount} of {this.maxRetries}
              </p></div>
            )}
            
            <div className="space-y-4"
              <button;
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5"
                <span>Try Again</span>
              </button>
              
              <button;
                onClick={this.handleGoHome}
                className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5"
                <span>Go Home</span>
              </button>

              <button;
                onClick={this.handleReportError}
                className="w-full border border-orange-400 text-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5"
                <span>Report Error</span>
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development'
              <details className="mt-6 text-left"
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white"
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto"
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && (
                    <pre className="mt-2"
                  )}
                </div>
              </details>
            )}
          </div>
        
    </div>
  );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
>>>>>>> origin/main;
>>>>>>> origin/main;