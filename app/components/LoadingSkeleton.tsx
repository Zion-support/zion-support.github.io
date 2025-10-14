
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = '100%',
  height = '1rem',
  rounded = false,
  animate = true
}) =>
                {
  const baseClasses = 'bg-gray-300 dark:bg-gray-700';
  const roundedClasses = rounded ? 'rounded-full' : 'rounded';
  const animateClasses = animate ? 'animate-pulse' : '';
  
  return (
    <div
      className={`${baseClasses} ${roundedClasses} ${animateClasses} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-pulse" role="status" aria-label="Loading service card"></div>
    <div className="h-8 bg-gray-200/20 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
    <div className="h-4 bg-gray-200/20 rounded w-4/6 mt-2"></div>
                </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
                {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center bg-white/10 backdrop-blur-lg p-6 rounded-lg animate-pulse"></div>
        <div className="h-8 bg-gray-200/20 rounded mb-2 w-16 mx-auto"></div>
        <div className="h-4 bg-gray-200/20 rounded w-24 mx-auto"></div>
                </div>
    ))}
                </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="text-center mb-16 animate-pulse"></div>
    <div className="h-16 bg-gray-200/20 rounded mb-6 w-96 mx-auto"></div>
    <div className="h-6 bg-gray-200/20 rounded mb-4 w-80 mx-auto"></div>
    <div className="h-4 bg-gray-200/20 rounded mb-8 w-full max-w-4xl mx-auto"></div>
    <div className="h-12 bg-gray-200/20 rounded w-48 mx-auto"></div>
                </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="bg-white/10 backdrop-blur-lg p-4 animate-pulse"></nav>
    <div className="max-w-7xl mx-auto flex items-center justify-between"></div>
      <div className="h-8 bg-gray-200/20 rounded w-32"></div>
      <div className="hidden md:flex space-x-8"></div>
                {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-200/20 rounded w-16"></div>
        ))}
                </div>
      <div className="h-8 bg-gray-200/20 rounded w-24"></div>
                </div>
  </nav>
);

export const ContentSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2 animate-pulse"></div>
                {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-200/20 rounded ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
                </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-pulse"></div>
    <div className="h-12 w-12 bg-gray-200/20 rounded mb-4"></div>
    <div className="h-6 bg-gray-200/20 rounded mb-3 w-3/4"></div>
    <div className="space-y-2"></div>
      <div className="h-4 bg-gray-200/20 rounded w-full"></div>
      <div className="h-4 bg-gray-200/20 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200/20 rounded w-4/6"></div>
                </div>
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="overflow-hidden rounded-lg animate-pulse"></div>
    <div className="bg-white/10 backdrop-blur-lg"></div>
      <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200/20"></div>
                {Array.from({ length: columns }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-200/20 rounded"></div>
        ))}
                </div>
                {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200/10"></div>
                {Array.from({ length: columns }).map((_, colIndex) => (
            <div key={colIndex} className="h-4 bg-gray-200/20 rounded"></div>
          ))}
                </div>
      ))}
                </div>
                </div>
);

export default Skeleton;
;
'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';