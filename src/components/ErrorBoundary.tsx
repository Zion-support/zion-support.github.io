import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  FileText, 
  MessageCircle,
  X,
  CheckCircle,
  Info
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  autoRecover?: boolean;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRecovering: boolean;
  showErrorDetails: boolean;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      showErrorDetails: false,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Auto-recovery logic
    if (this.props.autoRecover && this.state.retryCount < (this.props.maxRetries || 3)) {
      setTimeout(() => {
        this.handleRetry();
      }, 1000 * (this.state.retryCount + 1));
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      retryCount: prevState.retryCount + 1,
      isRecovering: true
    }));

    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        isRecovering: false
      });
    }, 1000);
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false,
      showErrorDetails: false
    });
  };

  toggleErrorDetails = () => {
    this.setState(prevState => ({
      showErrorDetails: !prevState.showErrorDetails
    }));
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-300">
                We encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Error Details</h2>
                <button
                  onClick={this.toggleErrorDetails}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {this.state.showErrorDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>
              
              {this.state.showErrorDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-4"
                >
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Error ID:</span>
                      <span className="text-white ml-2 font-mono">{this.state.errorId}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Message:</span>
                      <span className="text-white ml-2">{this.state.error?.message}</span>
                    </div>
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <span className="text-gray-400">Component Stack:</span>
                        <pre className="text-white mt-2 text-xs overflow-x-auto">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {this.state.isRecovering ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Recovering...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    <span>Try Again</span>
                  </>
                )}
              </button>
              
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <X className="w-5 h-5" />
                <span>Reset</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-700/50 text-center text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-1">Error ID: {this.state.errorId}</p>
            </div>
          </motion.div>
        </div>
      );
    }

    if (this.state.isRecovering) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-white animate-spin" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Recovering...</h2>
            <p className="text-gray-300">Attempting to restore the application</p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
