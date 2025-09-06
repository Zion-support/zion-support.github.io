import React from 'react';
import { motion } from 'framer-motion';

interface HeroSkeletonProps {
  className?: string
}
export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm: flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
        </div>
      </div>
    </div>

interface StatsSkeletonProps {
  className?: string
}
export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className='text-center'>
              <Skeleton className='w-16 h-16 rounded-full mx-auto mb-4' />
              <Skeleton className='h-10 w-20 mx-auto mb-2' />
              <Skeleton className='h-5 w-24 mx-auto' />            <div key={index} className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="h-10 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-24 mx-auto" />
          ))}
        </div>
      </div>
    </div>;
  );
}
export default Skeleton;  )
}
export default Skeleton;

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;

