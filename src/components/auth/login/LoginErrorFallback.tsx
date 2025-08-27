import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface LoginErrorFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export default function LoginErrorFallback({ error, resetErrorBoundary }: LoginErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-red-500 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We encountered an error while loading the login page. Please try again.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error Details
              </h3>
              <div className="mt-2 text-sm text-red-700">
                {error?.message || 'An unexpected error occurred'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Go to Homepage
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            If the problem persists, please contact our support team
          </p>
          <a
            href="/contact"
            className="text-xs text-indigo-600 hover:text-indigo-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}