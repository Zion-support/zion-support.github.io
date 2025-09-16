import React from 'react';
import { motion } from 'framer-motion';

const UltimatePromoBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-green-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-teal-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-bounce"
          >
            🎉 EXCLUSIVE LAUNCH OFFER • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
          >
            ULTIMATE TECH REVOLUTION
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Get exclusive access to the most revolutionary technologies that will transform your business and life forever
          </motion.p>
        </div>

        {/* Offer Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Instant Access</h3>
            <p className="text-green-100 text-sm mb-4">
              Get immediate access to all revolutionary technologies
            </p>
            <div className="text-green-400 font-semibold">500+ Technologies</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center"
          >
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Priority Support</h3>
            <p className="text-emerald-100 text-sm mb-4">
              24/7 expert support from our technology specialists
            </p>
            <div className="text-emerald-400 font-semibold">24/7 Support</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 text-center"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Exclusive Content</h3>
            <p className="text-teal-100 text-sm mb-4">
              Access to beta technologies and exclusive innovations
            </p>
            <div className="text-teal-400 font-semibold">Beta Access</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center"
          >
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-3">Future Ready</h3>
            <p className="text-cyan-100 text-sm mb-4">
              Stay ahead with the latest breakthrough innovations
            </p>
            <div className="text-cyan-400 font-semibold">Future Proof</div>
          </motion.div>
        </div>

        {/* Pricing and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="mb-6">
            <div className="text-6xl font-bold text-green-400 mb-2">FREE</div>
            <div className="text-2xl text-green-200 mb-4">Limited Time Launch Offer</div>
            <div className="text-lg text-green-300 line-through mb-2">Regular Price: $2,999/month</div>
            <div className="text-sm text-green-400">Save $35,988 per year!</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-green-200 text-sm">Revolutionary Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-green-200 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-green-200 text-sm">Possibilities</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-green-600 to-teal-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl animate-pulse"
            >
              Get Free Access Now →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-900 transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
          
          <div className="text-sm text-green-200 mb-4">
            ⏰ Limited Time Offer • Only 24 hours left • No credit card required
          </div>
          
          <div className="text-xs text-green-300">
            Join 10,000+ satisfied clients who are already experiencing the future
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimatePromoBanner2025;