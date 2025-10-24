<<<<<<< HEAD
"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
import { Search, Home, Info, Briefcase, Mail, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

const NotFound = () => {
  return (
<<<<<<< HEAD
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
            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">404</div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you&apos;re looking for seems to have vanished into the digital void. Don&apos;t worry, even our AI can&apos;t predict everything!
          </p>

          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our support team is here to help you navigate our services and find exactly what you&apos;re looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400">Fun Fact:</span> Even our AI gets
              confused sometimes. That&apos;s why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b820
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2b3c
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-cyan-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm: flex-row gap-4 justify-center mb-8'></div>
            <Link
              href='/' className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center'></Link>
              <Home className='w-5 h-5 mr-2' /></Home>
              Go Home
            </Link>
            <button
              onClick={() => window.history.back(,)}className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center'
            >
              <ArrowLeft className='w-5 h-5 mr-2' /></ArrowLeft>
              Go Back
            </button>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Our support team is here to help you navigate our services and find exactly what you're looking for.
            </p>
            <div className='flex flex-col sm: flex-row gap-3 justify-center'></div>
              <Link
                key={index}
                href={page.path}
                className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 border border-purple-500/30"
              >
                {page.name}
              </Link>
              <a
                href='mailto:support@ziontechgroup.com' className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center'></a>
                Send Email
              </a>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400">Fun Fact:</span> Even our AI gets
              confused sometimes. That's why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Still can't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 flex items-center justify-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
