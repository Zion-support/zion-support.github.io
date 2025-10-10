'use client';
import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  animate?: boolean;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  height = 'h-4',
  width = 'w-full',
  rounded = true,
  animate = true,
}) => {
  return (
    <div
      className={`
        ${height} ${width} 
        ${rounded ? 'rounded' : ''} 
        ${animate ? 'animate-pulse' : ''} 
        bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 
        bg-[length:200%_100%] 
        ${animate ? 'loading-skeleton' : ''} 
        ${className}
      `}
    />
  );
};

// Predefined skeleton components for common use cases
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-slate-700 rounded-lg" />
      <div className="w-16 h-6 bg-slate-700 rounded-full" />
    </div>
    <div className="space-y-3">
      <LoadingSkeleton height="h-6" width="w-3/4" />
      <LoadingSkeleton height="h-4" width="w-full" />
      <LoadingSkeleton height="h-4" width="w-5/6" />
    </div>
    <div className="flex items-center justify-between mt-6">
      <div className="space-y-2">
        <LoadingSkeleton height="h-5" width="w-20" />
        <LoadingSkeleton height="h-4" width="w-16" />
      </div>
      <div className="w-24 h-8 bg-slate-700 rounded-lg" />
    </div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-slate-700 rounded-lg animate-pulse" />
          <div className="w-32 h-6 bg-slate-700 rounded animate-pulse" />
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-16 h-4 bg-slate-700 rounded animate-pulse" />
          ))}
        </div>
        <div className="w-8 h-8 bg-slate-700 rounded lg:hidden animate-pulse" />
      </div>
    </div>
  </nav>
);

export const HeroSkeleton: React.FC = () => (
  <section className="relative pt-20 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <LoadingSkeleton height="h-16" width="w-full" className="mx-auto" />
          <LoadingSkeleton height="h-16" width="w-3/4" className="mx-auto" />
        </div>
        <LoadingSkeleton height="h-6" width="w-2/3" className="mx-auto" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-40 h-12 bg-slate-700 rounded-lg animate-pulse" />
          <div className="w-48 h-12 bg-slate-700 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);

export const FooterSkeleton: React.FC = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <LoadingSkeleton height="h-6" width="w-32" />
            <div className="space-y-2">
              {[...Array(4)].map((_, j) => (
                <LoadingSkeleton key={j} height="h-4" width="w-24" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <LoadingSkeleton height="h-4" width="w-48" />
          <div className="flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-slate-700 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default LoadingSkeleton;