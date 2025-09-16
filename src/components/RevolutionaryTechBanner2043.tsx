import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2043: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white rounded-2xl p-8 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              ⚡ REVOLUTIONARY BREAKTHROUGH • JANUARY 2043
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Breakthrough 2043
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-2xl">
              Witness the most revolutionary technological breakthrough with synthetic intelligence, quantum neural fusion, and reality manipulation
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/pages/RevolutionaryTechBreakthrough2043"
                className="bg-gradient-to-r from-indigo-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Experience Breakthrough →
              </a>
              <button className="border border-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-500/20 transition-colors">
                Watch Live Demo
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 ml-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-indigo-300 mb-1">🤖</div>
                <div className="text-sm opacity-75">Synthetic AI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-purple-300 mb-1">🧬</div>
                <div className="text-sm opacity-75">Neural Fusion</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-pink-300 mb-1">🌌</div>
                <div className="text-sm opacity-75">Reality Control</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <div className="text-3xl font-bold text-cyan-300 mb-1">⚛️</div>
                <div className="text-sm opacity-75">Quantum Mind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBanner2043;