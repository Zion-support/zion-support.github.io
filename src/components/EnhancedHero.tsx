import React from 'react';
import { motion } from 'framer-motion';

export const EnhancedHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-blue-400/20 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Zion Tech Group
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-300 text-sm">Cutting-edge artificial intelligence for modern businesses</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Quantum Technology</h3>
            <p className="text-gray-300 text-sm">Next-generation quantum computing applications</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Innovative IT Services</h3>
            <p className="text-gray-300 text-sm">Comprehensive technology solutions and consulting</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};