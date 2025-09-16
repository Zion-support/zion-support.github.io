import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAdBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH 2026</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto text-center">
          Experience the future of technology with our groundbreaking new content featuring AI Revolutionary Breakthrough, 
          Quantum Reality, Neural Interface Evolution, and Revolutionary Technology Showcase
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/AIRevolutionaryBreakthrough2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            🧠 AI Revolutionary Breakthrough →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/QuantumReality2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            ⚛️ Quantum Reality 2026 →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/NeuralInterfaceEvolution2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            🧬 Neural Interface Evolution →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/SyntheticIntelligence2026"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30 text-center"
          >
            🤖 Synthetic Intelligence →
          </motion.a>
        </div>
        <div className="mt-6 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/UltimateTechBreakthrough2026"
            className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30 mr-4"
          >
            🌟 NEW: Ultimate Tech Breakthrough 2026 →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/pages/InterdimensionalTechRevolution2026"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30"
          >
            🌌 NEW: Interdimensional Tech 2026 →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryAdBanner;