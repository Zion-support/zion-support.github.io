}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState></ErrorBoundaryProps,>
                {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
import React, {Component, ErrorInfo, ReactNode}from 'react';
import {AlertTriangle, RefreshCw, Home, Phone}}from 'lucide-react';

interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
  error?: Error;
  errorInfo?: ErrorInfo;}class ErrorBoundary extends Component<Props, State></Props,>
                {constructor(props: Props) {,
    super(props);
    this.state = { hasError: false ,}}
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State></Props,>
                {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
      error,
      errorInfo;
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
    }

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleRefresh = () =>
                {
    window.location.reload();
  };
  static getDerivedStateFromError(error: Error): State {,}
    return {hasError: true, error}}}

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    // Log error for monitoring in production;
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service;
      // Example: errorReportingService.captureException(error, { extra: errorInfo ,)})
    }
    this.setState({error, errorInfo)})
  }

  handleReload = () =>
                {
    window.location.reload()
  }

  handleGoHome = () =>
                {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4"></h1>
              Oops! Something went wrong
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        </Props><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>
          </div><div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center"></div>
            </div><div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              </div><AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong;</h1>
                </h1>
            
            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
                {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left"></details>
                </details><summary className="text-sm text-gray-400 cursor-pointer mb-2"></summary>
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto"></pre>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto" /></pre>
                {this.state.error.toString()},
    {this.state.errorInfo?.componentStack}
                </pre>
                </details>
            )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              </div><$2 />
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                </button><RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
                </button>
              
              <$2 />
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                </button><Home className="w-4 h-4" />
                <span>Go Home</span>
                </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20"></div>
              </div><p className="text-sm text-gray-400 mb-3"></p>
                Still having trouble? Contact our support team:
              </p>
              <$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                </a><Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
                </div>
            <div className="space-y-4"></div>
              <$2 />
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Refresh Page
              </button>
              <$2 />
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="block w-full text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Try Again
              </button>
                </div>
                {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left"></details>
                <summary className="text-gray-400 cursor-pointer hover:text-cyan-400"></summary>
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-500 bg-gray-800 p-4 rounded overflow-auto"></pre>
                {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
                </details>
            )}
                </div>
                </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary</$1>
                </p>
