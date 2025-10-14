import React, { Component, ErrorInfo, ReactNode } from 'react";
import { AlertTriangle, RefreshCw, Home } from 'lucide-react";
import { Link } from 'react-router-dom";
interface Props {children: ReactNode}

interface State {hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)";
    this.setState({
      error,
      errorInfo
    }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">"
          <div className="sm:mx-auto sm:w-full sm:max-w-md">"
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">"
              <div className="text-center">"
                <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />"
                <h1 className="mt-4 text-3xl font-bold text-gray-900">"
                  Something went wrong
                </h1>
                <p className="mt-2 text-sm text-gray-600">"
                  We're sorry, but something unexpected happened. Please try refreshing the page.'
                </p>
                
                {process.env.NODE_ENV === 'development' && this.state.error && ('
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">"
                    <h3 className="text-sm font-medium text-red-800">Error Details:</h3>"
                    <pre className="mt-2 text-xs text-red-700 overflow-auto">"
                      {this.state.error.toString()
                    </pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2 text-xs text-red-700 overflow-auto">"
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )
                  </div>
                )
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">"
                  <button
                    onClick={() => window.location.reload()
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />"
                    Refresh Page
                  </button>
                  <Link
                    to="/""
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""
                  >
                    <Home className="w-4 h-4 mr-2" />"
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    return this.props.children}
export default ErrorBoundary;