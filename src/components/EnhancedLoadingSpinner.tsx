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

      className={`${sizeClasses[size]} ${colorClasses[color]} `}

>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
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

        className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-centerz-50"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
      >
        <div className="text-center">
          {spinner}
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}

              className="mt-4 text-gray-600 font-medium"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
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
          className="text-gray-600 font-medium"
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

    <div className={`animate-pulse `}>

>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`h-4bg-gray-200rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }` }
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="text-center max-w-md mx-autopx-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="w-20 h-20bg-gradient-to-r from-blue-600to-purple-600rounded-full flex items-center justify-center mx-automb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="w-8 h-8 border-2border-white border-t-transparentrounded-full"
          />
        </motion.div>

        <motion.h2initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}

          className="text-2 xl font-bold text-gray-900 mb-4"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
        >
          {message}
        </motion.h2>

        {progress !== undefined && (

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
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

              className="w-2 h-2 bg-blue-600 rounded-full"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
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

    <div className={`bg-white rounded-lg shadow-md p-6animate-pulse `}>

      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 roundedw-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 roundedw-full" />
        <div className="h-4 bg-gray-200 roundedw-5/6" />
        <div className="h-4 bg-gray-200 roundedw-4/6" />
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
      </div>
    </div>
  );
};

export default LoadingSpinner;