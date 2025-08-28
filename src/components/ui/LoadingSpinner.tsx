import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'themed';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

const themedIcons = {
  ai: Brain,
  security: Shield,
  cloud: Cloud,
  rocket: Rocket,
  default: Zap
};

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  className = '',
  fullScreen = false
}: LoadingSpinnerProps) {
  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-cyan-400 to-blue-500`}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 0.6,
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
                className={`w-1 ${sizeClasses[size].split(' ')[1]} bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full`}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'themed':
        const ThemedIcon = themedIcons.ai; // You can make this dynamic based on context
        return (
          <motion.div
            className={`${sizeClasses[size]} text-cyan-400`}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <ThemedIcon className="w-full h-full" />
          </motion.div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-slate-300 border-t-cyan-400 rounded-full`}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-slate-400 font-medium ${textSizes[size]}`}
        >
          {getContextIcon()}
          <span className="text-sm font-medium">{text}</span>
        </motion.div>
      )}

      {/* Progress Bar */}
      {renderProgress()}

      {/* Skeleton Loader */}
      {renderSkeleton()}

      {/* Timeout Warning */}
      {renderTimeoutWarning()}

      {/* Loading Tips */}
      <AnimatePresence>
        {showProgress && currentProgress > 0 && currentProgress < 100 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs"
          >
            <p>Please wait while we prepare your content...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
}

// Specialized loading components for common use cases
export function PageLoader({ text = "Loading page..." }: { text?: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <LoadingSpinner size="xl" variant="themed" text={text} />
    </div>
  );
}

export function SectionLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="py-16 flex items-center justify-center">
      <LoadingSpinner size="lg" variant="pulse" text={text} />
    </div>
  );
}

export function InlineLoader({ text, size = "sm" }: { text?: string; size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className="inline-flex items-center space-x-2">
      <LoadingSpinner size={size} variant="dots" />
      {text && <span className="text-slate-500 text-sm">{text}</span>}
    </div>
  );
}

export function ButtonLoader({ size = "sm" }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className="inline-flex items-center space-x-2">
      <LoadingSpinner size={size} variant="default" />
      <span>Loading...</span>
    </div>
  );
}

// Skeleton loading components
export function SkeletonLoader({
  className = "",
  lines = 3,
  height = "h-4"
}: {
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={`${height} bg-slate-700 rounded animate-pulse`}
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-slate-800 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-slate-700 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-slate-700 rounded w-1/2 animate-pulse" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-700 rounded animate-pulse" />
        <div className="h-4 bg-slate-700 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-slate-700 rounded w-4/6 animate-pulse" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 bg-slate-700 rounded animate-pulse" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, j) => (
            <div key={j} className="h-4 bg-slate-700 rounded animate-pulse" />
          ))}
        </div>
      ))}
    </div>
  );
};

// Optimized variants for different use cases
export const LoadingSpinnerVariants = {
  // Simple spinner for buttons
  Button: ({ className = '' }: { className?: string }) => (
    <div className={`inline-flex items-center ${className}`}>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      <span>Loading...</span>
    </div>
  ),

  // Full page loader
  Page: ({ text = 'Loading page...' }: { text?: string }) => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="text-center">
        <LoadingSpinner size="xl" color="white" text={text} showText />
      </div>
    </div>
  ),

  // Inline loader for content
  Inline: ({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl', className?: string }) => (
    <LoadingSpinner size={size} color="primary" className={className} />
  ),

  // Skeleton loader for content
  Skeleton: ({ lines = 3, className = '' }: { lines?: number, className?: string }) => (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
};

export default LoadingSpinner;