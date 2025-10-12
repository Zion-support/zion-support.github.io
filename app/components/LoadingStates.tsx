import React from 'react';
import { Loader2, Zap, Brain, Cloud, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <Loader2 
      className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} 
    />
  );
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
      <p className="text-gray-300">Please wait while we prepare your experience</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-pulse">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4"></div>
      <div className="flex-1">
        <div className="h-6 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
    <div className="h-8 bg-gray-700 rounded"></div>
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-4/6"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const CyberLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="relative">
      {/* Main loader */}
      <div className="w-32 h-32 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
      
      {/* Orbiting elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
        <div className="w-4 h-4 bg-purple-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
        <div className="w-3 h-3 bg-pink-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
      </div>
    </div>
  </div>
);

export const FeatureLoader: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700 animate-pulse">
        <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-700 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-4/5"></div>
        </div>
      </div>
    ))}
  </div>
);

export const StatsLoader: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="text-center animate-pulse">
        <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4"></div>
        <div className="h-8 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
      </div>
    ))}
  </div>
);