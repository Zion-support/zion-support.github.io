'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
   fallback?: ReactNode;
   onError?: (error: Error, errorInfo: ErrorInfo) => void;
   showDetails?: boolean}
interface State {
  hasError: boolean;
   error: Error | null
   errorInfo: ErrorInfo | null}
class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false, error: null,
      errorInfo: null}
  }
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true, error,
      errorInfo: null}
  }
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error, errorInfo})
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary: ', error, errorInfo)}
    // Send error to monitoring service;
    this.logErrorToService(error, errorInfo);
    // Call custom error handler;
    this.props.onError?.(error, errorInfo)}
  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service;
    // like Sentry, LogRocket, or Bugsnag;
    try {
      // Example: Send to analytics;
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: error.message, fatal: false})}
      // Example: Send to custom endpoint;
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          error: {
            message: error.message, stack: error.stack,
            name: error.name},
          errorInfo: {
            componentStack: errorInfo.componentStack},
          timestamp: new Date().toISOString(), userAgent: navigator.userAgent,
          url: window.location.href})}).catch(() => {
        // Silently fail if error reporting fails})} catch (reportingError) {
      // Silently fail if error reporting fails}
  }
;
  private handleRetry = () => {
    this.setState({
      hasError: false, error: null,
      errorInfo: null})}
;
  private handleReload = () => {
    window.location.reload()}
;
  override render() {
    if (this.state.hasError) {
      // Custom fallback UI;
      if (this.props.fallback) {
        return this.props.fallback}
      // Default error UI
      return(
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>
            <div className='flex items-center mb-4'>
              <div className='flex-shrink-0'>
                <svg
                  className='h-8 w-8 text-red-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'/>
                </svg>
              </div>
              <div className='ml-3'>
                <h3 className='text-lg font-medium text-gray-900'>
                  Something went wrong
                </h3>
                <p className='text-sm text-gray-500'>
                  We&apos;re sorry, but something unexpected happened.'
                </p>
              </div>
            </div>
            {this.props.showDetails && this.state.error && (
              <div className='mb-4 p-3 bg-red-50 border border-red-200 rounded-md'>
                <h4 className='text-sm font-medium text-red-800 mb-2'>
                  Error Details: </h4>
                <p className='text-sm text-red-700 font-mono'>
                  {this.state.error.message}
                </p>
                {this.state.error.stack && (
                  <details className='mt-2'>
                    <summary className='text-sm text-red-600 cursor-pointer'>
                      Stack Trace
                    </summary>
                    <pre className='text-xs text-red-600 mt-2 whitespace-pre-wrap overflow-auto max-h-32'>
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}
            <div className='flex space-x-3'>
              <button
                onClick={this.handleRetry}
                className='flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className='flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
                Reload Page
              </button>
            </div>
            <div className='mt-4 text-center'>
              <p className='text-xs text-gray-500'>
                If this problem persists, please{' '}
                <a
                  href='/contact'
                  className='text-blue-600 hover: text-blue-500'>
                  contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    return this.props.children}
}
export default EnhancedErrorBoundary