import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const colorClasses = {
  primary: 'border-cyan-500 border-t-transparent',
  secondary: 'border-blue-500 border-t-transparent',
  white: 'border-white border-t-transparent'
};

export const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  showText = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading content">
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      {showText && (
        <motion.p
          className="mt-3 text-sm text-gray-400 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
      <span className="sr-only">{text}</span>
    </div>
  );
};

// Skeleton loading component
export const SkeletonLoader: React.FC<{ className?: string; lines?: number }> = ({
  className = '',
  lines = 3
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-700 rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

// Page loading component
export const PageLoader: React.FC<{ message?: string }> = ({ message = 'Loading page...' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-slate-dark">
      <div className="text-center">
        <EnhancedLoadingSpinner size="xl" color="primary" text={message} />
        <motion.div
          className="mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm">Please wait while we prepare your experience</p>
        </motion.div>
      </div>
    </div>
  );
};

// Inline loading component
export const InlineLoader: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({
  size = 'sm',
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <EnhancedLoadingSpinner size={size} showText={false} />
    </div>
  );
};

export default EnhancedLoadingSpinner;