'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
  );
};

export const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>
  );
};

export const LoadingPulse: React.FC = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const LoadingRings: React.FC = () => {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" />
      <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse' }} />
    </div>
  );
};

export const LoadingWaves: React.FC = () => {
  return (
    <div className="flex space-x-1">
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }} />
      ))}
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded w-3/4" />
    </div>
  );
};