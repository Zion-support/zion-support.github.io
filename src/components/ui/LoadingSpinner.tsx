import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  text?: string;
  className?: string;
}

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', height = 'h-4', width = 'w-full', rounded = true }) => (
  <div
    className={`animate-pulse bg-gradient-to-r from-zion-slate-light/20 to-zion-slate-light/10 ${height} ${width} ${
      rounded ? 'rounded-md' : ''
    } ${className}`}
  />
);

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'spinner', 
  text = 'Loading...',
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

  if (variant === 'skeleton') {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <div className="flex flex-col space-y-3 w-full max-w-md">
          <Skeleton height="h-8" width="w-3/4" />
          <Skeleton height="h-4" width="w-full" />
          <Skeleton height="h-4" width="w-5/6" />
          <Skeleton height="h-4" width="w-4/5" />
        </div>
        {text && (
          <p className={`text-zion-cyan text-center ${textSizes[size]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-zion-cyan rounded-full"
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
        {text && (
          <p className={`text-zion-cyan text-center ${textSizes[size]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {text && (
          <p className={`text-zion-cyan text-center ${textSizes[size]}`}>
            {text}
          </p>
        )}
      </div>
    );
  }

  // Default spinner variant
  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-zion-slate-light/20 border-t-zion-cyan rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className={`text-zion-cyan text-center ${textSizes[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
}

// Skeleton components for different content types
export function CardSkeleton() {
  return (
    <div className="bg-zion-slate-light/5 border border-zion-slate-light/20 rounded-lg p-6 space-y-4">
      <Skeleton height="h-6" width="w-3/4" />
      <Skeleton height="h-4" width="w-full" />
      <Skeleton height="h-4" width="w-5/6" />
      <div className="flex space-x-2 pt-2">
        <Skeleton height="h-8" width="w-20" rounded />
        <Skeleton height="h-8" width="w-24" rounded />
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton height="h-12" width="w-12" rounded />
          <div className="flex-1 space-y-2">
            <Skeleton height="h-4" width="w-3/4" />
            <Skeleton height="h-3" width="w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} height="h-6" width="w-24" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} height="h-4" width="w-20" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <Skeleton height="h-12" width="w-3/4" className="mx-auto" />
        <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
        <Skeleton height="h-4" width="w-2/3" className="mx-auto" />
      </div>
      <div className="flex justify-center space-x-4">
        <Skeleton height="h-12" width="w-32" rounded />
        <Skeleton height="h-12" width="w-28" rounded />
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-zion-slate-light/5 to-zion-slate-light/10 border border-zion-slate-light/20 rounded-xl p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton height="h-10" width="w-10" rounded />
        <Skeleton height="h-6" width="w-3/4" />
      </div>
      <Skeleton height="h-4" width="w-full" />
      <Skeleton height="h-4" width="w-5/6" />
      <div className="space-y-2">
        <Skeleton height="h-3" width="w-full" />
        <Skeleton height="h-3" width="w-4/5" />
        <Skeleton height="h-3" width="w-3/4" />
      </div>
      <div className="flex justify-between items-center pt-4">
        <Skeleton height="h-8" width="w-24" rounded />
        <Skeleton height="h-6" width="w-16" />
      </div>
    </div>
  );
}
