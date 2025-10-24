"use client";
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
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Still can't find what you're looking for?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;