import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We encountered an unexpected error. Please try again or go back to the home page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-colors duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;