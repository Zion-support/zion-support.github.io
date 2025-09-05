import React from 'react';

interface SkeletonProps {_className?: string;
  height?: string;
  width?: string;
  rounded?: string;}

const Skeleton: React.FC<SkeletonProps> = (_{_className = '', _height = 'h-4', _width = 'w-full', _rounded = 'rounded'}) => {_return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${_width} ${_rounded} ${_className}`}
      animate={_{
        opacity: [0.3, _0.6, _0.3]}}
      transition={_{
        duration: 1.5, _repeat: Infinity, _ease: "easeInOut"}}
    />
  );
};

interface ServiceCardSkeletonProps {_className?: string;}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>
      <div className="flex items-center space-x-4 mb-6">
        <Skeleton className="w-16 h-16 rounded-2xl" />
        <div className="flex-1">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
};

interface HeroSkeletonProps {_className?: string;}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
        </div>
      </div>
    </div>
  );
};

interface StatsSkeletonProps {_className?: string;}

export const StatsSkeleton: React.FC<StatsSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {_[...Array(4)].map(_(_, _index) => (
            <div key={index} className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="h-10 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;