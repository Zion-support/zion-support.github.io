import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'border-cyan-500',
    secondary: 'border-purple-500',
    white: 'border-white',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-full h-full border-4 border-transparent border-t-current rounded-full" />
    </motion.div>
  );
};

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
  animated?: boolean;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  className = '',
  animated = true,
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
          animate={animated ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  message = 'Loading...',
  showProgress = false,
  progress = 0,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <LoadingSpinner size="xl" color="primary" />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          {message}
        </motion.h2>

        {showProgress && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  transparent?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = 'Loading...',
  transparent = false,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            transparent ? 'bg-black/50' : 'bg-slate-900/95'
          } backdrop-blur-sm`}
        >
          <div className="text-center">
            <LoadingSpinner size="lg" color="white" className="mb-4" />
            <p className="text-white text-lg">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface LoadingCardProps {
  className?: string;
  showImage?: boolean;
  showText?: boolean;
  lines?: number;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({
  className = '',
  showImage = true,
  showText = true,
  lines = 3,
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ${className}`}>
      {showImage && (
        <div className="mb-4">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        </div>
      )}
      
      {showText && (
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <LoadingSkeleton lines={lines} animated />
        </div>
      )}
    </div>
  );
};

// Components are already exported above