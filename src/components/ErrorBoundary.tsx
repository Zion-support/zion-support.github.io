import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

interface ErrorInfo {
  componentStack: string
}

interface FallbackProps {
  error: Error
  resetErrorBoundary: () => void
  errorInfo?: ErrorInfo
}

function Fallback({ error, resetErrorBoundary, errorInfo }: FallbackProps) {
  const handleReportError = () => {
    // In a real app, you would send this to an error reporting service
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }
    
    console.error('Error Report:', errorReport)
    
    // You could send this to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorReport })
    
    alert('Error has been reported. Thank you for helping us improve!')
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl border border-red-500/20 rounded-xl shadow-2xl shadow-red-500/10 p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-slate-700/50 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details (Development):</h3>
            <div className="text-xs text-gray-300 font-mono">
              <div className="mb-2">
                <strong>Message:</strong> {error.message}
              </div>
              {error.stack && (
                <div>
                  <strong>Stack:</strong>
                  <pre className="mt-1 text-gray-400 overflow-x-auto">
                    {error.stack.split('\n').slice(0, 5).join('\n')}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Try Again
          </button>
          
          <button
            onClick={handleReload}
            className="w-full px-4 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Reload Page
          </button>
          
          <button
            onClick={handleReportError}
            className="w-full px-4 py-3 bg-red-600/20 text-red-400 font-medium rounded-lg hover:bg-red-600/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Report Error
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <p className="text-xs text-gray-400">
            If this problem persists, please contact our support team at{' '}
            <a href="mailto:support@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              support@ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  onReset?: () => void
  resetKeys?: any[]
}

export function ErrorBoundary({ 
  children, 
  onError, 
  onReset, 
  resetKeys 
}: ErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      console.error('Error:', error)
      console.error('Error Info:', errorInfo)
      console.groupEnd()
    }

    // Call custom error handler if provided
    onError?.(error, errorInfo)

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo })
  }

  const handleReset = () => {
    // Call custom reset handler if provided
    onReset?.()
  }

  return (
    <ReactErrorBoundary
      FallbackComponent={Fallback}
      onError={handleError}
      onReset={handleReset}
      resetKeys={resetKeys}
    >
      {children}
    </ReactErrorBoundary>
  )
}
