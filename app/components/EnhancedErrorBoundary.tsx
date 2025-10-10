'use client';
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
<<<<<<< HEAD
  children: ReactNode
  fallback?: ReactNode
=======
  children: ReactNode;  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo  hasError: boolean;
  error?: Error;    this.setState({
      error,
      errorInfo
    })
    console.error('Error caught by boundary:', error, errorInfo)
  }
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
  handleReload = () => {
    window.location.reload()}
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log error to analytics or error reporting service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Reload Page
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3">
                Still having issues? Contact our support team:
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@ziontechgroup.com
              </a>
            </div>            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Refresh Page
            </button>