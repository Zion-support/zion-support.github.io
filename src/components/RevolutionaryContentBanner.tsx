import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 rounded-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse"
          >
            🌟 REVOLUTIONARY NEW CONTENT • JANUARY 2026
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            🚀 Revolutionary Technology Showcase
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Experience the most groundbreaking technological innovations that are reshaping our world. 
            Discover AI Consciousness, Quantum Neural Networks, Neural Reality Engines, and more!
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
          >
            {/* AI Consciousness */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-center text-purple-100">AI Consciousness</h3>
              <p className="text-purple-200 text-sm text-center mb-4">
                Self-aware AI systems with emotional intelligence
              </p>
              <a href="/pages/UltimateTechBreakthrough2026" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
                Explore →
              </a>
            </div>

            {/* Quantum Neural Networks */}
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-center text-cyan-100">Quantum Neural</h3>
              <p className="text-cyan-200 text-sm text-center mb-4">
                Quantum computing meets neural networks
              </p>
              <a href="/pages/RevolutionaryTechBreakthrough2026" className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm">
                Discover →
              </a>
            </div>

            {/* Neural Reality Engine */}
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🌐</div>
              <h3 className="text-lg font-bold mb-2 text-center text-emerald-100">Neural Reality</h3>
              <p className="text-emerald-200 text-sm text-center mb-4">
                Direct brain-computer interfaces
              </p>
              <a href="/pages/NextGenTechRevolution2026" className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm">
                Experience →
              </a>
            </div>

            {/* Interdimensional Computing */}
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 text-center">🌌</div>
              <h3 className="text-lg font-bold mb-2 text-center text-violet-100">Interdimensional</h3>
              <p className="text-violet-200 text-sm text-center mb-4">
                Computing across multiple dimensions
              </p>
              <a href="/pages/RevolutionaryTechBlog2026" className="block w-full bg-white text-violet-600 py-2 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center text-sm">
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="/pages/UltimateTechBreakthrough2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🚀 Explore All Breakthroughs
            </a>
            <a
              href="/pages/RevolutionaryTechBlog2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              📖 Read Our Blog
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-purple-200">Computing Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-sm text-cyan-200">Reality Fidelity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-sm text-emerald-200">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">∞</div>
              <div className="text-sm text-violet-200">Dimensions</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner;