import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
  showText?: boolean;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '',
  showText = false,
  text = 'Loading...',
  variant = 'spinner'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-cyan-400 border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={cn(
                  'rounded-full bg-current',
                  size === 'sm' ? 'w-1.5 h-1.5' : 
                  size === 'md' ? 'w-2 h-2' : 
                  size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
                )}
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
            className={cn(
              'rounded-full bg-current',
              sizeClasses[size]
            )}
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
                className={cn(
                  'bg-current rounded-sm',
                  size === 'sm' ? 'w-1 h-3' : 
                  size === 'md' ? 'w-1.5 h-6' : 
                  size === 'lg' ? 'w-2 h-8' : 'w-3 h-12'
                )}
                animate={{
                  height: ['100%', '60%', '100%']
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <div className={cn(
            'animate-spin rounded-full border-2',
            sizeClasses[size],
            colorClasses[color]
          )} />
        );
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {renderSpinner()}
      {showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-sm text-gray-500"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Enhanced skeleton loader with better animations
export function SkeletonLoader({ 
  className = '', 
  lines = 3, 
  height = 'h-4',
  variant = 'default',
  animated = true
}: { 
  className?: string; 
  lines?: number; 
  height?: string;
  variant?: 'default' | 'card' | 'avatar' | 'text';
  animated?: boolean;
}) {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="h-4 bg-white/10 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse" />
          </div>
        );
      
      case 'avatar':
        return (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-white/10 rounded animate-pulse" />
              <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2">
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white/10 rounded animate-pulse',
                  height,
                  index === lines - 1 ? 'w-2/3' : 'w-full'
                )}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <div className="space-y-3">
            {Array.from({ length: lines }).map((_, index) => (
              <motion.div
                key={index}
                initial={animated ? { opacity: 0, x: -20 } : false}
                animate={animated ? { opacity: 1, x: 0 } : false}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={cn(
                  'bg-white/10 rounded',
                  height,
                  animated ? 'animate-pulse' : ''
                )}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {renderSkeleton()}
    </div>
  );
}

// Enhanced button loading state
export function ButtonLoader({
  size = 'sm',
  className,
  text = 'Loading...'
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}) {
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white" variant="dots" />
      <span className="ml-2">{text}</span>
    </div>
  );
}

// Enhanced page loading overlay with progress
export function PageLoaderOverlay({ 
  text = 'Loading page...',
  showSpinner = true,
  progress,
  showProgress = false
}: { 
  text?: string; 
  showSpinner?: boolean;
  progress?: number;
  showProgress?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center max-w-md mx-auto px-6">
        {showSpinner && <LoadingSpinner size="xl" color="primary" variant="pulse" />}
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-4 text-lg text-gray-300 font-medium"
        >
          {text}
        </motion.p>

        {showProgress && progress !== undefined && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-6 w-full"
          >
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}%</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Enhanced content loading placeholder with better variants
export function ContentPlaceholder({ 
  className = '',
  variant = 'default',
  count = 6,
  animated = true
}: { 
  className?: string; 
  variant?: 'default' | 'card' | 'list' | 'grid' | 'table';
  count?: number;
  animated?: boolean;
}) {
  const variants = {
    default: 'space-y-4',
    card: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-3',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    table: 'space-y-2'
  };

  const renderPlaceholders = () => {
    switch (variant) {
      case 'card':
        return Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, y: 20 } : false}
            animate={animated ? { opacity: 1, y: 0 } : false}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <div className="h-4 bg-white/10 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse" />
          </motion.div>
        ));
      
      case 'list':
        return Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, x: -20 } : false}
            animate={animated ? { opacity: 1, x: 0 } : false}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-4 h-4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-3 bg-white/10 rounded flex-1 animate-pulse" />
          </motion.div>
        ));
      
      case 'grid':
        return Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, scale: 0.9 } : false}
            animate={animated ? { opacity: 1, scale: 1 } : false}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
          </motion.div>
        ));
      
      case 'table':
        return Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, y: 10 } : false}
            animate={animated ? { opacity: 1, y: 0 } : false}
            transition={{ delay: index * 0.1 }}
            className="flex space-x-4 py-2 border-b border-white/10"
          >
            <div className="h-4 bg-white/10 rounded w-1/4 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-1/3 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-1/4 animate-pulse" />
            <div className="h-4 bg-white/10 rounded w-1/6 animate-pulse" />
          </motion.div>
        ));
      
      default:
        return Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, y: 10 } : false}
            animate={animated ? { opacity: 1, y: 0 } : false}
            transition={{ delay: index * 0.1 }}
            className="h-4 bg-white/10 rounded animate-pulse"
          />
        ));
    }
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {renderPlaceholders()}
    </div>
  );
}

// New: Progress bar component
export function ProgressBar({
  progress,
  className = '',
  showLabel = true,
  size = 'md'
}: {
  progress: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className={className}>
      <div className={`w-full bg-gray-700 rounded-full ${sizeClasses[size]}`}>
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-gray-400 mt-1 text-center">
          {Math.round(progress)}%
        </p>
      )}
    </div>
  );
}

// New: Shimmer effect component
export function ShimmerEffect({
  className = '',
  width = 'w-full',
  height = 'h-4'
}: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <div className={`${width} ${height} bg-white/10 rounded animate-pulse ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );
}