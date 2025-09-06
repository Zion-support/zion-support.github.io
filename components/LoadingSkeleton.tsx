import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full',
  rounded = true 
}) => {
  return (
    <div 
      className={`animate-pulse bg-slate-700 ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
      aria-label="Loading content"
    />
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 animate-pulse">
    <LoadingSkeleton height="h-6" width="w-3/4" className="mb-4" />
    <LoadingSkeleton height="h-4" className="mb-2" />
    <LoadingSkeleton height="h-4" width="w-5/6" className="mb-4" />
    <LoadingSkeleton height="h-8" width="w-1/3" />
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center animate-pulse">
      <LoadingSkeleton height="h-16" width="w-96" className="mb-6 mx-auto" />
      <LoadingSkeleton height="h-8" width="w-80" className="mb-4 mx-auto" />
      <LoadingSkeleton height="h-6" width="w-96" className="mb-8 mx-auto" />
      <LoadingSkeleton height="h-12" width="w-48" className="mx-auto" />
    </div>
  </div>
);

export default LoadingSkeleton;