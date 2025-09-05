import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
<<<<<<< HEAD
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Home, 
  Search, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative">
                <div className="text-9xl md:text-[12rem] font-bold text-white/10 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AlertCircle className="h-16 w-16 md:h-24 md:w-24 text-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, let's get you back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Go Back
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Popular Pages</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link 
                  href="/services" 
                  className="flex items-center justify-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-gray-300">Our Services</span>
                </Link>
                <Link 
                  href="/about" 
                  className="flex items-center justify-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-gray-300">About Us</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Search className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-gray-300">Contact Us</span>
                </Link>
              </div>
            </motion.div>

            {/* Help Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8"
            >
              <p className="text-gray-400 text-sm">
                If you believe this is an error, please{' '}
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
                  contact our support team
                </Link>
                {' '}and we'll help you find what you're looking for.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
>>>>>>> 957bdd045b2f6b572bc67ae198e0b79701b01c6c
=======
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
  );
}