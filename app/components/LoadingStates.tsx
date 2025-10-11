'use client'
import React from 'react'

<<<<<<< HEAD
export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the page</p>
      </div>
    </div>
  );
};
=======
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

export default {
  PageLoader,
  LoadingSpinner,
  LoadingSkeleton,
  ServiceCardSkeleton
}
>>>>>>> origin/main
