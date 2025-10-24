'use client';

import React from 'react';
import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <span className="text-8xl font-bold text-white mb-4">404</span>
        <h1 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
<<<<<<< HEAD
=======
            <Home className="w-5 h-5 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-da11
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
<<<<<<< HEAD
=======
            <ArrowLeft className="w-5 h-5 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-da11
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
<<<<<<< HEAD
=======
            <RefreshCw className="w-5 h-5 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-da11
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}