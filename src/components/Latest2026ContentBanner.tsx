import React from 'react';
import { motion } from 'framer-motion';

const Latest2026ContentBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Latest 2026 Content
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Stay ahead with the latest AI innovations and breakthrough technologies 
            that are shaping the future of business and technology in 2026.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">AI 2026</div>
              <div className="text-sm">Revolutionary Breakthroughs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">Quantum</div>
              <div className="text-sm">Neural Optimization</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">Meta</div>
              <div className="text-sm">Cognitive Reasoning</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">Auto</div>
              <div className="text-sm">Agent Factories</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Subscribe to Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Latest2026ContentBanner;