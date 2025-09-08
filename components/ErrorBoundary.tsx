React, { Component, ErrorInfo, ReactNode } from
  'react';
import { AlertTriangle, RefreshCw, Home } from
  'lucide-react';
import Link from'
  'next/link';''
  'interface Props {children: ReactNode;'fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
error, errorInfo,
    })

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 rounded-lg border border-white/10 p-8 text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-slate-300 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => typeof window !== 'undefined' && window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => typeof window !== 'undefined' && (window.location.href = '/')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
            {typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-slate-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-red-400 bg-slate-800 p-3 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}

<div className="flex flex-col sm: flex-row gap-3">"              <button"                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200""              >"                <RefreshCw className="w-4 h-4 mr-2" />"                Try Again"              </button>
              
              <Link
                href="/""                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200""              >"                <Home className="w-4 h-4 mr-2" />"                Go Home"              </Link>"
            </div>

<div className="mt-6 pt-6 border-t border-gray-200">"              <p className="text-sm text-gray-500">"                If this problem persists, please{' '
  '}'                <Link href="/contact" className="text-blue-600 hover: text-blue-700">"                  contact our support team"                </Link></p></div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;