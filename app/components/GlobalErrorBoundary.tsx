'use client';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { Home, RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 text-red-400">⚠️</div>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">
          Something went wrong
        </h1>
        
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-400 cursor-pointer mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetErrorBoundary}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

export default function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Global Error Boundary caught an error:', error, errorInfo);
        // You can add error reporting service here
      }}
    >
      {children}
    </ErrorBoundary>
  );
}