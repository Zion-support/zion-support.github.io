import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, Star } from 'lucide-react';

const NewYear2025PromotionBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-4 left-1/3 w-16 h-16 bg-pink-400 rounded-full opacity-25 animate-ping"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-5 h-5" />
          NEW YEAR 2025 SPECIAL
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Transform Your Business with
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Start 2025 with cutting-edge AI, quantum computing, and autonomous solutions. 
          Get 50% off your first 3 months on any premium service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Get Started Today
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              View All Services
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center items-center gap-8 mt-8 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>50% Off First 3 Months</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewYear2025PromotionBanner;