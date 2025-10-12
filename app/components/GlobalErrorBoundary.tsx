'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Global Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6">
                Oops! Something went wrong
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                
                <Link
                  to="/"
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Error fallback component for react-error-boundary
const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ 
  error, 
  resetErrorBoundary 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
        <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-6">
          Oops! Something went wrong
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export { ErrorFallback };
export default GlobalErrorBoundary;
