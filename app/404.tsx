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
const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>

        <meta name="robots" content="noindex, nofollow" />

        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div>404
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
              <AlertTriangle> </AlertTriangle>div>
          </div>

          {/* Error Message */}
          <h1>Page Not Found
          </h1>

          <p>Oops! The page you're looking for seems to have vanished into the
            digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2>What were you looking for?
              </h2>
            </div>
            <p>Try searching for one of these popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link>{item.name}
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
              <Home>Go Home
            </Home>Link>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowLeft>Go Back
            </ArrowLeft>button>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
            <h3>Still can't find what you need?
            </h3>
            <p>Our support team is here to help you navigate our services and
              find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw>Contact Support
              </RefreshCw>Link>
              <a>Send Email
              </a>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 p-4 bg-slate-800/30 rounded-lg">
            <p className="text-sm text-gray-400">
              <span>Fun Fact:</span> Even our AI gets
              confused sometimes. That's why we have humans to help when things
              go wrong! 🤖
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
