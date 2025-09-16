import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            ⚡ REVOLUTIONARY CONTENT 2025 • BREAKTHROUGH TECHNOLOGY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
          >
            ⚡ Revolutionary Tech Breakthrough 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Witness the most groundbreaking technological breakthrough that will redefine what's possible in 2025. 
            Experience neural interfaces, quantum wave computing, and predictive reality engines.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🧬</div>
            <h3 className="text-sm font-bold mb-2 text-center">Neural Interface</h3>
            <p className="text-indigo-100 text-xs text-center mb-3">
              Direct brain-computer interface
            </p>
            <div className="text-indigo-300 text-xs text-center">
              99.9% accuracy
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🌊</div>
            <h3 className="text-sm font-bold mb-2 text-center">Quantum Waves</h3>
            <p className="text-purple-100 text-xs text-center mb-3">
              Light-speed processing
            </p>
            <div className="text-purple-300 text-xs text-center">
              Zero latency
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🔮</div>
            <h3 className="text-sm font-bold mb-2 text-center">Predictive Reality</h3>
            <p className="text-pink-100 text-xs text-center mb-3">
              Future event prediction
            </p>
            <div className="text-pink-300 text-xs text-center">
              99.9% accuracy
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2 text-center">🌌</div>
            <h3 className="text-sm font-bold mb-2 text-center">Dimensional Tech</h3>
            <p className="text-cyan-100 text-xs text-center mb-3">
              Multi-dimensional computing
            </p>
            <div className="text-cyan-300 text-xs text-center">
              Infinite power
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              ⚡ Experience Breakthrough
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ultimate Revolution
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;