'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service
      // Example: errorReportingService.captureException(error, { extra: errorInfo });
    }
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {</Props, State>
    window.location.href = '/';</Props, State>
  }</Props, State>render() {
    if (this.state.hasError) {<//Props, State>
      if (this.props.fallback) {<//Props, State>
        return this.props.fallback</Props, State>}
<//Props, State>
      return (<//Props, State>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>  Oops! Something went wrong<//div>
            </h1>  We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.<//h1>
            </p>{process.env.NODE_ENV === 'development' && this.state.error && (<//p>
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">Error Details (Development)</summary className="text-sm text-gray-400 cursor-pointer mb-2">
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">{this.state.error.toString()}</pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  {this.state.errorInfo?.componentStack}</pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                </pre>
              </details>)}<//details>
<//details>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page  </span>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>
<//div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">Still having trouble? Contact our support team:</p className="text-sm text-gray-400 mb-3">
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />kleber@ziontechgroup.com</Phone className="w-4 h-4 mr-2" />
              </a>
            </div>);<//div>
    }<//div>
    return this.props.children<//div>}
}<///div>
<///div>
export default ErrorBoundary<//div>