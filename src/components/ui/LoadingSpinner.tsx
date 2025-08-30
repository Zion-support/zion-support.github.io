import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  className?: string;
  text?: string;
  showText?: boolean;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  className,
  text = 'Loading...',
  showText = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-zion-cyan',
    secondary: 'text-zion-purple',
    white: 'text-white',
    custom: customColor || 'text-zion-cyan'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={cn(
              'rounded-full bg-current',
              sizeClasses[size],
              colorClasses[color]
            )}
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

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full bg-current',
                  colorClasses[color]
                )}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
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
                className={cn(
                  'w-1 h-4 rounded-full bg-current',
                  colorClasses[color]
                )}
                animate={{
                  height: [16, 32, 16],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative">
            <motion.div
              className={cn(
                'absolute inset-0 rounded-full border-2 border-current',
                sizeClasses[size],
                colorClasses[color]
              )}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className={cn(
                'absolute inset-0 rounded-full border-2 border-current',
                sizeClasses[size],
                colorClasses[color]
              )}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: 'easeInOut'
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={cn(
              'border-2 border-current border-t-transparent rounded-full',
              sizeClasses[size],
              colorClasses[color]
            )}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-3',
        className
      )}
      role="status"
      aria-label={text}
    >
      {renderSpinner()}
      {showText && (
        <motion.p
          className="text-sm text-zion-slate-light font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}
        </motion.p>
      )}
      <span className="sr-only">{text}</span>
    </div>
  );
}

// Skeleton loading component
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zion-slate-700/50',
        className
      )}
      {...props}
    />
  );
}

// Page loading component
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <div className="text-center">
        <LoadingSpinner size="xl" variant="ripple" color="white" />
        <motion.h2
          className="mt-6 text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading Zion Tech Group
        </motion.h2>
        <motion.p
          className="mt-2 text-zion-slate-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Preparing your experience...
        </motion.p>
      </div>
    </div>
  );
}

// Content skeleton components
export function ContentSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-zion-slate-700/50 rounded-lg w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-zion-slate-700/50 rounded w-full"></div>
        <div className="h-4 bg-zion-slate-700/50 rounded w-5/6"></div>
        <div className="h-4 bg-zion-slate-700/50 rounded w-4/6"></div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-zion-slate-800/50 rounded-lg p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-zion-slate-700/50 rounded w-1/2"></div>
      <div className="h-4 bg-zion-slate-700/50 rounded w-full"></div>
      <div className="h-4 bg-zion-slate-700/50 rounded w-3/4"></div>
      <div className="h-10 bg-zion-slate-700/50 rounded w-1/3"></div>
    </div>
  );
}
