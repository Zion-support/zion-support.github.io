import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE: Revolutionary Technology 2025
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Most Advanced Technology Ever Created
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the convergence of AI consciousness, quantum computing, neural interfaces, 
            and interdimensional technology in our ultimate technology showcase.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl mb-3 text-center">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-center">AI Consciousness</h3>
            <p className="text-blue-100 text-xs text-center mb-3">
              Self-aware AI with emotional intelligence
            </p>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="block w-full bg-white text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors font-semibold text-center text-xs"
            >
              Learn More →
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl mb-3 text-center">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-center">Quantum AI</h3>
            <p className="text-purple-100 text-xs text-center mb-3">
              Quantum-powered artificial intelligence
            </p>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="block w-full bg-white text-purple-600 py-2 rounded hover:bg-purple-50 transition-colors font-semibold text-center text-xs"
            >
              Explore →
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl mb-3 text-center">🧬</div>
            <h3 className="text-lg font-bold mb-2 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 text-xs text-center mb-3">
              Direct brain-computer interfaces
            </p>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="block w-full bg-white text-emerald-600 py-2 rounded hover:bg-emerald-50 transition-colors font-semibold text-center text-xs"
            >
              Discover →
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Reality Engine</h3>
            <p className="text-orange-100 text-xs text-center mb-3">
              Technology that creates new realities
            </p>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="block w-full bg-white text-orange-600 py-2 rounded hover:bg-orange-50 transition-colors font-semibold text-center text-xs"
            >
              Experience →
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-8"
        >
          <a 
            href="/pages/UltimateTechRevolution2025" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Explore All Revolutionary Content →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;