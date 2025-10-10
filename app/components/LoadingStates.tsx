'use client';
import React from 'react';
import { Loader2, Zap, Brain, Cloud, Shield } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', children }) => (
  <div className={`animate-pulse bg-gray-300/20 rounded ${className}`}>
    {children}
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
        <Zap className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-300">Please wait while we prepare your experience</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-300/20 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-300/20 rounded mb-3 w-3/4"></div>
    <div className="h-4 bg-gray-300/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
  </div>
);

export const NavigationSkeleton: React.FC = () => (
  <nav className="bg-white/5 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Skeleton className="w-32 h-8" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Skeleton className="w-16 h-4" />
          <Skeleton className="w-20 h-4" />
          <Skeleton className="w-18 h-4" />
          <Skeleton className="w-24 h-4" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="w-24 h-8" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  </nav>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-8">
    <div className="text-center">
      <Skeleton className="h-12 w-96 mx-auto mb-4" />
      <Skeleton className="h-6 w-80 mx-auto mb-8" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="text-center">
        <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
        <Skeleton className="h-8 w-20 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>
    ))}
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-5 h-5 rounded mr-1" />
        ))}
      </div>
      <Skeleton className="h-6 w-full mb-6" />
      <div>
        <Skeleton className="h-5 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-40 mx-auto" />
      </div>
    </div>
  </div>
);

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

interface FeatureLoadingProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

export const FeatureLoading: React.FC<FeatureLoadingProps> = ({ icon: Icon, title }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  </div>
);

export const HeroLoading: React.FC = () => (
  <section className="relative py-20 px-4 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="relative max-w-7xl mx-auto text-center">
      <Skeleton className="h-16 w-96 mx-auto mb-6" />
      <Skeleton className="h-6 w-80 mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-28" />
      </div>
    </div>
  </section>
);