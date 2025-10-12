import React, { Link } from 'react'

import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
<<<<<<< HEAD
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
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-centerp-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2 xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-centerjustify-center">
            <span className="text-4-xl"  >404</span>
          </div>
        </div>
        <h1 className="text-2 xl font-bold text-white mb-4"  />Page Not Found
        </h1>
        <p className="text-gray-300 mb-6" />
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-rowgap-3">
          <Link to="/" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lgtransition-colors" />
            <Home className="w-4 h-4-mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
          >
<<<<<<< HEAD
            <ArrowLeft className="w-4 h-4 mr-2" />
=======
            <ArrowLeft className="w-4 h-4-mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
<<<<<<< HEAD
            <RefreshCw className="w-4 h-4 mr-2" />
=======
            <RefreshCw className="w-4 h-4-mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}