'use client';
import React, { Suspense, lazy } from 'react';

// Lazy load components for better performance

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner>
  return (
      {children}
  );
};

 (
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
);

// Skeleton loaders for different components
 (
    <div className="w-16 h-16 bg-slate-700 rounded-full mb-6"></div>
    <div className="h-6 bg-slate-700 rounded mb-4"></div>
    <div className="h-4 bg-slate-700 rounded mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
);

 (
      <div className="h-16 bg-slate-700 rounded mb-6 animate-pulse"></div>
      <div className="h-6 bg-slate-700 rounded mb-4 animate-pulse"></div>
      <div className="h-6 bg-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
        <div className="h-12 bg-slate-700 rounded w-48 animate-pulse"></div>
        <div className="h-12 bg-slate-700 rounded w-48 animate-pulse"></div>
);

 (
        <div className="h-8 bg-slate-700 rounded w-32 animate-pulse"></div>
 (
            <div key={i} className="h-4 bg-slate-700 rounded w-16 animate-pulse"></div>
          ))}
        <div className="h-10 bg-slate-700 rounded w-24 animate-pulse"></div>

);

export default LoadingOptimizer;