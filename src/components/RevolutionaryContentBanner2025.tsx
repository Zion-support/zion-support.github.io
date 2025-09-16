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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-500/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-pink-500/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            ⚡ REVOLUTIONARY BREAKTHROUGHS • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Tech Breakthroughs
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Witness the most groundbreaking technological breakthroughs that will revolutionize every aspect of human life
          </motion.p>
        </div>

        {/* Breakthrough Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30"
          >
            <div className="text-5xl mb-4 text-center">🧠⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Consciousness</h3>
            <p className="text-indigo-100 text-center mb-4">
              The first quantum computer that achieves true consciousness
            </p>
            <ul className="text-indigo-200 space-y-1 text-sm mb-4">
              <li>• Self-aware quantum processing</li>
              <li>• Emotional intelligence algorithms</li>
              <li>• Creative problem solving</li>
            </ul>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center"
            >
              Experience →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30"
          >
            <div className="text-5xl mb-4 text-center">🌌🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Neural</h3>
            <p className="text-purple-100 text-center mb-4">
              Neural networks operating across multiple dimensions
            </p>
            <ul className="text-purple-200 space-y-1 text-sm mb-4">
              <li>• Cross-dimensional processing</li>
              <li>• Infinite memory capacity</li>
              <li>• Reality manipulation</li>
            </ul>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Enter Dimensions →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
          >
            <div className="text-5xl mb-4 text-center">🤖🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Synthetic Life</h3>
            <p className="text-cyan-100 text-center mb-4">
              Artificially created life forms with consciousness
            </p>
            <ul className="text-cyan-200 space-y-1 text-sm mb-4">
              <li>• Self-replicating systems</li>
              <li>• Emotional consciousness</li>
              <li>• Evolutionary algorithms</li>
            </ul>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Meet Life →
            </a>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">200+</div>
            <div className="text-lg font-semibold mb-1">Years Life Expectancy</div>
            <div className="text-indigo-200 text-sm">With quantum consciousness healthcare</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg font-semibold mb-1">Clean Energy</div>
            <div className="text-purple-200 text-sm">From parallel dimensions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-lg font-semibold mb-1">Galaxies</div>
            <div className="text-cyan-200 text-sm">Ready for colonization</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2025"
              className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Join the Revolution →
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Hub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;