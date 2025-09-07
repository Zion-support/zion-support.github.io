import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
interface LoadingSkeletonProps  {className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({className = '',height = 'h-4',width = 'w-full',rounded = true;
}) => {return (<div;
      className={`animate-pulse bg-slate-700 ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
      aria-label="Loading content";
    />;
  )}export const ServiceCardSkeleton: React.FC = () => (<div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 animate-pulse">;
    <LoadingSkeleton height="h-6" width="w-3/4" className="mb-4" />;
    <LoadingSkeleton height="h-4" className="mb-2" />;
    <LoadingSkeleton height="h-4" width="w-5/6" className="mb-4" />;
    <LoadingSkeleton height="h-8" width="w-1/3" />;
  </div>;
)export const HeroSkeleton: React.FC = () => (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">;
    <div className="text-center animate-pulse">;
      <LoadingSkeleton height="h-16" width="w-96" className="mb-6 mx-auto" />;
      <LoadingSkeleton height="h-8" width="w-80" className="mb-4 mx-auto" />;
      <LoadingSkeleton height="h-6" width="w-96" className="mb-8 mx-auto" />;
      <LoadingSkeleton height="h-12" width="w-48" className="mx-auto" />;
    </div>;
  </div>;
<<<<<<< HEAD
)export default LoadingSkeleton;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
)export default LoadingSkeleton;
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
