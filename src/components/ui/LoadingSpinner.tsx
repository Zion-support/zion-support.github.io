import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ 
  size = 'lg', 
  className = '',
  text = 'Loading...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-futuristic ${className}`}>
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
          ZION
        </div>
      </div>
      {text && (
        <motion.p
          className="mt-4 text-zion-cyan text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton loading component for content
export function SkeletonLoader({ className, lines = 3, height = 'h-4' }: { className?: string; lines?: number; height?: string }) {
  return (
    <div className={`space-y-3 ${className || ''}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div 
          key={index} 
          className={`bg-zion-slate-light/20 rounded animate-pulse ${height}`} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

// Page loading component
export function PageLoader({ text = 'Loading page...', className }: { text?: string; className?: string }) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className || ''}`}>
      <div className="text-center">
        <LoadingSpinner size="xl" text={text} />
      </div>
    </div>
  );
}

// Button loading state
export function ButtonLoader({ size = 'sm', className }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  return (
    <div className={`inline-flex items-center ${className || ''}`}>
      <LoadingSpinner size={size} />
      <span className="ml-2">Loading...</span>
    </div>
  );
}
