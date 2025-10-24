'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react'
const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
              404
            </div>
            <div className="absolute -top-4 -right-4">
              <AlertTriangle className="w-16 h-16 text-yellow-400 animate-bounce" />
            </div>
          </div>
          {/* Error Message */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for seems to have vanished into the digital void.
          </p>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for what you need..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
          {/* Helpful Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Contact
              </Link>
              <Link href="/support" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NotFound
