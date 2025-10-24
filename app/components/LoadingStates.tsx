<<<<<<< HEAD
'use client';
import React from 'react';
=======
'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-cyan-400 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  );
};

<<<<<<< HEAD
export default PageLoader;
=======
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
=======
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; text?: string; fullScreen?: boolean }> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`animate-spin rounded-full border-b-2 border-cyan-400 ${sizeClasses[size]}`}></div>
      {text && <p className="text-cyan-400 font-medium">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="animate-pulse space-y-4">
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
    ))}
>>>>>>> cursor/delete-records-bf70
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-slate-800 rounded-xl p-6 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-600 rounded mb-2"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded w-3/4"></div>
  </div>
);

export default {
  PageLoader,
  LoadingSpinner,
  LoadingSkeleton,
  ServiceCardSkeleton
}
<<<<<<< HEAD
>>>>>>> cursor/delete-records-fd55
=======
>>>>>>> cursor/delete-records-bf70
