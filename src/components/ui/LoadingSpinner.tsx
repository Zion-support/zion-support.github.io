import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  showText?: boolean;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading amazing experiences...',
  showText = true,
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <motion.div 
          className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner spinning ring */}
        <motion.div 
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-400 border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Zion logo in center */}
        <motion.div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold ${textSizes[size]}`}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ZION
        </motion.div>
        
        {/* Loading text */}
        {showText && (
          <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className={`text-cyan-400 ${textSizes[size]} animate-pulse`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
            </motion.div>
          </motion.div>
        )}
        
        {/* Floating particles */}
        <motion.div
          className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
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
// Page loading overlay
export function PageLoader({ 
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
          className="mt-4 text-lg text-zion-slate-light font-medium"
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
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="w-16 h-16 bg-white/10 rounded-xl mb-4 animate-pulse" />
            <div className="h-6 bg-white/10 rounded-lg mb-3 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg mb-2 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg w-3/4 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'list' ? (
        // List placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-3 bg-white/10 rounded-lg w-2/3 animate-pulse" />
            </div>
          </motion.div>
        ))
      ) : variant === 'grid' ? (
        // Grid placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10"
          >
            <div className="w-full h-24 bg-white/10 rounded-lg mb-3 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded-lg w-2/3 animate-pulse" />
          </motion.div>
        ))
      ) : (
        // Default placeholders
        Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="h-4 bg-white/10 rounded-lg animate-pulse"
          />
        ))
      )}
    </div>
  );
}