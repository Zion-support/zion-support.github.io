import React from 'react';

interface SkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
  width?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  lines = 1, 
  height = 'h-4', 
  width = 'w-full' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-700 rounded ${height} ${width} ${
            index < lines - 1 ? 'mb-2' : ''
          }`}
        />
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
    <Skeleton height="h-6" width="w-3/4" className="mb-4" />
    <Skeleton lines={3} className="mb-4" />
    <Skeleton height="h-10" width="w-1/2" />
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center max-w-4xl mx-auto px-4">
      <Skeleton height="h-16" width="w-96" className="mx-auto mb-6" />
      <Skeleton height="h-6" width="w-3/4" className="mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Skeleton height="h-12" width="w-48" />
        <Skeleton height="h-12" width="w-48" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="text-center">
            <Skeleton height="h-16" width="w-16" className="mx-auto mb-3 rounded-lg" />
            <Skeleton height="h-6" width="w-20" className="mx-auto mb-1" />
            <Skeleton height="h-4" width="w-24" className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-400 transition-colors">
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
      <Skeleton height="h-12" width="w-12" className="rounded-lg" />
    </div>
    <Skeleton height="h-6" width="w-3/4" className="mb-3" />
    <Skeleton lines={3} className="mb-4" />
    <Skeleton height="h-10" width="w-full" />
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
    <Skeleton lines={4} className="mb-4" />
    <div className="flex items-center">
      <Skeleton height="h-12" width="w-12" className="rounded-full mr-4" />
      <div>
        <Skeleton height="h-4" width="w-32" className="mb-1" />
        <Skeleton height="h-3" width="w-24" />
      </div>
    </div>
  </div>
);

export const NewsCardSkeleton: React.FC = () => (
  <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors">
    <Skeleton height="h-48" width="w-full" />
    <div className="p-6">
      <Skeleton height="h-6" width="w-3/4" className="mb-3" />
      <Skeleton lines={3} className="mb-4" />
      <div className="flex items-center justify-between">
        <Skeleton height="h-4" width="w-24" />
        <Skeleton height="h-4" width="w-16" />
      </div>
    </div>
  </article>
);

export default Skeleton;