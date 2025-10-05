import React from 'react';
import { motion } from 'framer-motion';

const December2025RevolutionaryContentShowcase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            December 2025 Revolutionary Content
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the future of AI-powered solutions with our revolutionary
            content showcase featuring unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl">$∞ Unlimited</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default December2025RevolutionaryContentShowcase;