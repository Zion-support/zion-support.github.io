import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-zion-purple" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-zion-slate-light">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>
            </div>
            
            {this.state.error && process.env.NODE_ENV === 'development' && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">
                  <pre>{this.state.error.stack}</pre>
                </div>
              </details>
            )}
            
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.reload()}
                className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-md flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.history.back()}
                className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-4 py-2 rounded-md flex items-center justify-center"
              >
                Go Back
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/"
                className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors"
              >
                <Home className="w-4 h-4 inline mr-2" />
                Go Home
              </motion.a>
            </div>
            
            <div className="mt-6 text-xs text-zion-slate-light">
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-1">
                Error ID: {this.state.error?.name || 'Unknown'} - {new Date().toISOString()}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}