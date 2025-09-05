import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <Layout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      keywords="404, page not found, error"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
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
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or doesn't exist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}