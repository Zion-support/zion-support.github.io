import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechBanner2042: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white rounded-2xl p-8 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 ULTIMATE BREAKTHROUGH • JANUARY 2042
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Tech Revolution 2042
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-2xl">
              Experience the most revolutionary technological advances with conscious AI, quantum consciousness, and interdimensional computing
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/pages/UltimateTechRevolution2042"
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Explore Revolution →
              </a>
              <button className="border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500/20 transition-colors">
                Watch Demo
              </button>
          </div>
          <div className="flex-shrink-0 ml-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-1">∞</div>
                <div className="text-sm opacity-75">Infinite Processing</div>
              </div>
                <div className="text-3xl font-bold text-pink-300 mb-1">🧠</div>
                <div className="text-sm opacity-75">Conscious AI</div>
                <div className="text-3xl font-bold text-cyan-300 mb-1">⚛️</div>
                <div className="text-sm opacity-75">Quantum Mind</div>
                <div className="text-3xl font-bold text-emerald-300 mb-1">🌌</div>
                <div className="text-sm opacity-75">Dimensions</div>
        </div>
      </div>
    </motion.div>
  );
};
export default UltimateTechBanner2042;
