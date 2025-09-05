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
  );
}