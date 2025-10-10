'use client';

import React from 'react';
import { Loader2, RefreshCw } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} />
  );
};

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = 'Loading...' 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <LoadingSpinner size="lg" className="text-white" />
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

interface ButtonLoaderProps {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({ 
  loading, 
  children, 
  className = '' 
}) => {
  return (
    <button 
      className={`flex items-center justify-center gap-2 ${className}`}
      disabled={loading}
    >
      {loading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
};

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  lines = 3 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface CardSkeletonProps {
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${className}`}>
      <div className="animate-pulse">
        <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  );
};

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ 
  rows = 5, 
  columns = 4, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`h-4 bg-gray-700 rounded ${
                  colIndex === columns - 1 ? 'w-1/4' : 'flex-1'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

interface InlineLoaderProps {
  message?: string;
  className?: string;
}

export const InlineLoader: React.FC<InlineLoaderProps> = ({ 
  message = 'Loading...', 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-2 text-gray-400 ${className}`}>
      <LoadingSpinner size="sm" />
      <span className="text-sm">{message}</span>
    </div>
  );
};

interface RefreshButtonProps {
  onRefresh: () => void;
  loading?: boolean;
  className?: string;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ 
  onRefresh, 
  loading = false, 
  className = '' 
}) => {
  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
      <span>Refresh</span>
    </button>
  );
};

export default {
  LoadingSpinner,
  PageLoader,
  ButtonLoader,
  SkeletonLoader,
  CardSkeleton,
  TableSkeleton,
  InlineLoader,
  RefreshButton
};