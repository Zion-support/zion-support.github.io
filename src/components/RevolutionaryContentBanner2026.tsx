import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">🌟</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
          <span className="text-4xl animate-pulse">🌟</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto text-center">
          Discover the most revolutionary technologies ever created: Ultimate Tech Breakthrough, 
          Interdimensional Technology, and Consciousness Computing Revolution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/UltimateTechBreakthrough2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse"
          >
            🌟 Ultimate Tech Breakthrough →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/InterdimensionalTechRevolution2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse"
          >
            🌌 Interdimensional Tech →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/ConsciousnessComputingRevolution2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold border border-white/30 text-center animate-pulse"
          >
            🧠 Consciousness Computing →
          </motion.a>
        </div>
        <div className="mt-6 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/UltimateTechBreakthrough2026"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl border-2 border-white/30"
          >
            🚀 Experience the Ultimate Revolution →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2026;