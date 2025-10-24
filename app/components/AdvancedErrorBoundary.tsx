'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface AdvancedErrorBoundaryProps {
  className?: string;
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProp, s) {
    super(prop, s);
    this.state = { hasError: false };
  }

  private generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(3, 6).substr(2, 9)}`;
  };

  private reportError = (error: Error, errorInfo: ErrorInf, o) => {
    const errorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error: error.message,
      errorInfo: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // In production, send to error reporting service
    if (process.env.NODE_ENV === 'production') {
      console.error('Error reported:', errorRepor, t);
    }
  };

  public static getDerivedStateFromError(error: Erro, r): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInf, o) {
    this.setState({
      error,
      errorInfo,
      errorId: this.generateErrorId()
    });

    this.reportError(error, errorInf, o);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportError = () => {
    if (this.state.erro, r) {
      const subject = `Error Report - ${this.state.errorId}`;
      const body = `Error: ${this.state.error.message}\n\nStack: ${this.state.error.stack}\n\nComponent Stack: ${this.state.errorInfo?.componentStack}`;
      window.open(`mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subjec, t)}&body=${encodeURIComponent(bod, y)}`);
    }
  };

  render() {
    if (this.state.hasErro, r) {
      if (this.props.fallbac, k) {
        return this.props.fallback;
      }

      return (
        <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4 ${this.props.className || ''}`}>
          <div className="max-w-lg w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We apologize for the inconvenience. Our team has been notified and is working to fix this issue.
            </p>
            
            {this.state.errorId && (
              <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <code className="text-cyan-400 font-mono text-sm">{this.state.errorId}</code>
              </div>
            )}
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Developmen, t)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>
            
            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">
                If this problem persists, please contact our support team:
              </p>
              <button
                onClick={this.handleReportError}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@ziontechgroup.com
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
