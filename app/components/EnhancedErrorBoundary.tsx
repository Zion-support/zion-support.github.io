'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to analytics or error reporting service
    if (typeof window !== 'undefined') {
      console.error('Error caught by boundary:', error, errorInfo);
      
      // Send to error reporting service
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            error: {
              message: error.message,
              stack: error.stack,
              name: error.name,
            },
            errorInfo: {
              componentStack: errorInfo.componentStack,
            },
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          }),
        }).catch(console.error);
      }
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <>
          <Helmet>
            <title>Error | Zion Tech Group</title>
            <meta name="description" content="An error occurred while loading the page." />
          </Helmet>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            
            <main className="flex items-center justify-center min-h-screen px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex justify-center mb-6">
                    <div className="bg-red-100 p-4 rounded-full">
                      <AlertTriangle className="w-12 h-12 text-red-600" />
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-white mb-4">
                    Oops! Something went wrong
                  </h1>
                  
                  <p className="text-gray-300 mb-6">
                    We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
                  </p>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-6 text-left">
                      <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                      <pre className="text-red-300 text-sm overflow-auto">
                        {this.state.error.message}
                        {this.state.error.stack && `\n\n${this.state.error.stack}`}
                      </pre>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={this.handleRetry}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Try Again
                    </button>
                    
                    <button
                      onClick={this.handleGoHome}
                      className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                    >
                      <Home className="w-5 h-5 mr-2" />
                      Go Home
                    </button>
                  </div>
                  
                  <div className="mt-8 text-sm text-gray-400">
                    <p>If this problem persists, please contact our support team.</p>
                    <a
                      href="/contact"
                      className="text-emerald-400 hover:text-emerald-300 underline"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </main>
            
            <Footer />
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;