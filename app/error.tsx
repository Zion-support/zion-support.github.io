'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-300 mb-6">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-gray-900 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
            <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-32">
              {error.message}
            </pre>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          If this problem persists, please contact our support team.
        </div>
      </div>
    </div>
  );
}