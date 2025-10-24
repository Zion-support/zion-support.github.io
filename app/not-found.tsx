<<<<<<< HEAD
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-4xl">404</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <a
            href="javascript:history.back()"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 font-medium rounded-lg transition-colors"
          >
            Go Back
          </a>
          <a
            href="javascript:location.reload()"
            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 font-medium rounded-lg transition-colors"
          >
            Refresh
          </a>
=======
'use client';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5 mr-2" />
            Contact Support
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please contact our support team.</p>
>>>>>>> 1c3bcb5bf864
        </div>
      </div>
    </div>
  );
}