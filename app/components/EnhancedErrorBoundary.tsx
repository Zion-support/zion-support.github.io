import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  userReport?: string;
  isReporting: boolean;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      isReporting: false 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorId: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Enhanced error logging
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount,
    };

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Details:', errorDetails);
      console.groupEnd();
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Enhanced error reporting in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(errorDetails);
    }
  }

  private reportError = async (errorDetails: any) => {
    try {
      // In a real application, you would send this to your error reporting service
      // For now, we'll store it in localStorage for demonstration
      const errorLog = JSON.parse(localStorage.getItem('errorLog') || '[]');
      errorLog.push(errorDetails);
      localStorage.setItem('errorLog', JSON.stringify(errorLog.slice(-50))); // Keep last 50 errors
    } catch (err) {
      console.error('Failed to log error:', err);
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({ 
        hasError: false, 
        error: undefined, 
        errorInfo: undefined,
        userReport: undefined 
      });
    } else {
      // After max retries, reload the page
      window.location.reload();
    }
  };

  private handleReportError = async () => {
    this.setState({ isReporting: true });
    
    try {
      // Simulate sending error report
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send this to your backend
      const report = {
        errorId: this.state.errorId,
        userReport: this.state.userReport,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      console.log('Error report sent:', report);
      
      // Show success message
      alert('Thank you for reporting this error. We will investigate and fix it soon.');
      
      this.setState({ 
        isReporting: false,
        userReport: undefined 
      });
    } catch (err) {
      console.error('Failed to send error report:', err);
      this.setState({ isReporting: false });
    }
  };

  private handleUserReportChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ userReport: e.target.value });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {this.props.showDetails && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details
                </h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <div><strong>Error ID:</strong> {this.state.errorId}</div>
                  <div><strong>Message:</strong> {this.state.error.message}</div>
                  <div><strong>Retry Count:</strong> {this.retryCount}/{this.maxRetries}</div>
                  {this.state.error.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-red-300 hover:text-red-200">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs text-gray-400 overflow-auto max-h-32">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            )}

            {/* User Report Section */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Help us improve
              </h3>
              <textarea
                value={this.state.userReport || ''}
                onChange={this.handleUserReportChange}
                placeholder="What were you doing when this error occurred? (Optional)"
                className="w-full h-24 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
                {this.retryCount < this.maxRetries ? 'Try Again' : 'Reload Page'}
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </Link>

              {this.state.userReport && (
                <button
                  onClick={this.handleReportError}
                  disabled={this.state.isReporting}
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {this.state.isReporting ? 'Sending...' : 'Report Error'}
                </button>
              )}
            </div>

            {/* Contact Information */}
            <div className="mt-8 text-center text-sm text-gray-400">
              <p>
                If this problem persists, please contact us at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  support@ziontechgroup.com
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