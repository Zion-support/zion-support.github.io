'use client';
import React from 'react';
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react';

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

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading Zion Tech Group
      </h2>
      
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      <p className="text-gray-400 text-sm mt-4">
        Preparing your AI-powered experience...
      </p>
    </div>
  </div>
);

export const ServiceLoader: React.FC<{ service: string }> = ({ service }) => {
  const serviceIcons = {
    ai: Brain,
    cloud: Cloud,
    security: Shield,
    development: Code
  };

  const Icon = serviceIcons[service as keyof typeof serviceIcons] || Brain;

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Loading {service.toUpperCase()} Services
        </h3>
        <LoadingSpinner size="md" />
      </div>
    </div>
  );
};

export const CardLoader: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-pulse">
        <div className="w-12 h-12 bg-gray-700/50 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-700/50 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700/50 rounded"></div>
          <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        </div>
      </div>
    ))}
  </div>
);

export const TableLoader: React.FC<{ rows?: number; cols?: number }> = ({ 
  rows = 5, 
  cols = 4 
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-700/50 animate-pulse">
    <div className="bg-slate-800/50 p-4">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(cols)].map((_, i) => (
          <div key={i} className="h-5 bg-gray-700/50 rounded"></div>
        ))}
      </div>
    </div>
    {[...Array(rows)].map((_, rowIndex) => (
      <div key={rowIndex} className="border-t border-gray-700/50 p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {[...Array(cols)].map((_, colIndex) => (
            <div key={colIndex} className="h-4 bg-gray-700/50 rounded"></div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ButtonLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center">
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
);

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center text-gray-400 text-sm">
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
);

export const FullScreenLoader: React.FC<{ message?: string }> = ({ 
  message = 'Loading...' 
}) => (
  <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      <LoadingSpinner size="lg" />
    </div>
  </div>
);

export const SkeletonLoader: React.FC<{ 
  width?: string | number;
  height?: string | number;
  className?: string;
}> = ({ width = '100%', height = '1rem', className = '' }) => (
  <div
    className={`bg-gray-700/50 rounded animate-pulse ${className}`}
    style={{ width, height }}
  />
);

export default PageLoader;