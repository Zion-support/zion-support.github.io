import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = true,
  variant = 'spinner',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    custom: customColor ? '' : 'text-blue-600'
  };

  const getSpinnerContent = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${colorClasses[color]}`}
                style={color === 'custom' && customColor ? { backgroundColor: customColor } : {}}
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
            className={`w-full h-full rounded-full ${colorClasses[color]}`}
            style={color === 'custom' && customColor ? { backgroundColor: customColor } : {}}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
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
                className={`w-1 h-full ${colorClasses[color]}`}
                style={color === 'custom' && customColor ? { backgroundColor: customColor } : {}}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative w-full h-full">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 rounded-full border-2 ${colorClasses[color]}`}
                style={color === 'custom' && customColor ? { borderColor: customColor } : {}}
                animate={{
                  scale: [0, 1],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.75
                }}
              />
            ))}
          </div>
        );

      default: // spinner
        return (
          <motion.div
            className={`w-full h-full border-2 border-gray-200 rounded-full ${colorClasses[color]}`}
            style={color === 'custom' && customColor ? { borderTopColor: customColor } : {}}
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
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label={text}>
      <div className={sizeClasses[size]}>
        {getSpinnerContent()}
      </div>
      
      {showText && text && (
        <motion.p
          className={`mt-2 text-sm font-medium ${colorClasses[color]} text-center`}
          style={color === 'custom' && customColor ? { color: customColor } : {}}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
      
      <span className="sr-only">{text}</span>
    </div>
  );
}

// Specialized loading components for common use cases
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <LoadingSpinner
        size="xl"
        color="white"
        text="Loading page..."
        variant="ripple"
        className="text-center"
      />
    </div>
  );
}

export function ContentLoader() {
  return (
    <div className="flex items-center justify-center py-12">
      <LoadingSpinner
        size="lg"
        color="primary"
        text="Loading content..."
        variant="dots"
      />
    </div>
  );
}

export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <LoadingSpinner
      size={size}
      color="white"
      text=""
      showText={false}
      variant="spinner"
    />
  );
}

export function InlineLoader() {
  return (
    <LoadingSpinner
      size="sm"
      color="primary"
      text=""
      showText={false}
      variant="dots"
      className="inline-block"
    />
  );
}

// Skeleton loading components
export function SkeletonLoader({ className = '', lines = 3 }: { className?: string; lines?: number }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-t-lg mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="animate-pulse">
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, j) => (
              <div
                key={j}
                className={`h-4 bg-gray-200 rounded ${
                  j === 0 ? 'w-1/4' : j === columns - 1 ? 'w-1/6' : 'w-1/3'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
