import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

export default function LoadingSkeleton({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full',
  rounded = true 
}: LoadingSkeletonProps) {
  return (
    <div 
      className={`
        ${height} ${width} 
        ${rounded ? 'rounded' : ''} 
        bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 
        animate-pulse 
        ${className}
      `}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10">
      <LoadingSkeleton height="h-6" width="w-3/4" className="mb-4" />
      <LoadingSkeleton height="h-4" className="mb-2" />
      <LoadingSkeleton height="h-4" width="w-5/6" className="mb-2" />
      <LoadingSkeleton height="h-4" width="w-4/6" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <LoadingSkeleton height="h-16" width="w-96" className="mx-auto mb-6" />
        <LoadingSkeleton height="h-8" width="w-80" className="mx-auto mb-8" />
        <LoadingSkeleton height="h-6" width="w-full" className="mb-4" />
        <LoadingSkeleton height="h-6" width="w-5/6" className="mx-auto mb-12" />
      </div>
    </div>
  );
}