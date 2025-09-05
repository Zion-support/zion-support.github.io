import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const variantClasses = {
  default: 'border-gray-300 border-t-blue-600',
  primary: 'border-blue-200 border-t-blue-600',
  secondary: 'border-gray-200 border-t-gray-600',
  success: 'border-green-200 border-t-green-600',
  warning: 'border-yellow-200 border-t-yellow-600',
  error: 'border-red-200 border-t-red-600'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  variant = 'default',
  fullScreen = false,
  className = ''
}) => {
  const spinner = (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? 'min-h-screen' : ''} ${className}`}>
      <motion.div
        className={`animate-spin rounded-full border-2 ${sizeClasses[size]} ${variantClasses[variant]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <motion.p
          className="mt-2 text-sm text-gray-600 dark:text-gray-400"
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

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;