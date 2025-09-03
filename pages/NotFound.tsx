import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our helpful navigation and search options." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              404
            </h1>
          </div>
          
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-6">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-gray-400">
              Don't worry, we'll help you find what you're looking for.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover: bg-gray-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/services"
                className="flex items-center justify-center px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
              >
                <Search className="w-4 h-4 mr-2" />
                Services
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )}