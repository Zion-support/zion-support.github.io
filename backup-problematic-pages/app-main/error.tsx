'use client'

import React from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-400 mb-4">Oops!</h1>
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="text-lg text-gray-300 mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 mr-4"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Error ID: {error.digest || 'Unknown'}</p>
        </div>
      </div>
    </div>
  )
}