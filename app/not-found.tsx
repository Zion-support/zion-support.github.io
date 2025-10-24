'use client';
import Link from 'next/link';
import { Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <span className="text-8xl font-bold text-white mb-4">404</span>
        <h1 className="text-2xl font-semibold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
          >
            <Home className="mr-2 w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}