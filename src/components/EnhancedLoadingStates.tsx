import React from 'react';
import { Loader2, Brain, Zap, Cloud, Code } from 'lucide-react';

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
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
};

interface PageLoaderProps {
  message?: string;
  showIcon?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading...", 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        {showIcon && (
          <div className="relative mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
        )}
        <div className="space-y-4">
          <LoadingSpinner size="lg" className="text-cyan-400 mx-auto" />
          <p className="text-xl text-gray-300 font-medium">{message}</p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'micro' | 'it' | 'quantum';
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({ service }) => {
  const serviceIcons = {
    ai: Brain,
    micro: Code,
    it: Cloud,
    quantum: Zap
  };

  const serviceColors = {
    ai: 'from-purple-400 to-pink-500',
    micro: 'from-cyan-400 to-blue-500',
    it: 'from-green-400 to-emerald-500',
    quantum: 'from-yellow-400 to-orange-500'
  };

  const Icon = serviceIcons[service];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${serviceColors[service]} rounded-full flex items-center justify-center mb-4 animate-pulse`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <LoadingSpinner size="md" className="text-cyan-400" />
      </div>
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-700 rounded ${
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

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          <div className="h-4 bg-gray-700 rounded w-20"></div>
        </div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-700 rounded w-full"></div>
          <div className="h-3 bg-gray-700 rounded w-4/5"></div>
          <div className="h-3 bg-gray-700 rounded w-3/5"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-700 rounded w-16"></div>
          <div className="h-4 bg-gray-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;