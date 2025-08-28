import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-cyan-500 border-t-transparent',
    secondary: 'border-blue-500 border-t-transparent',
    white: 'border-white border-t-transparent',
    custom: customColor ? `border-${customColor} border-t-transparent` : 'border-cyan-500 border-t-transparent'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 rounded-full animate-spin ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-3 text-gray-600 dark:text-gray-400 ${textSizeClasses[size]}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Optimized variants for different use cases
export const LoadingSpinnerVariants = {
  // Simple spinner for buttons
  Button: ({ className = '' }: { className?: string }) => (
    <div className={`inline-flex items-center ${className}`}>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      <span>Loading...</span>
    </div>
  ),

  // Full page loader
  Page: ({ text = 'Loading page...' }: { text?: string }) => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="text-center">
        <LoadingSpinner size="xl" color="white" text={text} showText />
      </div>
    </div>
  ),

  // Inline loader for content
  Inline: ({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl', className?: string }) => (
    <LoadingSpinner size={size} color="primary" className={className} />
  ),

  // Skeleton loader for content
  Skeleton: ({ lines = 3, className = '' }: { lines?: number, className?: string }) => (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
};

export default LoadingSpinner;