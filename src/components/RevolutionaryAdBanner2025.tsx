import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-bounce"
          >
            🔥 LIMITED TIME OFFER • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Tech Access
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Get exclusive access to the most revolutionary technologies before they go public. 
            Transform your business and life with cutting-edge innovations.
          </motion.p>
        </div>

        {/* Offer Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30"
          >
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Instant Access</h3>
            <p className="text-orange-100 text-center mb-4">
              Get immediate access to all revolutionary technologies
            </p>
            <ul className="text-orange-200 space-y-1 text-sm mb-4">
              <li>• 500+ Technologies</li>
              <li>• Real-time Updates</li>
              <li>• Priority Support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30"
          >
            <div className="text-5xl mb-4 text-center">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-center">Exclusive Content</h3>
            <p className="text-red-100 text-center mb-4">
              Access to exclusive content not available anywhere else
            </p>
            <ul className="text-red-200 space-y-1 text-sm mb-4">
              <li>• Beta Technologies</li>
              <li>• Expert Insights</li>
              <li>• Case Studies</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Future Ready</h3>
            <p className="text-pink-100 text-center mb-4">
              Stay ahead with the latest breakthrough innovations
            </p>
            <ul className="text-pink-200 space-y-1 text-sm mb-4">
              <li>• Early Adoption</li>
              <li>• Competitive Edge</li>
              <li>• Future Proofing</li>
            </ul>
          </motion.div>
        </div>

        {/* Pricing and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="mb-6">
            <div className="text-4xl font-bold text-orange-400 mb-2">FREE</div>
            <div className="text-xl text-orange-200 mb-4">Limited Time Offer</div>
            <div className="text-sm text-orange-300 line-through">Regular Price: $999/month</div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse"
            >
              Get Free Access Now →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-900 transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
          
          <div className="text-sm text-orange-200">
            ⏰ Offer expires in 24 hours • No credit card required
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAdBanner2025;