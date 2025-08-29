import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  className = ''
}: LoadingSpinnerProps) {
  const [dots, setDots] = useState('');
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (variant === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [variant]);

  useEffect(() => {
    if (showProgress && progress > currentProgress) {
      const timer = setTimeout(() => {
        setCurrentProgress(prev => Math.min(prev + 1, progress));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [progress, currentProgress, showProgress]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"
                style={{ height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : '32px' }}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} border-2 border-blue-500 rounded-full`}
              animate={{
                scale: [1, 1.5, 2],
                opacity: [1, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className={`${sizeClasses[size]} border-2 border-cyan-500 rounded-full absolute top-0 left-0`}
              animate={{
                scale: [1, 1.3, 1.8],
                opacity: [1, 0.7, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeOut"
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-500 rounded-full`}
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
      <AnimatePresence mode="wait">
        <motion.div
          key={variant}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {renderSpinner()}
        </motion.div>
      </AnimatePresence>

      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs"
        >
          {text}{variant === 'dots' ? dots : ''}
        </motion.p>
      )}

      {showProgress && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            {currentProgress}% Complete
          </p>
        </motion.div>
      )}
    </div>
  );
}

// Specialized loading components for different use cases
export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <LoadingSpinner
        size="xl"
        variant="ripple"
        text="Loading Zion Tech Group"
        className="text-white"
      />
    </div>
  );
}

export function SectionLoadingSpinner() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner
        size="lg"
        variant="pulse"
        text="Loading content"
      />
    </div>
  );
}

export function InlineLoadingSpinner() {
  return (
    <LoadingSpinner
      size="sm"
      variant="default"
      className="inline-flex"
    />
  );
}

export function ProgressLoadingSpinner({ progress }: { progress: number }) {
  return (
    <LoadingSpinner
      size="md"
      variant="bars"
      text="Processing request"
      showProgress={true}
      progress={progress}
    />
  );
}

// Optimized skeleton loader
export function SkeletonLoader({ 
  className = '', 
  lines = 3, 
  height = 'h-4' 
}: { 
  className?: string; 
  lines?: number; 
  height?: string; 
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`${height} bg-white/10 rounded-lg animate-pulse`}
        />
      ))}
    </div>
  );
}

// Button loading state
export function ButtonLoader({
  size = 'sm',
  className
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white" />
      <span className="ml-2">Loading...</span>
    </div>
  );
}

// Page loading overlay
export function PageLoaderOverlay({ 
  text = 'Loading page...',
  showSpinner = true 
}: { 
  text?: string; 
  showSpinner?: boolean; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {showSpinner && <LoadingSpinner size="xl" color="primary" />}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-4 text-lg text-gray-300 font-medium"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
}

// Content loading placeholder
export function ContentPlaceholder({ 
  className = '',
  variant = 'default'
}: { 
  className?: string; 
  variant?: 'default' | 'card' | 'list' | 'grid'; 
}) {
  const variants = {
    default: 'space-y-4',
    card: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-3',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {variant === 'card' ? (
        // Card placeholders
        Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <div className="h-4 bg-white/10 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'list' ? (
        // List placeholders
        Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-4 h-4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-3 bg-white/10 rounded flex-1 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'grid' ? (
        // Grid placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
          </motion.div>
        ))
      ) : (
        // Default placeholders
        Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="h-4 bg-white/10 rounded animate-pulse"
          />
        ))
      )}
    </div>
  );
}