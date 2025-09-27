import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'green' | 'purple' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4h-4',
  md: 'w-8h-8',
  lg: 'w-12h-12',
  xl: 'w-16h-16'
};

const colorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  gray: 'text-gray-600'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'blue',
  text,
  fullScreen = false,
  className = ''
}) => {
  const spinner = (
    <motion.div
      className="{"`${sizeClasses[size]} ${colorClasses[color]} `}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      <svg
        className="w-fullh-full"
        fill="none"
        stroke="currentColor"
        viewBox="002424"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          strokeDasharray="60"
          strokeDashoffset="60"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0bg-white bg-opacity-90backdrop-blur-sm flex items-center justify-centerz-50"
      >
        <div className="text-center">
          {spinner}
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4text-gray-600font-medium"
            >
              {text}
            </motion.p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-centerspace-y-3">
      {spinner}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className="{"`animate-pulse `}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="{"`h-4bg-gray-200rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface PageLoaderProps {
  message?: string;
  progress?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = 'Loading...',
  progress
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50to-indigo-100"
    >
      <div className="text-center max-w-md mx-autopx-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="w-20h-20bg-gradient-to-r from-blue-600to-purple-600rounded-full flex items-center justify-center mx-automb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="w-8h-8border-2border-white border-t-transparentrounded-full"
          />
        </motion.div>

        <motion.h2initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900mb-4"
        >
          {message}
        </motion.h2>

        {progress !== undefined && (
          <div className="w-full bg-gray-200rounded-full h-2mb-4">
            <motion.div
              className="bg-gradient-to-r from-blue-600to-purple-600h-2rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-centerspace-x-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2h-2bg-blue-600rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

interface CardSkeletonProps {
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  className = ''
}) => {
  return (
    <div className="{"`bg-white rounded-lg shadow-md p-6animate-pulse `}>
      <div className="flex items-center space-x-4mb-4">
        <div className="w-12h-12bg-gray-200rounded-full" />
        <div className="flex-1">
          <div className="h-4bg-gray-200rounded w-3/4mb-2" />
          <div className="h-3bg-gray-200roundedw-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4bg-gray-200roundedw-full" />
        <div className="h-4bg-gray-200roundedw-5/6" />
        <div className="h-4bg-gray-200roundedw-4/6" />
      </div>
    </div>
  );
};

export default LoadingSpinner;