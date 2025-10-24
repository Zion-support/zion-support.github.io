'use client'

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

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
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even our AI can't predict everything!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 transition-all duration-300 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
          {/* Search Section */}
          <div className="mt-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our site..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          {/* Popular Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/services" className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
              <h3 className="text-white font-semibold mb-2">Our Services</h3>
              <p className="text-gray-400 text-sm">AI, 5G, and IT solutions</p>
            </Link>
            <Link href="/about" className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
              <h3 className="text-white font-semibold mb-2">About Us</h3>
              <p className="text-gray-400 text-sm">Learn more about our company</p>
            </Link>
            <Link href="/contact" className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors">
              <h3 className="text-white font-semibold mb-2">Contact</h3>
              <p className="text-gray-400 text-sm">Get in touch with us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;