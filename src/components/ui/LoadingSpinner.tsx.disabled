import React from 'react';
import { cn } from '@/lib/utils';
<<<<<<< HEAD

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'default' | 'pulse' | 'dots';
}

export function LoadingSpinner({ 
  size = 'md', 
  className, 
  text,
  variant = 'default' 
}: LoadingSpinnerProps) {
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
          <div className={cn(
            'animate-pulse rounded-full bg-zion-cyan',
            sizeClasses[size]
          )} />
        );
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className={cn(
              'animate-bounce rounded-full bg-zion-cyan',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '0ms' }} />
            <div className={cn(
              'animate-bounce rounded-full bg-zion-purple',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '150ms' }} />
            <div className={cn(
              'animate-bounce rounded-full bg-zion-cyan-light',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'
            )} style={{ animationDelay: '300ms' }} />
          </div>
        );
      default:
        return (
          <div className={cn(
            'animate-spin rounded-full border-2 border-zion-blue-light border-t-zion-cyan',
            sizeClasses[size]
          )} />
        );
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className="relative">
        {renderSpinner()}
      </div>
      {text && (
        <p className="mt-3 text-sm text-zion-slate-light text-center animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
=======
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  className?: string;
  text?: string;
  showText?: boolean;
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  customColor,
  className,
  text = 'Loading...',
  showText = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-zion-purple',
    secondary: 'border-zion-cyan',
    white: 'border-white',
    custom: ''
  };

  const borderColor = customColor || colorClasses[color];

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div
        className={cn(
          'border-2 border-t-transparent rounded-full animate-spin',
          sizeClasses[size],
          borderColor
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      
      {showText && (
        <motion.p
          className="mt-3 text-sm text-zion-slate-light text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton loading component for content
export function SkeletonLoader({
  className,
  lines = 3,
  height = 'h-4'
}: {
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            'bg-zion-slate-light/20 rounded animate-pulse',
            height
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

// Page loading component
export function PageLoader({
  text = 'Loading page...',
  className
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" showText text={text} />
      </div>
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
}