import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'; origin/cursor/analyze-improve-and-deploy-application-1232
;
  error?: Error;
  error: Error | null;
  errorInfo: ErrorInfo | null;
 origin/cursor/analyze-improve-and-deploy-application-0f1c;
 origin/cursor/analyze-improve-and-deploy-application-0f74;
 origin/cursor/analyze-improve-and-deploy-application-139b
;
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
onError?: (error: Error, errorInfo: ErrorInfo) => void; origin/cursor/analyze-improve-and-deploy-application-0f74;
 origin/cursor/analyze-improve-and-deploy-application-1247;
 origin/cursor/analyze-improve-and-deploy-application-139b;
}
interface State {
hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null origin/cursor/analyze-improve-and-deploy-application-0f1c;
 cursor/fix-errors-and-merge-to-main-f512;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
 origin/cursor/analyze-improve-and-deploy-application-0e37;
 cursor/fix-errors-and-merge-to-main-f512;
    return { hasError: true, error };
 origin/cursor/analyze-improve-and-deploy-application-0f1c;
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
 origin/cursor/analyze-improve-and-deploy-application-0f74;
    this.setState({
      error,
      errorInfo;
    });
// Log error to console in development;
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo) origin/cursor/analyze-improve-and-deploy-application-0f1c;
 origin/cursor/analyze-improve-and-deploy-application-0f74;
    }
 cursor/fix-errors-and-merge-to-main-f512;
  }
return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development;
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
 cursor/fix-errors-and-merge-to-main-f512;
            </Props><button;
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Page</button>
            </button>
console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
 origin/cursor/analyze-improve-and-deploy-application-0f1c
;
  handleGoHome = () => {
    window.location.href = '/';
  };
  render() {
    if (this.state.hasError) {
      // Custom fallback UI;
 origin/cursor/analyze-improve-and-deploy-application-1507;
      if (this.props.fallback) {
        return this.props.fallback;
      }
 origin/cursor/analyze-improve-and-deploy-application-1507;
      return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4" /><div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center" /><div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"> origin/cursor/analyze-improve-and-deploy-application-139b;
              </div><AlertTriangle className="w-8 h-8 text-red-400" />
 origin/cursor/analyze-improve-and-deploy-application-1247;
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
 origin/cursor/analyze-improve-and-deploy-application-1507;
              Oops! Something went wrong</h1>
            </h1>
We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue. origin/cursor/analyze-improve-and-deploy-application-139b;
            </p>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left" /><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4" /><div className="max-w-2xl mx-auto text-center" /><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /><div className="flex justify-center mb-6" /><div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center" /><AlertTriangle className="h-8 w-8 text-red-400" /> origin/cursor/analyze-improve-and-deploy-application-0f1c;
 origin/cursor/analyze-improve-and-deploy-application-139b;
                </div>
              </div>
className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group" origin/cursor/analyze-improve-and-deploy-application-139b;
 origin/cursor/analyze-improve-and-deploy-application-1507;
              >
                Reload Page;
              </button>
<button;
 origin/cursor/analyze-improve-and-deploy-application-139b;
 origin/cursor/analyze-improve-and-deploy-application-1507;
              >
                Go Home</button>
              </button>
              <button;
                onClick={() => window.history.back()}
                className="w-full border border-white/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Go Back</button>
              </button>
            </div>
<h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong</h1>
              </h1>
              <p className="text-gray-300 mb-8 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue. origin/cursor/analyze-improve-and-deploy-application-0f1c</p>
              </p>
              {process.env['NODE_ENV'] === 'development' && this.state.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-left" /><h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}</pre>
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-red-300 text-sm mt-2 overflow-auto">
 origin/cursor/analyze-improve-and-deploy-application-139b;
 origin/cursor/analyze-improve-and-deploy-application-1507</pre>
            </div>
            <div className="mt-2" /><p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.</p>
              </p>
            </div>
            <div className="mt-4 flex space-x-3" /><button;
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Refresh Page</button>
              </button>
              <button;
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try Again</button>
              </button>
            </div>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-4" /><summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Error Details (Development)</summary>
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded-md" /><pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {this.state.error.stack}</pre>
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-600 whitespace-pre-wrap mt-2">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74;
                      {this.state.errorInfo.componentStack}</pre>
                    </pre>
                  )}
                </div>
</details>
            )} origin/cursor/analyze-improve-and-deploy-application-0f74;
 origin/cursor/analyze-improve-and-deploy-application-1247;
 cursor/fix-errors-and-merge-to-main-f512;
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary; origin/cursor/analyze-improve-and-deploy-application-0f74;
 origin/cursor/analyze-improve-and-deploy-application-1247;
 cursor/fix-errors-and-merge-to-main-f512
;