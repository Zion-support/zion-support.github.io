<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function Custom404() {
  return (
    <MainLayout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      noindex={true}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

export default function Custom404() {
  return (
<<<<<<< HEAD
    <Layout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      keywords="404, page not found, error"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mb-8"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
            </motion.div>
<<<<<<< HEAD
            
<<<<<<< HEAD
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5" />
=======
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Page Not Found
=======

            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
              404
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              Page Not Found
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or doesn't exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Search className="w-5 h-5" />
                Explore Services
              </Link>
            </div>
            
            {/* Help Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 mb-4">
                If you believe this is an error, please contact our support team.
              </p>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact Support →
              </Link>
=======
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
=======
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            </div>

            <div className="mt-12">
              <p className="text-gray-500 mb-4">Or try searching for what you need:</p>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </MainLayout>
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-1436
=======
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found" description="The page you're looking for doesn't exist">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
=======
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
    </Layout>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}