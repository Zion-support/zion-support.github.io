import React from 'react';
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
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}