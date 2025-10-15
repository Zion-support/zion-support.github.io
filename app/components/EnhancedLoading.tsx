import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingProps> = ({
  size = 'md',
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-cyan-500 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {text && (
        <motion.p
          className={`mt-4 text-gray-300 ${textSizeClasses[size]} font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {spinner}
        </motion.div>
      </div>
    );
  }

  return spinner;
};

export const LoadingPage: React.FC = () => (
  <LoadingSpinner
    size="xl"
    text="Loading..."
    fullScreen
  />
);

export const LoadingCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-slate-800/50 rounded-xl p-6 border border-white/10 ${className}`}>
    <LoadingSpinner size="md" text="Loading content..." />
  </div>
);

export const LoadingButton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`inline-flex items-center justify-center px-4 py-2 ${className}`}>
    <LoadingSpinner size="sm" />
  </div>
);

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-slate-700 rounded-lg h-4 mb-2"></div>
    <div className="bg-slate-700 rounded-lg h-4 mb-2 w-3/4"></div>
    <div className="bg-slate-700 rounded-lg h-4 w-1/2"></div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
    <div className="animate-pulse">
      <div className="bg-slate-700 rounded-lg h-48 mb-4"></div>
      <div className="space-y-3">
        <div className="bg-slate-700 rounded-lg h-4"></div>
        <div className="bg-slate-700 rounded-lg h-4 w-3/4"></div>
        <div className="bg-slate-700 rounded-lg h-4 w-1/2"></div>
      </div>
    </div>
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`animate-pulse space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`bg-slate-700 rounded-lg h-4 ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export default LoadingSpinner;