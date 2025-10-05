import React from 'react';
import { motion } from 'framer-motion';

interface December2025RevolutionaryBreakthroughContentBannerProps {
  className?: string;
  onClose?: () => void;
}

const December2025RevolutionaryBreakthroughContentBanner: React.FC<December2025RevolutionaryBreakthroughContentBannerProps> = ({
  className = '',
  onClose
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 px-4 relative ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
          >
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-sm tracking-wider uppercase">
              December 2025 Revolutionary Breakthrough
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
          >
            Revolutionary AI Breakthrough
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future of artificial intelligence with our groundbreaking December 2025 release. 
            Transform your business with unprecedented capabilities and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Discover the Breakthrough
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">10x Performance</h3>
              <p className="text-sm opacity-90">
                Revolutionary processing speed that changes everything
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Advanced Intelligence</h3>
              <p className="text-sm opacity-90">
                Next-generation AI capabilities beyond imagination
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold mb-2">Future Ready</h3>
              <p className="text-sm opacity-90">
                Built for the challenges of tomorrow, today
              </p>
            </div>
          </motion.div>

          {onClose && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold transition-colors duration-300"
              aria-label="Close banner"
            >
              ×
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default December2025RevolutionaryBreakthroughContentBanner;