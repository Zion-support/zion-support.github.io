<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
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
          className="text-9xl font-bold text-blue-600 mb-8"
        >
          404
        </motion.div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p>Need help? Contact us at:</p>
          <p>Email: kleber@ziontechgroup.com</p>
          <p>Phone: +1 302 464 0950</p>
        </div>
      </motion.div>
    </div>
=======
import React from 'react';
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
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </button>
>>>>>>> pr-11914
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
    </MainLayout>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
=======
    </Layout>
>>>>>>> pr-11914
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Search,
  AlertTriangle
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What can you do now?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Go Home</h4>
                    <p className="text-gray-600 mb-4">Return to our homepage and start fresh.</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                      Go Home
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ArrowLeft className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Go Back</h4>
                    <p className="text-gray-600 mb-4">Return to the previous page you were on.</p>
                    <button 
                      onClick={() => window.history.back()}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                    >
                      Go Back
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Search</h4>
                    <p className="text-gray-600 mb-4">Search for what you're looking for.</p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300">
                      Search
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Still can't find what you're looking for?
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Contact our support team and we'll help you find what you need.
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    Contact Support
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
>>>>>>> pr-11913
  );
}