'use client'
import React from 'react'

interface ErrorBoundaryConfig {
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  showDetails?: boolean
  enableReporting?: boolean
  customMessage?: string
}

const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  showDetails: process.env.NODE_ENV === 'development',
  enableReporting: true,
  customMessage: 'Something went wrong. Please try again later.'
}

const ErrorBoundaryFallback: React.FC<{ error: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {defaultErrorBoundaryConfig.customMessage}
          </p>
          {defaultErrorBoundaryConfig.showDetails && (
            <details className="text-left mb-4">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                Error Details
              </summary>
              <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
          <div className="flex space-x-3">
            <button
              onClick={resetError}
              className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const reportError = (error: Error, errorInfo: React.ErrorInfo) => {
  if (!defaultErrorBoundaryConfig.enableReporting) return

  // In a real application, you would send this to an error reporting service
  console.error('Error Boundary caught an error:', error, errorInfo)
  
  // Example: Send to error reporting service
  // errorReportingService.captureException(error, {
  //   extra: errorInfo,
  //   tags: { component: 'ErrorBoundary' }
  // })
}

export { defaultErrorBoundaryConfig, ErrorBoundaryFallback, reportError }
export type { ErrorBoundaryConfig }