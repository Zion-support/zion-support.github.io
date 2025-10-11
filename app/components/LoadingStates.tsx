'use client'
import React from 'react'

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading...</p>
    </div>
  </div>
)

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
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-300 rounded-lg mr-4"></div>
      <div className="h-6 bg-gray-300 rounded w-32"></div>
    </div>
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
    </div>
  </div>
);

export default {
  PageLoader,
  LoadingSpinner,
  LoadingSkeleton,
  ServiceCardSkeleton
}
