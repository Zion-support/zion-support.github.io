'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface LoadingStatesProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'spinner',
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderLoadingAnimation = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-cyan-400 rounded-full`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        );
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-slate-700 rounded animate-pulse w-1/2"></div>
          </div>
        );
      default:
        return <LoadingSpinner size={size} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoadingAnimation()}
      {text && (
        <motion.p
          className={`text-gray-300 ${textSizeClasses[size]} font-medium`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingStates;