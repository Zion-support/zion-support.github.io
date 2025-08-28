import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'cyan';
  text?: string;
  showText?: boolean;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  text = 'Loading...',
  showText = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-cyan-500',
    secondary: 'border-blue-500',
    white: 'border-white',
    cyan: 'border-cyan-400'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        {/* Main spinning ring */}
        <motion.div
          className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner pulsing circle */}
        <motion.div
          className={`absolute inset-1 ${colorClasses[color]} bg-current rounded-full opacity-20`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Outer glow effect */}
        <motion.div
          className={`absolute -inset-2 ${colorClasses[color]} rounded-full opacity-10 blur-sm`}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      {/* Loading text */}
      {showText && (
        <motion.p
          className={`mt-3 text-gray-400 ${textSizes[size]} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
      
      {/* Animated dots */}
      {showText && (
        <div className="flex space-x-1 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Full Screen Loading Spinner
export const FullScreenLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'className'>> = (props) => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
    <LoadingSpinner {...props} />
  </div>
);

// Inline Loading Spinner
export const InlineLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'className'> & { inline?: boolean }> = ({ inline = true, ...props }) => (
  <div className={`${inline ? 'inline-flex' : 'flex'} items-center justify-center`}>
    <LoadingSpinner {...props} />
  </div>
);

// Skeleton Loading Component
export const SkeletonLoader: React.FC<{ className?: string; lines?: number }> = ({ className = '', lines = 3 }) => (
  <div className={`animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-slate-700 rounded mb-3 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);
