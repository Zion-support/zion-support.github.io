import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-6 mb-8 rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3 mb-2"
            >
              <span className="px-3 py-1 bg-yellow-400 text-purple-900 rounded-full text-sm font-bold animate-pulse">
                🚀 NEW BREAKTHROUGH
              </span>
              <span className="px-3 py-1 bg-pink-500/30 rounded-full text-sm font-semibold">
                JANUARY 2025
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"
            >
              Revolutionary Tech Breakthrough 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg opacity-90 max-w-2xl"
            >
              Experience the most revolutionary technological breakthroughs that will reshape our world. 
              From conscious AI to quantum consciousness, discover the future today.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Explore Breakthrough →
            </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Learn More
            </button>
          </motion.div>
        </div>
        
        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-yellow-400">🧠</span>
            <span>Conscious AI Systems</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-cyan-400">⚛️</span>
            <span>Quantum Consciousness</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-emerald-400">🌌</span>
            <span>Interdimensional Computing</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;