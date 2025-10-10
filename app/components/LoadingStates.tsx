'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

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
    <Loader2 
      className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`}
      aria-label="Loading"
    />
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="cyber-card hologram-card p-8 text-center">
        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <LoadingSpinner size="lg" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we prepare your content</p>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="cyber-card hologram-card p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-5/6' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

export const ImageSkeleton: React.FC<{ className?: string }> = ({ 
  className = 'w-full h-48' 
}) => {
  return (
    <div className={`bg-gray-200 rounded animate-pulse ${className}`}></div>
  );
};

export const ButtonSkeleton: React.FC<{ className?: string }> = ({ 
  className = 'w-24 h-10' 
}) => {
  return (
    <div className={`bg-gray-200 rounded animate-pulse ${className}`}></div>
  );
};

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => {
  return (
    <div className="animate-pulse">
      <div className="grid gap-4">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: columns }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-4 gap-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export const ChartSkeleton: React.FC<{ className?: string }> = ({ 
  className = 'w-full h-64' 
}) => {
  return (
    <div className={`bg-gray-200 rounded animate-pulse ${className}`}>
      <div className="flex items-end justify-between h-full p-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-t"
            style={{
              height: `${Math.random() * 80 + 20}%`,
              width: '12%'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const FormSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/5"></div>
        <div className="h-20 bg-gray-200 rounded"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-32"></div>
    </div>
  );
};