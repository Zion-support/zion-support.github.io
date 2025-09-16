import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              ⚡ REVOLUTIONARY CONTENT 2025 • BREAKTHROUGH TECHNOLOGY
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Revolutionary Tech Breakthrough
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl opacity-90 mb-8"
            >
              Witness the most groundbreaking technological breakthroughs that will revolutionize every industry
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <a
                href="/pages/RevolutionaryTechBreakthrough2025"
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform text-center"
              >
                🚀 Explore Breakthrough →
              </a>
              <div className="flex justify-center space-x-4 text-sm opacity-80">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Interactive Demo</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span>Real-time Experience</span>
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-3 text-center">🧬</div>
              <h3 className="text-lg font-bold mb-2 text-center">Neural Interface</h3>
              <p className="text-sm opacity-80 text-center">Direct brain-computer interfaces</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3 text-center">🔮</div>
              <h3 className="text-lg font-bold mb-2 text-center">Holographic Reality</h3>
              <p className="text-sm opacity-80 text-center">True 3D holographic displays</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3 text-center">🌊</div>
              <h3 className="text-lg font-bold mb-2 text-center">Quantum Internet</h3>
              <p className="text-sm opacity-80 text-center">Ultra-secure quantum communication</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3 text-center">🤖</div>
              <h3 className="text-lg font-bold mb-2 text-center">Conscious AI</h3>
              <p className="text-sm opacity-80 text-center">Self-aware AI systems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;