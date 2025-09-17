import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 REVOLUTIONARY CONTENT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Technology Content 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover the most revolutionary technological content featuring AI consciousness, quantum computing, and interdimensional technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness</h3>
              <p className="text-purple-100 mb-4 text-center text-sm">
                Explore the latest breakthroughs in artificial consciousness and self-aware AI systems
              </p>
              <ul className="text-purple-200 space-y-1 mb-4 text-xs">
                <li>• Self-Learning AI</li>
                <li>• Emotional Intelligence</li>
                <li>• Autonomous Decision Making</li>
              </ul>
              <button className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Explore AI Consciousness →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 mb-4 text-center text-sm">
                Experience the future of computing with quantum technology that solves impossible problems
              </p>
              <ul className="text-cyan-200 space-y-1 mb-4 text-xs">
                <li>• Quantum Supremacy</li>
                <li>• Quantum Cryptography</li>
                <li>• Molecular Simulation</li>
              </ul>
              <button className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Go Quantum →
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
              <p className="text-emerald-100 mb-4 text-center text-sm">
                Discover computing that operates across multiple dimensions and realities
              </p>
              <ul className="text-emerald-200 space-y-1 mb-4 text-xs">
                <li>• Multi-Dimensional Processing</li>
                <li>• Reality Simulation</li>
                <li>• Infinite Scalability</li>
              </ul>
              <button className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
                Explore Dimensions →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
              View All Revolutionary Content →
            </button>
            <button className="border-2 border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-lg">
              Download Whitepaper
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;