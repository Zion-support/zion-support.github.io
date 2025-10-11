<<<<<<< HEAD
'use client';
import React, {Component, ErrorInfo, ReactNode}from 'react';
import {AlertTriangle, RefreshCw, Home, Phone}}from 'lucide-react';

interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
  error?: Error;
  errorInfo?: ErrorInfo;}class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {,
    super(props);
    this.state = { hasError: false ,}}
=======
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

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
>>>>>>> origin/main

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

<<<<<<< HEAD
  handleReload = () => {window.location.reload();}handleGoHome = () => {window.location.href = '/';}render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;}return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">)</div>
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
=======
  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        </Props><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          </div><div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            </div><div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              </div><AlertTriangle className="w-8 h-8 text-red-400" />
>>>>>>> origin/main
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong;</h1>
            </h1>
            
<<<<<<< HEAD
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.</p>
=======
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
>>>>>>> origin/main
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                </details><summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
<<<<<<< HEAD
<<<<<<< HEAD
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">{this.state.error.toString()</p>}{this.state.errorInfo?.componentStack}
=======
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
=======
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto" /></pre>
>>>>>>> origin/main
                  {this.state.error.toString()},
    {this.state.errorInfo?.componentStack}
>>>>>>> origin/main
                </pre>
              </details>
            )}

<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button;
                onClick={this.handleReload}className="flex items-center justify-center space-x-2 bg-cyan-600 hover: bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><$2 />
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
>>>>>>> origin/main
              >
                </button><RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              
<<<<<<< HEAD
              <button;
                onClick={this.handleGoHome}className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover: bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200",
=======
              <$2 />
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
>>>>>>> origin/main
              >
                </button><Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
<<<<<<< HEAD
              <p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team: </p>,
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors">,
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com;
=======
              </div><p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team:
              </p>
              <$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                </a><Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
>>>>>>> origin/main
              </a>
            </div>
            <div className="space-y-4">
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
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-cyan-400">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-500 bg-gray-800 p-4 rounded overflow-auto">
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
export default ErrorBoundary</$1></p>