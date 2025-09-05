import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import MainLayout from '../src/components/layout/MainLayout'

export default function Custom404() {
  return(<MainLayout
      title="404 - Page Not Found | Zion Tech Group"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
      noindex={true}
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20 }}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Page Not Found;
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.;
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover: bg-blue-700 transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Search className="w-5 h-5 mr-2"  />
                  Browse Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="mt-12 text-sm text-gray-500">
              <p>If you believe this is an error, please contact our support team.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>)}