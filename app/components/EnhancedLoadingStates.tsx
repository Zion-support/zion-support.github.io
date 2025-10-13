import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    accent: 'text-pink-500'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </motion.div>
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
  progress = 0
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <LoadingSpinner size="lg" />
        
        <motion.h2
          className="text-2xl font-semibold text-white mt-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message}
          <span className="text-cyan-400">{dots}</span>
        </motion.h2>

        {showProgress && (
          <div className="w-64 mx-auto">
            <div className="bg-gray-700 rounded-full h-2 mb-2">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-gray-300 text-sm">{progress}% complete</p>
          </div>
        )}

        <motion.p
          className="text-gray-400 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Please wait while we prepare your experience...
        </motion.p>
      </motion.div>
    </div>
  );
};

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-700 rounded h-4 mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface LoadingCardProps {
  showImage?: boolean;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({
  showImage = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
    >
      {showImage && (
        <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 animate-pulse" />
      )}
      
      <div className="space-y-3">
        <div className="h-6 bg-gray-700 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <div className="h-8 bg-gray-700 rounded w-20 animate-pulse" />
        <div className="h-8 bg-gray-700 rounded w-16 animate-pulse" />
      </div>
    </motion.div>
  );
};

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  onClose?: () => void;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = 'Loading...',
  onClose
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-800 rounded-lg p-8 text-center max-w-sm mx-4"
          >
            <LoadingSpinner size="lg" />
            <h3 className="text-white text-lg font-semibold mt-4 mb-2">
              {message}
            </h3>
            <p className="text-gray-400 text-sm">
              This may take a few moments...
            </p>
            {onClose && (
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-colors"
              >
                Cancel
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ProgressiveLoadingProps {
  steps: string[];
  currentStep: number;
  onComplete?: () => void;
}

export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({
  steps,
  currentStep,
  onComplete
}) => {
  const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    if (currentStep >= steps.length - 1 && onComplete) {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentStep, steps.length, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-4"
      >
        <LoadingSpinner size="lg" />
        
        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
          Setting up your experience...
        </h2>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-3 ${
                index <= currentStep ? 'text-cyan-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index < currentStep
                    ? 'bg-cyan-600 text-white'
                    : index === currentStep
                    ? 'bg-cyan-600 text-white animate-pulse'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className="text-sm">{step}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <div className="bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-gray-300 text-sm mt-2">
            {Math.round(progress)}% complete
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;