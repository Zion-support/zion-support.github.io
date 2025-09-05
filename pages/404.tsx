import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Phone, Mail } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
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
              className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8"
            >
              404
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            {/* Contact Info */}
            <div className="bg-blue-900 bg-opacity-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Need Help?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              
              <Link 
                href="/help"
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Help Center
              </Link>
            </div>

            {/* Popular Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Services
                </Link>
                <Link href="/ai-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  AI Services
                </Link>
                <Link href="/it-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  IT Services
                </Link>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Micro SaaS
                </Link>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}