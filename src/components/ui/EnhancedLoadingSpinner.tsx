import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = "", 
  height = "h-4", 
  width = "w-full", 
  rounded = "rounded" 
}) => (
  <div 
    className={`${height} ${width} ${rounded} bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-pulse ${className}`}
    style={{
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite'
    }}
  />
);

export const ZionLoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
    </div>
  </div>
);

export const SkeletonCard: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 animate-pulse">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-16 h-16 rounded-2xl" />
      <div className="flex-1">
        <Skeleton className="h-6 mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton className="h-4" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ cols?: number; rows?: number }> = ({ cols = 3, rows = 2 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
    {Array.from({ length: cols * rows }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export const SkeletonHero: React.FC = () => (
  <div className="relative min-h-[600px] bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-3xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
    <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center min-h-[600px]">
      <div className="max-w-4xl mx-auto text-center">
        <Skeleton className="h-12 md:h-16 mb-6 w-3/4 mx-auto" />
        <Skeleton className="h-6 md:h-8 mb-8 w-2/3 mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-48 mx-auto sm:mx-0" />
          <Skeleton className="h-12 w-48 mx-auto sm:mx-0" />
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonServiceCard: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
      <Skeleton className="w-8 h-8 rounded" />
    </div>
    <Skeleton className="h-6 mb-3" />
    <Skeleton className="h-4 mb-4" />
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="h-3 flex-1" />
        </div>
      ))}
    </div>
  </div>
);

export const SkeletonTestimonial: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
    <div className="flex items-center mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="ml-4 flex-1">
        <Skeleton className="h-5 mb-1" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
    <Skeleton className="h-4 mb-2" />
    <Skeleton className="h-4 w-5/6 mb-4" />
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="w-4 h-4 rounded" />
      ))}
      <Skeleton className="h-4 w-16 ml-2" />
    </div>
  </div>
);

export const SkeletonNavigation: React.FC = () => (
  <div className="bg-zion-slate-dark/95 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, categoryIndex) => (
        <div key={categoryIndex} className="space-y-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-5 h-5 rounded" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, serviceIndex) => (
              <div key={serviceIndex} className="p-3 rounded-lg">
                <Skeleton className="h-4 mb-1" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced loading states for different components
export const LoadingStates = {
  Card: SkeletonCard,
  Grid: SkeletonGrid,
  Hero: SkeletonHero,
  ServiceCard: SkeletonServiceCard,
  Testimonial: SkeletonTestimonial,
  Navigation: SkeletonNavigation,
  Spinner: ZionLoadingSpinner
};

export default ZionLoadingSpinner;