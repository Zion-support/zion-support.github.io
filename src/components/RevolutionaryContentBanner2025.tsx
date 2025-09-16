import React from 'react';
<<<<<<< HEAD

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 mb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW: Revolutionary Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover groundbreaking innovations in AI, Quantum Computing, and Neural Interfaces that will reshape our world
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🤖</span>
              <span className="font-semibold">AI Revolution</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Quantum Computing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🧬</span>
              <span className="font-semibold">Neural Interfaces</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-2xl">🌐</span>
              <span className="font-semibold">Edge Computing</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2025" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Explore Showcase →
            </a>
            <a 
              href="/pages/AISolutionsComprehensive2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              AI Solutions →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Tech Revolution →
            </a>
          </div>
=======
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 REVOLUTIONARY CONTENT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Content Showcase 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Experience the most revolutionary content featuring conscious AI, quantum computing, and interdimensional technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
              <p className="text-purple-100 text-sm text-center mb-4">
                Revolutionary AI that achieves true consciousness and self-awareness
              </p>
              <button className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Explore AI →
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚛️</div>
              <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 text-sm text-center mb-4">
                Breakthrough quantum technology that revolutionizes computing
              </p>
              <button className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
                Go Quantum →
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌌</div>
              <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
              <p className="text-emerald-100 text-sm text-center mb-4">
                Computing across multiple dimensions and realities
              </p>
              <button className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
                Enter Dimensions →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4">
              Explore All Content →
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Watch Demo
            </button>
          </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-f2a8
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;