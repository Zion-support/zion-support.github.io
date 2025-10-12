import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  lines = 1, 
  height = 'h-4' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-300/20 rounded ${height} ${
            index < lines - 1 ? 'mb-2' : ''
          }`}
        />
      ))}
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
    <div className="mb-6">
      <div className="w-8 h-8 bg-gray-300/20 rounded animate-pulse" />
    </div>
    <LoadingSkeleton lines={2} height="h-6" className="mb-4" />
    <LoadingSkeleton lines={3} height="h-4" className="mb-6" />
    <div className="flex justify-between items-center">
      <LoadingSkeleton height="h-4" className="w-24" />
      <LoadingSkeleton height="h-10" className="w-32" />
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
    <div className="w-16 h-16 bg-gray-300/20 rounded-full mx-auto mb-4 animate-pulse" />
    <div className="flex justify-center mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-300/20 rounded mr-1 animate-pulse" />
      ))}
    </div>
    <LoadingSkeleton lines={3} height="h-4" className="mb-6" />
    <LoadingSkeleton height="h-4" className="w-32 mx-auto" />
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSkeleton height="h-16" className="w-96 mb-6" />
      <LoadingSkeleton height="h-6" className="w-80 mb-8" />
      <div className="flex gap-4 justify-center">
        <LoadingSkeleton height="h-12" className="w-40" />
        <LoadingSkeleton height="h-12" className="w-32" />
      </div>
    </div>
  </div>
);

export default LoadingSkeleton;