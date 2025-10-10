'use client';

import React from 'react';
import { Loader2, Zap, Brain, Shield } from 'lucide-react';

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-6"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-400">Please wait while we prepare everything for you</p>
    </div>
  </div>
);

export const ComponentLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-700 rounded"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6"></div>
      <div className="h-3 bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ServiceCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const FeatureLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }}>
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }}>
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Initializing AI Solutions</h2>
        <p className="text-gray-400 mb-6">Preparing advanced features for your experience</p>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-400">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>{text}</span>
    </div>
  );
};