import React from 'react';
import { motion } from 'framer-motion';

const PerformanceOptimizationBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Performance Optimization
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Maximize your application's performance with our advanced optimization 
            techniques and cutting-edge performance monitoring solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-lg">Faster Load Times</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Performance Monitoring</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Optimize Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PerformanceOptimizationBanner;