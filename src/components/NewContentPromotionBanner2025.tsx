import React from 'react';
import { motion } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 mb-8 rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-4 right-4 text-4xl animate-bounce">🚀</div>
      <div className="absolute bottom-4 left-4 text-2xl animate-pulse">⚡</div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3 mb-3"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-sm font-bold animate-pulse">
                🎉 NEW CONTENT
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                JANUARY 2025
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-cyan-300 bg-clip-text text-transparent"
            >
              Revolutionary New Content 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg opacity-90 max-w-2xl"
            >
              Discover our latest revolutionary content featuring breakthrough technologies, 
              conscious AI systems, and quantum computing innovations that will reshape the future.
            </motion.p>
            
            {/* Content Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-yellow-400">📚</span>
                <span>50+ New Articles</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-cyan-400">🎥</span>
                <span>Interactive Demos</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-emerald-400">🚀</span>
                <span>Revolutionary Tech</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
              Explore Content →
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold hover:scale-105">
              View All
            </button>
          </motion.div>
        </div>
        
        {/* Content Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">50+</div>
            <div className="text-xs opacity-80">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">25+</div>
            <div className="text-xs opacity-80">Interactive Demos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">10+</div>
            <div className="text-xs opacity-80">Revolutionary Tech</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400 mb-1">∞</div>
            <div className="text-xs opacity-80">Possibilities</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;