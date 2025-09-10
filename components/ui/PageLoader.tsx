import React from 'react';
import { motion } from 'framer-motion';
import { Star, Cloud, Shield, Zap } from 'lucide-react';

interface PageLoaderProps {
  message?: string;
  variant?: 'default' | 'tech' | 'minimal';
  className?: string;
}

export default function PageLoader({ 
  message = 'Loading...', 
  variant = 'default',
  className = '' 
}: PageLoaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: 0, scale: 0.8 },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const getLoaderContent = () => {
    switch (variant) {
      case 'tech':
        return (
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              {[Star, Cloud, Shield, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants}
                  className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-blue-400" />
                </motion.div>
              ))}
            </div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
              Zion Tech Group
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 mb-6">
              Loading amazing technology...
            </motion.p>
            <motion.div variants={itemVariants} className="w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        );
      
      case 'minimal':
        return (
          <div className="text-center">
            <motion.div
              variants={iconVariants}
              className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
            />
            <motion.p variants={itemVariants} className="text-gray-400">
              {message}
            </motion.p>
          </div>
        );
      
      default:
        return (
          <div className="text-center">
            <motion.div
              variants={iconVariants}
              className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Star className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
              {message}
            </motion.h2>
            <motion.div variants={itemVariants} className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full"
      >
        {getLoaderContent()}
      </motion.div>
    </div>
  );
}