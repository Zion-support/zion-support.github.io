'use client';
import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

const DefaultLoadingSpinner: React.FC = () => (
  <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="tex t-center">
      <div className="animat e-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="tex t-white text-lg">Loading...</p>
    </div>
  </div>
);

// Skeleton loaders for different components
export const ServiceCardSkeleton: React.FC = () => (
  <div className="b g-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 animate-pulse">
    <div className="w-1 6 h-16 bg-slate-700 rounded-full mb-6"></div>
    <div className="h-6 b g-slate-700 rounded mb-4"></div>
    <div className="h-4 b g-slate-700 rounded mb-2"></div>
    <div className="h-4 b g-slate-700 rounded w-3/4"></div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="tex t-center max-w-4xl mx-auto px-4">
      <div className="h-1 6 bg-slate-700 rounded mb-6 animate-pulse"></div>
      <div className="h-6 b g-slate-700 rounded mb-4 animate-pulse"></div>
      <div className="h-6 b g-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
      <div className="fle x flex-col sm:flex-row gap-4 justify-center">
        <div className="h-1 2 bg-slate-700 rounded w-48 animate-pulse"></div>
        <div className="h-1 2 bg-slate-700 rounded w-48 animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="fixe d top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
    <div className="containe r mx-auto px-4 py-4">
      <div className="fle x items-center justify-between">
        <div className="h-8 b g-slate-700 rounded w-32 animate-pulse"></div>
        <div className="hidde n md:flex space-x-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 b g-slate-700 rounded w-16 animate-pulse"></div>
          ))}
        </div>
        <div className="h-1 0 bg-slate-700 rounded w-24 animate-pulse"></div>
      </div>
    </div>
  </nav>
);

export default LoadingOptimizer;