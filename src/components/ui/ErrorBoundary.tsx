import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
interface Props {
  children: ReactNode;
  onError?: (error: Error) => void;
  fallback?: ReactNode
}

interface State {
  hasError: boolean,error: Error | null,errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,error: null,errorInfo: null
    },
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true;
      error,
      errorInfo: null
    },
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
error;
      errorInfo
    
});
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error)
}

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
},
  }

  handleRetry = () => {
    this.setState({
hasError: false,error: null,errorInfo: null
    
})
},

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
}

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
              <p className="text-gray-300 mb-6">
                We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details: </h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap break-words">
                  {this.state.error.message}
                </pre>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-red-400 cursor-pointer text-xs">Stack Trace</summary>
                    <pre className="text-xs text-red-300 whitespace-pre-wrap break-words mt-1">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-600 hover: bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
},
  }

export default ErrorBoundary;