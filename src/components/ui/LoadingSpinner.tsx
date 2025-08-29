import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'progress';
  text?: string;
  progress?: number;
  showProgress?: boolean;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'spinner',
  text,
  progress,
  showProgress = false,
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-gray-200 border-t-blue-500 rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  const renderDots = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'} bg-blue-500 rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
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

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-blue-500 rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );

  const renderSkeleton = () => (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center space-x-4">
        <div className={`${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : size === 'lg' ? 'w-16 h-16' : 'w-20 h-20'} bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse`} />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '60%' }} />
          <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '40%' }} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '80%' }} />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '70%' }} />
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-gray-600 dark:text-slate-400 ${textSizes[size]}`}>
          {text || 'Loading...'}
        </span>
        {showProgress && progress !== undefined && (
          <span className={`text-blue-500 font-medium ${textSizes[size]}`}>
            {Math.round(progress)}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: progress ? `${progress}%` : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      case 'progress':
        return renderProgress();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      {renderContent()}
      {text && variant !== 'progress' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-gray-600 dark:text-slate-400 text-center ${textSizes[size]}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Specialized loading components for common use cases
export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <LoadingSpinner size="xl" variant="spinner" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white mt-6"
        >
          Loading Zion Tech Group
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 mt-2"
        >
          Preparing your experience...
        </motion.p>
      </div>
    </div>
  );
}

export function SectionLoadingSpinner({ text = 'Loading section...' }: { text?: string }) {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LoadingSpinner size="lg" text={text} />
      </div>
    </div>
  );
}

export function InlineLoadingSpinner({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <LoadingSpinner size="sm" />
      <span className="text-sm text-gray-600 dark:text-slate-400">{text}</span>
    </div>
  );
}

export function ButtonLoadingSpinner({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <LoadingSpinner size="sm" variant="dots" />
      <span>{text}</span>
    </div>
  );
}

export function SkeletonLoader({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"
          style={{ width: `${80 - i * 10}%` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-2" style={{ width: '60%' }} />
          <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '40%' }} />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '80%' }} />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" style={{ width: '70%' }} />
      </div>
    </div>
  );
}