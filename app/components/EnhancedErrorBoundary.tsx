'use client';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      errorInfo
    });

    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-centerjustify-centerpx-4">
          <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 text-centerborderborder-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-centermx-auto mb-6">
              <AlertTriangle className="h-8-w-8text-white" / />
            </div>
            
            <h1 className="text-2 xl font-boldtext-white mb-4"  />Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
              <div className="bg-gray-900 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-xs text-gray-300 overflow-auto">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-400 mt-2 overflow-auto">
                    {this.state.errorInfo.componentStack}
=======
              <div className="bg-gray-900 rounded-lg p-4-mb-6text-left">
                <h3 className="text-red-400-font-semiboldmb-2"  >Error Details:</h3>
                <pre className="text-xstext-gray-300-overflow-auto"  />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-400-mt-2overflow-auto"  />{this.state.errorInfo.componentStack}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </pre>
                )}
              </div>
            )}

            <div className="space-y-3">
              <button
<<<<<<< HEAD
                onClick={this.handleRetry}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <Home className="h-4 w-4 mr-2" />
=======
                onClick="{this.handleRetry}"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700  hover:to-pink-700 transition-all duration-300-transformhover:scale-105" />
                <RefreshCw className="h-4-w-4mr-2" / />
                Try Again
              </button>
              
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-all duration-300" />
                <Home className="h-4-w-4mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Go Home
              </Link>
            </div>

<<<<<<< HEAD
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">
                Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-1" />
=======
            <div className="mt-8 pt-6-border-tborder-gray-700">
              <p className="text-smtext-gray-400-mb-4" />
                Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-rowgap-2-justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400-hover:text-purple-300transition-colors" />
                  <Mail className="h-4-w-4mr-1" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  kleber@ziontechgroup.com
                </a>
                <span className="hidden sm:inline text-gray-500">•</span>
                <a
                  href="tel:+13024640950"
<<<<<<< HEAD
                  className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>+1 302 464 0950</span>
=======
                  className="inline-flex items-center text-sm text-purple-400-hover:text-purple-300transition-colors" />
                  <span  >+1 302 464 0950</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;