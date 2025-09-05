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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Animation */}
            <motion.div
              className="text-9xl font-bold text-blue-600 mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              404
            </motion.div>
            
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
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
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
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
            <p className="text-blue-100 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </button>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
    </MainLayout>
=======
    </>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  );
}