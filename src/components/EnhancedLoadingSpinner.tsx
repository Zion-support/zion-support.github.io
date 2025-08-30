import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  className?: string;
}

export function EnhancedLoadingSpinner({
  size = 'md',
  color = 'primary',
  customColor,
  text,
  showProgress = false,
  progress = 0,
  variant = 'spinner',
  className = ''
}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-blue-500',
    white: 'text-white',
    custom: customColor ? '' : 'text-cyan-500'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]}`}
                style={customColor ? { backgroundColor: customColor } : {}}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
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
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
            style={customColor ? { backgroundColor: customColor } : {}}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 ${colorClasses[color]}`}
                style={customColor ? { backgroundColor: customColor } : {}}
                animate={{
                  height: ['20px', '40px', '20px']
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      default: // spinner
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
            style={customColor ? { borderColor: customColor, borderTopColor: 'transparent' } : {}}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Loading Animation */}
      <div className="relative">
        {renderSpinner()}
        
        {/* Progress Ring (if showing progress) */}
        {showProgress && (
          <svg
            className={`absolute inset-0 ${sizeClasses[size]} -rotate-90`}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-gray-700"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className={colorClasses[color]}
              style={customColor ? { stroke: customColor } : {}}
              initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
        )}
      </div>

      {/* Loading Text */}
      {text && (
        <motion.p
          className={`${textSizes[size]} text-gray-400 text-center max-w-xs`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}

      {/* Progress Text */}
      {showProgress && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className={`${textSizes[size]} font-medium ${colorClasses[color]}`}>
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </div>
  );
}

// Skeleton loading component for content
export function LoadingSkeleton({
  type = 'card',
  className = ''
}: {
  type?: 'card' | 'text' | 'avatar' | 'button';
  className?: string;
}) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="animate-pulse">
            <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>
        );
      
      case 'text':
        return (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>
        );
      
      case 'avatar':
        return (
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
          </div>
        );
      
      case 'button':
        return (
          <div className="animate-pulse">
            <div className="h-10 w-24 bg-gray-700 rounded-lg"></div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {renderSkeleton()}
    </div>
  );
}
