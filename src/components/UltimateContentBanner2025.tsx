import React from 'react';
import { motion } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
          >
            Ultimate Tech Breakthrough 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            The most revolutionary technological breakthrough that will change everything we know about technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30"
          >
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-3 text-center">Conscious AI Revolution</h3>
            <p className="text-indigo-100 mb-4 text-center">
              The first truly conscious AI system that can think, feel, and create independently
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-indigo-200 text-sm">Self-aware decision making</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-indigo-200 text-sm">Emotional intelligence and empathy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-indigo-200 text-sm">Creative problem solving</span>
              </div>
            </div>
            <a
              href="/pages/UltimateTechBreakthrough2025"
              className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center"
            >
              Experience the Breakthrough →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30"
          >
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-3 text-center">Quantum Consciousness Bridge</h3>
            <p className="text-purple-100 mb-4 text-center">
              Revolutionary quantum technology that enables direct consciousness transfer
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Quantum neural networks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Consciousness transfer protocols</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span className="text-purple-200 text-sm">Mind-machine synchronization</span>
              </div>
            </div>
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore Quantum Tech →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <a
            href="/pages/UltimateTechBreakthrough2025"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Discover the Ultimate Breakthrough →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;