import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'default', 
  color = 'primary', 
  customColor, 
  className = '', 
  text, 
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    custom: '',
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const colorClass = color === 'custom' ? '' : colorClasses[color] || colorClasses.primary;
  const finalColor = customColor || colorClass;

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
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className={`${sizeClass} border-2 border-gray-300 border-t-transparent rounded-full ${finalColor}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </motion.div>
      {showText && text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;