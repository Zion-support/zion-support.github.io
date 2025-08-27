import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'text-cyan-400',
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 border-t-current rounded-full ${color}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      
      {text && (
        <motion.p
          className={`mt-4 text-gray-400 ${textSizes[size]} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Enhanced loading spinner with dots
export function LoadingDots({ 
  size = 'md',
  color = 'text-cyan-400',
  text,
  className = ''
}: LoadingSpinnerProps) {
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${dotSizes[size]} ${color} rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {text && (
        <motion.p
          className={`mt-4 text-gray-400 ${textSizes[size]} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Skeleton loading component
export function LoadingSkeleton({ 
  lines = 3,
  className = ''
}: { 
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-gray-300 rounded animate-pulse"
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

// Full page loading component
export function FullPageLoader({ 
  text = "Loading Zion Tech Group...",
  className = ''
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center ${className}`}>
      <div className="text-center text-white">
        <motion.div
          className="w-32 h-32 border-4 border-gray-700 border-t-cyan-400 rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.h2
          className="text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Preparing your digital transformation journey...
        </motion.p>
      </div>
    </div>
  );
}