'use client'
import React from 'react'

interface ErrorHandlerProps {
  error?: Error
  resetError?: () => void
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-xl text-gray-300 mb-8">
          {error?.message || 'An unexpected error occurred'}
        </p>
        {resetError && (
          <button
            onClick={resetError}
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorHandler