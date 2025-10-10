'use client';

import React from 'react';
import { Loader2, Zap, Brain, Cloud, Shield } from 'lucide-react';

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
        <div className="relative mb-8">
          <div className="w-20 h-20 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
        <p className="text-gray-300">Please wait while we load the content...</p>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'cloud' | 'security' | 'general';
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({ service }) => {
  const serviceConfig = {
    ai: {
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      text: 'AI Solutions'
    },
    cloud: {
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      text: 'Cloud Services'
    },
    security: {
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      text: 'Security Solutions'
    },
    general: {
      icon: Zap,
      color: 'from-cyan-500 to-purple-500',
      text: 'Services'
    }
  };

  const config = serviceConfig[service];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse`}>
          <config.icon className="w-8 h-8 text-white" />
        </div>
        <p className="text-gray-300">Loading {config.text}...</p>
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
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
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
    <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 animate-pulse ${className}`}>
      <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

interface ButtonLoaderProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({ 
  loading = false, 
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