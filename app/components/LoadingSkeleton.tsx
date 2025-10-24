'use client';
<<<<<<< HEAD
import React from 'react';

export const ServiceCardSkeleton: React.FC = React.memo(() => (
  <div className="cyber-card p-6 animate-pulse"></div>
    <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-6"></div><div className="h-6 bg-gray-700 rounded mb-3"></div><div className="h-4 bg-gray-700 rounded mb-4"></div><div className="space-y-2 mb-4"></div>
      <div className="h-3 bg-gray-700 rounded"></div><div className="h-3 bg-gray-700 rounded"></div><div className="h-3 bg-gray-700 rounded w-3/4"></div><div className="h-8 bg-gray-700 rounded">);
</div>
export const HeroSkeleton: React.FC = React.memo(() => (</div>
  </div><div className="text-center mb-16 animate-pulse"></div>
    <div className="h-16 bg-gray-700 rounded mb-6 mx-auto max-w-2xl"></div><div className="h-8 bg-gray-700 rounded mb-8 mx-auto max-w-4xl"></div><div className="h-6 bg-gray-700 rounded mb-8 mx-auto max-w-3xl"></div><div className="flex justify-center gap-4"></div>
      <div className="h-12 bg-gray-700 rounded w-48"></div><div className="h-12 bg-gray-700 rounded w-48">);

export const HeroSkeleton: React.FC = React.memo(() => (
  <div className="text-center mb-16 animate-pulse"></div>
    <div className="h-16 bg-gray-700 rounded mb-6 mx-auto max-w-2xl"></div>
    <div className="h-8 bg-gray-700 rounded mb-8 mx-auto max-w-4xl"></div>
    <div className="h-6 bg-gray-700 rounded mb-8 mx-auto max-w-3xl"></div>
    <div className="flex justify-center gap-4"></div>
      <div className="h-12 bg-gray-700 rounded w-48"></div>
      <div className="h-12 bg-gray-700 rounded w-48"></div>
=======

import React from 'react';

interface LoadingSkeletonProps {lines?: number;
  className?: string;}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({lines = 3,
  className = ''}) => {return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines}).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300 rounded mb-2"
          />
      ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    </div>
  </div>
);

<<<<<<< HEAD
export const ContentSkeleton: React.FC = React.memo(() => (
  <div className="animate-pulse"></div>
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);

export const CardSkeleton: React.FC = React.memo(() => (
  <div className="cyber-card p-6 animate-pulse"></div>
    <div className="h-6 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-2/3"></div>
  </div>
);
,
export default ServiceCardSkeleton;
=======
export default LoadingSkeleton;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
