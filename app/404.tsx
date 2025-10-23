"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Advanced AI and IT solutions for modern businesses" />
        <meta property="og:image" content="/og-image.jpg" />
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
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the
            digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">Try searching for what you need</h2>
            </div>
            <p className="text-gray-300 text-sm">
              Use our search feature to find the information you're looking for.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}