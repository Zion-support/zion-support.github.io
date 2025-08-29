import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-zion-cyan border-t-zion-purple',
    secondary: 'border-zion-purple border-t-zion-cyan',
    white: 'border-white/30 border-t-white'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Enhanced spinning animation */}
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 1, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Pulsing dots */}
      {text && (
        <div className="mt-4 flex items-center gap-1">
          <motion.span 
            className={`${textSizeClasses[size]} text-zion-slate-light font-medium`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {text}
          </motion.span>
          <div className="flex gap-1 ml-2">
            <motion.div
              className="w-1.5 h-1.5 bg-zion-cyan rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-zion-purple rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-zion-cyan rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Full screen loading component
export function FullScreenLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo or brand element */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-4xl font-bold text-white mb-2">ZION</div>
          <div className="text-zion-cyan text-lg">Tech Group</div>
        </motion.div>
        
        {/* Enhanced loading spinner */}
        <LoadingSpinner size="xl" color="white" text={text} />
        
        {/* Loading progress bar */}
        <motion.div
          className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Inline loading component
export function InlineLoader({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <LoadingSpinner size={size} />
      <span className="text-sm text-zion-slate-light">Loading...</span>
    </div>
  );
}

// Skeleton loading component
export function SkeletonLoader({ className = '', lines = 3 }: { className?: string, lines?: number }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-zion-slate-light/20 rounded mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}