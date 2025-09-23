import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Cloud, Atom } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum';
  text?: string;
  showProgress?: boolean;
  progress?: number;
}

const iconVariants = {
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
    transition: {
      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
      scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function EnhancedLoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  text = 'Loading...',
  showProgress = false,
  progress = 0
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const getIcon = () => {
    switch (variant) {
      case 'ai':
        return <Brain className="w-full h-full text-cyan-400" />;
      case 'quantum':
        return <Atom className="w-full h-full text-purple-400" />;
      case 'futuristic':
        return <Zap className="w-full h-full text-blue-400" />;
      default:
        return <Loader2 className="w-full h-full text-gray-400" />;
    }
  };

  const getBackground = () => {
    switch (variant) {
      case 'ai':
        return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30';
      case 'quantum':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30';
      case 'futuristic':
        return 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-400/30';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      {/* Main Spinner */}
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} ${getBackground()} border-2 rounded-full flex items-center justify-center`}
          variants={pulseVariants}
          animate="animate"
        >
          <motion.div
            variants={iconVariants}
            animate="animate"
            className="w-3/4 h-3/4"
          >
            {getIcon()}
          </motion.div>
        </motion.div>
        
        {/* Orbiting particles for futuristic variants */}
        {variant !== 'default' && (
          <>
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </>
        )}
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${textSizes[size]} text-gray-600 dark:text-gray-300 font-medium text-center`}
      >
        {text}
      </motion.p>

      {/* Progress Bar */}
      {showProgress && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 0.8 }}
          className="w-48 bg-gray-200 rounded-full h-2 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      )}

      {/* Loading Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex space-x-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Export as ZionLoadingSpinner for backward compatibility
export const ZionLoadingSpinner = EnhancedLoadingSpinner;