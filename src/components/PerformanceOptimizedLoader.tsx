import React, { memo } from 'react';
import { motion } from 'framer-motion';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  showLogo?: boolean;
}
export const PerformanceOptimizedLoader = memo<LoadingSpinnerProps>(({ 
  size = 'md', 
  text = 'Loading amazing experiences...',
  showLogo = true 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}></div>
        
        {/* Spinning ring */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Logo text */}
        {showLogo && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
            ZION
          </div>
        )}
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <motion.div 
            className={`text-zion-cyan ${textSizes[size]} animate-pulse`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    </div>
  );
});
PerformanceOptimizedLoader.displayName = 'PerformanceOptimizedLoader';
// Skeleton loader for content
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
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`${height} bg-zion-blue-light/20 rounded-lg animate-pulse`}
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
        />
      ))}
    </div>
  );
}
// Card skeleton loader
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${className}`}>
      <div className="space-y-4">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse" />
        
        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
        </div>
        
        {/* Button skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1" />
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24" />
        </div>
      </div>
    </div>
  );
}
// Grid skeleton loader
export function GridSkeleton({ 
  columns = 3, 
  rows = 2,
  className = "" 
}: { 
  columns?: number; 
  rows?: number;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: columns * rows }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
// Page skeleton loader
export function PageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
        <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
      </div>
      
      {/* Content skeleton */}
      <GridSkeleton columns={3} rows={2} />
      
      {/* Footer skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2" />
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
      </div>
    </div>
  );
}