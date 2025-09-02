<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';'
import React from 'react';
interface Props {;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-4c90
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State> {
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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: Sentry.captureException(error, { extra: errorInfo });
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try again or return to the homepage.
              </p>
=======
export default class ErrorBoundary extends Component<Props , State" ></Props> {
  public state: State = {
    hasError: false,
  }


  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }"
"'"
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {"''
    console.error('ErrorBoundary caught an error: ', error, errorInfo);"
    "'"
    // Send error to monitoring service"''"
    if (typeof window !== 'undefined') {"'"
      // Example: Send to Sentry, LogRocket, etc."''
      console.log('Error reported to monitoring service')}
  }

  public render() {"
    if (this.state.hasError) {""
      return this.props.fallback || ("""
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>"""
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6"></div>"""
            <div className="flex items-center mb-4"></div>"""
              <div className="flex-shrink-0"></div>"""
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>"""
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" /" ></path>
                </svg>"
""
              </div>"""
              <div className="ml-3"></div>"""
                <h3 className="text-lg font-medium text-gray-900"></h3>
                  Something went wrong
                </h3>"
              </div>""
            </div>"""
            <div className="mt-2"></div>""'"
              <p className="text-sm text-gray-500"></p>"''
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.'"
              </p>""
            </div>"""
            <div className="mt-4"></div>""
              <button onClick={() =" ></button> window.location.reload()}"""
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Refresh Page
              </button>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-4c90
            </div>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
<<<<<<< HEAD
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
=======
      )}"
""
    return this.props.children}",;""
}";"'"
"'"'"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-4c90
