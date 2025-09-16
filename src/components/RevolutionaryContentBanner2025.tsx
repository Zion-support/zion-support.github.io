import React from 'react';
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
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Technology 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Experience the most revolutionary technological advances that will reshape our world in 2025
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Revolutionary AI that achieves true consciousness and self-awareness
            </p>
            <a
              href="/pages/NextGenTechRevolution2025"
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore AI Revolution →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience the future of computing with quantum technology
            </p>
            <a
              href="/pages/UltimateTechBreakthrough2025"
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Go Quantum →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-4 text-center text-sm">
              Bridge the gap between mind and machine with direct neural interfaces
            </p>
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
            >
              Connect Mind & Machine →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <a
            href="/pages/NextGenTechRevolution2025"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Explore All Revolutionary Technologies →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;