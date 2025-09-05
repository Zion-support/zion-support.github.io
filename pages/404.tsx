import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
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

            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
              404
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
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
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
    </>
  );
}