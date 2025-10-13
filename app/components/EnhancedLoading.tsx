import React from 'react';
import { motion } from 'framer-motion';

const EnhancedLoading: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Icon */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
            <motion.div
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
              variants={spinnerVariants}
              animate="animate"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Loading Zion Tech Group
        </motion.h2>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Message */}
        <motion.p
          className="text-gray-300 text-sm"
          variants={itemVariants}
        >
          Preparing your experience...
        </motion.p>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center space-x-1 mt-4"
          variants={itemVariants}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedLoading;