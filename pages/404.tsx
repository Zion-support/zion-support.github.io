<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      noIndex={true}
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Animation */}
            <motion.div
              className="text-8xl md:text-9xl font-bold text-blue-600 mb-8"
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

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
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
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Search Suggestion */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Looking for something specific?
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
=======
export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 opacity-80">Page not found</p>
    </div>
>>>>>>> origin/feat/home-redesign
  );
}