import React, { memo } from "react"
import { motion } from "framer-motion"
interface LoaderProps {;
  size?: 'sm' | 'md' | 'lg',;
  color?: 'primary' | 'secondary' | 'white',;
  text?: string,;
  fullScreen?: boolean,;
  showLogo?: boolean,;
};
export const PerformanceOptimizedLoader = memo<LoaderProps>(({;
  size = 'md'
  color = 'primary'
  text;
  fullScreen = false;
}: LoaderProps) => {;
  const sizeClasses = {;
    sm: 'w-6 h-6',md: 'w-12 h-12',lg: 'w-16 h-16'
  };
  const textSizes = {;
    sm: 'text-xs',md: 'text-sm',lg: 'text-base'
  };
  const showLogo = true, //[^;]*

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <div className="relative">;
        {/* Outer ring */};
        <div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}></[^>]*>
        {/* Spinning ring */};
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`};
          animate={{ rotate: 360 }};
          transition={{;
            duration: 1,repeat: Infinity,ease: "linear"
          }};
        />;
        {/* Logo text */};
        {showLogo && (;&& (; (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">;
            ZION;
          </[^>]*>
        )};
        {/* Loading text */};
        <div className="mt-4 text-center">;
          <motion.div
            className={`text-zion-cyan ${textSizes[size]} animate-pulse`};
            animate={{ opacity: [0.5, 1, 0.5] }};
            transition={{ duration: 2, repeat: Infinity }};
          >;
            {text};
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
}),;

PerformanceOptimizedLoader.displayName = 'PerformanceOptimizedLoader',;
//[^;]*
export function SkeletonLoader({;
  className = "",;
  lines = 3,;
  height = "h-4"
}: {;
  className?: string;
  lines?: number;
  height?: string;
}) {;
  return (
    <div className={`space-y-3 ${className}`}>;
      {Array.from({ length: lines }).map((_, index) => (;
        <motion.div
          key={index};
          initial={{ opacity: 0 }};
          animate={{ opacity: 1 }};
          transition={{ delay: index * 0.1 }};
          className={`${height} bg-zion-blue-light/20 rounded-lg animate-pulse`};
          style={{;
            width: `${Math.random() * 40 + 60}%`
          }};
        />;
      ))};
    </[^>]*>
  );
};
//[^;]*
export function CardSkeleton({ className = "" }: { className?: string }) {;
  return (
    <div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${className}`}>;
      <div className="space-y-4">;
        {/* Image skeleton */};
        <[^>]*/>
        {/* Content skeleton */};
        <div className="space-y-3">;
          <[^>]*/>
          <[^>]*/>
          <[^>]*/>
        </[^>]*>
        {/* Button skeleton */};
        <div className="flex gap-3 pt-4">;
          <[^>]*/>
          <[^>]*/>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  ),;
};
//[^;]*
export function GridSkeleton({;
  columns = 3,;
  rows = 2,;
  className = ""
}: {;
  columns?: number,;
  rows?: number;
  className?: string;
}) {;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>;
      {Array.from({ length: columns * rows }).map((_, index) => (;
        <[^>]*/>
      ))};
    </[^>]*>
  );
};
//[^;]*
export function PageSkeleton({ className = "" }: { className?: string }) {;
  return (
    <div className={`space-y-8 ${className}`}>;
      {/* Header skeleton */};
      <div className="space-y-4">;
        <[^>]*/>
        <[^>]*/>
      </[^>]*>
      {/* Content skeleton */};
      <[^>]*/>
      {/* Footer skeleton */};
      <div className="space-y-3">;
        <[^>]*/>
        <[^>]*/>
      </[^>]*>
    </[^>]*>
  );
};