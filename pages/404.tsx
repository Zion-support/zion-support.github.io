import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance." />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}