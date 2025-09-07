import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or explore our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AlertCircle className="w-16 h-16 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white text-sm font-bold">!</span>
                </motion.div>
              </div>
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              404
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-white mb-4"
              variants={fadeInUp}
            >
              Page Not Found
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-md mx-auto"
              variants={fadeInUp}
            >
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/">
                <motion.button
                  className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </motion.button>
              </Link>

              <motion.button
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl max-w-md mx-auto"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-blue-300" />
                <h3 className="text-lg font-semibold text-white">Looking for something specific?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Try searching for our services or browse our main sections:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Mobile Apps', 'AI Integration', 'Cloud Services'].map((service, index) => (
                  <motion.span
                    key={service}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Help Text */}
            <motion.p
              className="text-sm text-gray-400 mt-8"
              variants={fadeInUp}
            >
              If you believe this is an error, please{' '}
              <a 
                href="mailto:support@ziontechgroup.com" 
                className="text-blue-300 hover:text-blue-200 underline"
              >
                contact our support team
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;