import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Brain, Atom, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ai' | 'quantum' | 'futuristic';
  text?: string;
  showProgress?: boolean;
  progress?: number;
}

const spinVariants = {
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
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`${sizeClasses[size]} ${getBackground()} rounded-full border-2 flex items-center justify-center`}
        variants={spinVariants}
        animate="animate"
      >
        {getIcon()}
      </motion.div>
      
      {text && (
        <motion.div
          className={`${textSizes[size]} text-gray-600 font-medium`}
          variants={pulseVariants}
          animate="animate"
        >
          {text}
        </motion.div>
      )}
      
      {showProgress && (
        <div className="w-full max-w-xs">
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-sm text-gray-600 mt-2 text-center">
            {progress}%
          </div>
        </div>
      )}
    </div>
  );
}

// Export as ZionLoadingSpinner for backward compatibility
export const ZionLoadingSpinner = EnhancedLoadingSpinner;

export default EnhancedLoadingSpinner;
