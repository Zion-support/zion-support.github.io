import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Home, ArrowLeft, Search, HelpCircle, Globe, Brain } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found - Zion Tech Group"
      description="The page you're looking for doesn't exist. Find what you need with our helpful navigation and search options."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                404
              </div>
              <div className="absolute -top-4 -right-4">
                <Brain className="w-16 h-16 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Get Help
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/services"
                className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300">Services</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Brain className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300">About</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Search className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300">Contact</span>
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300">Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}