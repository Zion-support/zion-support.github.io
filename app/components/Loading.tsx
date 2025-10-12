import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  color = 'cyan',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'cyan':
        return 'border-cyan-400';
      case 'purple':
        return 'border-purple-400';
      case 'pink':
        return 'border-pink-400';
      case 'blue':
        return 'border-blue-400';
      case 'green':
        return 'border-green-400';
      default:
        return 'border-cyan-400';
    }
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className={`${getSizeClasses()} ${getColorClasses()} border-2 border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner ring */}
        <motion.div
          className={`absolute inset-1 ${getColorClasses()} border-2 border-b-transparent rounded-full`}
          animate={{ rotate: -360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className={`absolute top-1/2 left-1/2 w-1 h-1 ${getColorClasses().replace('border-', 'bg-').replace('-400', '-500')} rounded-full transform -translate-x-1/2 -translate-y-1/2`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {text && (
        <motion.p
          className="text-gray-600 font-medium text-sm"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loading;