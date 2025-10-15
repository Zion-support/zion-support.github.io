import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet-async"; interface Props { children: ReactNode; fallback?: ReactNode; onError?: (error: Error, errorInfo: ErrorInfo) => void; } interface State { hasError: boolean; error: Error | null; } class EnhancedErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props); this.state = { hasError: false, error: null }; } static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; } componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error('ErrorBoundary caught an error:', error, errorInfo); if (this.props.onError) { this.props.onError(error, errorInfo); } } handleRetry = () => { this.setState({ hasError: false, error: null }); }; render() { if (this.state.hasError) { if (this.props.fallback) { return this.props.fallback; } return ( <> <Helmet> <title>Error - Zion Tech Group</title> <meta name="description" content="An error occurred while loading the page" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto p-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h1 className="text-xl font-semibold text-white mb-2">
                  Something went wrong
                </h1>
                <p className="text-gray-300 mb-6">
                  We're sorry, but something unexpected happened. Please try again.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={ this.handleRetry }
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </button>
                  <button
                    onClick={ () => window.location.reload() }
                    className="flex-1 bg-white/10 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                    Reload Page
                  </button>
                </div>
                { process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-6 p-4 bg-gray-800/50 rounded-lg text-left">
                    <summary className="cursor-pointer font-medium text-gray-300 mb-2">
                      Error Details (Development)
                    </summary>
                    <pre className="text-xs text-gray-400 overflow-auto">
                      {this.state.error.toString() }
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
export default EnhancedErrorBoundary;