import React from 'react';
import { motion } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            ⚡ NEW CONTENT • JANUARY 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Revolutionary Tech Showcase 2025
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Interactive showcase of cutting-edge technologies that will define the future
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">🎮</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interactive Demos</h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Experience our revolutionary technologies through hands-on interactive demonstrations
            </p>
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Try Interactive Demos →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Real-time Processing</h3>
            <p className="text-blue-100 mb-4 text-center text-sm">
              Witness the power of our revolutionary real-time processing capabilities
            </p>
            <a
              href="/pages/NextGenTechRevolution2025"
              className="block w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
            >
              See Real-time Power →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Multi-dimensional Tech</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Computing that transcends our current dimensional limitations
            </p>
            <a
              href="/pages/UltimateTechBreakthrough2025"
              className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center"
            >
              Explore Dimensions →
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
            href="/pages/RevolutionaryTechShowcase2025"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Start Your Interactive Journey →
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;