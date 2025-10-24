'use client'
;
import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, RefreshCw    } from 'lucide-react'
;
export default function NotFound() {
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <span className="text-8xl font-bold text-white mb-4">404</span>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.;"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/""
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
          >"
            <Home className="w-5 h-5 mr-2"  />;
            Go Home;
          </Link>
          <button);"
            onClick={() => window.history.back()}"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
          >"
            <ArrowLeft className="w-5 h-5 mr-2"  />;
            Go Back;
          </button>
          <button;"
            onClick={() => window.location.reload()}"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
          >"
            <RefreshCw className="w-5 h-5 mr-2"  />;
            Refresh;
          </button>
        </div>
        <Link
          href="/""
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Go back home;
        </Link>
      </div>
    </div>
  )}";'"