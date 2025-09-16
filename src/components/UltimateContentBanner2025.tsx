import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Ultimate Revolutionary Content
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Experience the most comprehensive collection of revolutionary technologies, breakthrough innovations, and future-forward solutions
          </motion.p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Technology</h3>
            <p className="text-purple-100 text-center mb-4 text-sm">
              Revolutionary space exploration and colonization technologies
            </p>
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
            >
              Explore Space →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Revolution</h3>
            <p className="text-indigo-100 text-center mb-4 text-sm">
              Next-generation artificial intelligence and consciousness systems
            </p>
            <a 
              href="/pages/AIRevolution2025" 
              className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm"
            >
              Discover AI →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 text-center mb-4 text-sm">
              Breakthrough quantum computing and quantum consciousness
            </p>
            <a 
              href="/pages/QuantumComputingBreakthrough" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm"
            >
              Go Quantum →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-emerald-600/30 to-green-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 text-center mb-4 text-sm">
              Direct brain-computer interfaces and neural enhancement
            </p>
            <a 
              href="/pages/NeuralInterfaceFuture" 
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm"
            >
              Connect Mind →
            </a>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-lg font-semibold mb-1">Revolutionary Technologies</div>
            <div className="text-purple-200 text-sm">Available in our content library</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-1">Success Rate</div>
            <div className="text-blue-200 text-sm">Across all implemented solutions</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Possibilities</div>
            <div className="text-cyan-200 text-sm">For your future transformation</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechRevolution2025"
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Ultimate Content →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              View Showcase
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;