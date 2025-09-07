import React from 'react';

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function Skeleton({ className = '', children }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
      {children}
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <Skeleton className="w-8 h-8 mr-3 rounded" />
        <Skeleton className="h-6 w-48" />
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
      <Skeleton className="h-16 w-96 mx-auto mb-6" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-12 w-32 mx-auto sm:mx-0" />
        <Skeleton className="h-12 w-32 mx-auto sm:mx-0" />
      </div>
    </div>
  );
}

export function BenefitsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="text-center p-6">
          <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
          <Skeleton className="h-5 w-32 mx-auto mb-2" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="space-y-16">
      <HeroSkeleton />
      <div className="py-12">
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCardSkeleton key={index} />
          ))}
        </div>
      </div>
      <div className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-80 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <BenefitsSkeleton />
      </div>
    </div>
  );
}
interface LoadingSkeletonProps  {className?: string;
  }
  height?: string;
  width?: string;
  rounded?: boolean;

    </div>;
  </div>;
)export default LoadingSkeleton;
)export default LoadingSkeleton;
