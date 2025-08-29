import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  customColor,
  text,
  className = '' 
}: LoadingSpinnerProps) {
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
    custom: customColor ? `border-t-transparent` : 'border-cyan-500 border-t-transparent'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-4 rounded-full ${colorClasses[color]}`}
        style={customColor ? { borderColor: customColor, borderTopColor: 'transparent' } : {}}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-3 text-slate-500 dark:text-slate-400 ${textSizes[size]} text-center`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Enhanced loading spinner with dots
export function LoadingDots({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: Omit<LoadingSpinnerProps, 'customColor' | 'text'>) {
  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  const colorVariants = {
    primary: 'bg-cyan-500',
    secondary: 'bg-blue-500',
    white: 'bg-white'
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSizes[size]} ${colorVariants[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );
}

// Pulse loading spinner
export function LoadingPulse({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: Omit<LoadingSpinnerProps, 'customColor' | 'text'>) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorVariants = {
    primary: 'bg-cyan-500',
    secondary: 'bg-blue-500',
    white: 'bg-white'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorVariants[color]} rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Skeleton loading component
export function LoadingSkeleton({ 
  className = '',
  lines = 3,
  height = 'h-4'
}: { 
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`${height} bg-slate-200 dark:bg-slate-700 rounded animate-pulse`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}
