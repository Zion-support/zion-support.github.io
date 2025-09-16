import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            📊 REVOLUTIONARY SUCCESS STORIES • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            🏆 Revolutionary Case Studies 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover how our revolutionary technologies have transformed businesses across industries. 
            Real results from real companies using cutting-edge AI and quantum computing solutions.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center"
          >
            <div className="text-3xl mb-3">🏢</div>
            <div className="text-2xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-blue-200 text-sm">Companies Transformed</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center"
          >
            <div className="text-3xl mb-3">💰</div>
            <div className="text-2xl font-bold text-green-400 mb-2">$2.5B+</div>
            <div className="text-green-200 text-sm">Total Cost Savings</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
          >
            <div className="text-3xl mb-3">📈</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">400%</div>
            <div className="text-purple-200 text-sm">Average Efficiency Gain</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center"
          >
            <div className="text-3xl mb-3">✅</div>
            <div className="text-2xl font-bold text-orange-400 mb-2">99.8%</div>
            <div className="text-orange-200 text-sm">Success Rate</div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4 mb-6">
            <a href="/pages/RevolutionaryCaseStudies2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              📊 View Case Studies →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Explore Technologies →
            </a>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Real Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Proven Success</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>Industry Leaders</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;