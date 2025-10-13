import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

// Skeleton components for different content types
export const SkeletonCard: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4 mx-auto"></div>
    <div className="h-6 bg-gray-300 rounded mb-3"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-gray-300 rounded animate-pulse ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonButton: React.FC = () => (
  <div className="h-12 bg-gray-300 rounded-lg animate-pulse w-32"></div>
);

export const SkeletonImage: React.FC = () => (
  <div className="w-full h-48 bg-gray-300 rounded-lg animate-pulse"></div>
);

// Enhanced loading page with animations
export const EnhancedLoadingPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      {/* Animated logo/icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
          <Zap className="w-12 h-12 text-white animate-spin" />
        </div>
        <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Loading text with animation */}
      <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
        Loading Zion Tech Group
      </h2>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
      </div>

      {/* Loading message */}
      <p className="text-gray-300 animate-pulse">
        Preparing your experience...
      </p>
    </div>
  </div>
);

// Service-specific loading states
export const AIServiceLoading: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <Brain className="w-24 h-24 text-cyan-400 mx-auto animate-pulse" />
        <div className="absolute inset-0 w-24 h-24 mx-auto text-cyan-400 opacity-20 animate-ping">
          <Brain className="w-24 h-24" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading AI Solutions
      </h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
      </div>
      <p className="text-gray-300">
        Initializing AI algorithms...
      </p>
    </div>
  </div>
);

export const ITServiceLoading: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <Shield className="w-24 h-24 text-green-400 mx-auto animate-pulse" />
        <div className="absolute inset-0 w-24 h-24 mx-auto text-green-400 opacity-20 animate-ping">
          <Shield className="w-24 h-24" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading IT Services
      </h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4">
        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse"></div>
      </div>
      <p className="text-gray-300">
        Setting up infrastructure...
      </p>
    </div>
  </div>
);

export const FiveGServiceLoading: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <Globe className="w-24 h-24 text-orange-400 mx-auto animate-pulse" />
        <div className="absolute inset-0 w-24 h-24 mx-auto text-orange-400 opacity-20 animate-ping">
          <Globe className="w-24 h-24" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading 5G Solutions
      </h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4">
        <div className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse"></div>
      </div>
      <p className="text-gray-300">
        Connecting to 5G networks...
      </p>
    </div>
  </div>
);

// Inline loading spinner
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
  );
};

// Loading overlay for modals/dialogs
export const LoadingOverlay: React.FC<{ message?: string }> = ({ 
  message = 'Loading...' 
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
      <LoadingSpinner size="md" />
      <span className="text-gray-700">{message}</span>
    </div>
  </div>
);

// Skeleton grid for service cards
export const ServiceCardsSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Skeleton for testimonials
export const TestimonialsSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, j) => (
            <div key={j} className="w-5 h-5 bg-gray-300 rounded mr-1"></div>
          ))}
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Enhanced loading page with better UX
export const LoadingPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
          <Zap className="w-16 h-16 text-white animate-spin" />
        </div>
        <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 animate-ping"></div>
      </div>

      <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
        Zion Tech Group
      </h1>
      
      <div className="w-80 h-3 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
      </div>

      <p className="text-gray-300 text-lg animate-pulse">
        Loading advanced AI and IT solutions...
      </p>
    </div>
  </div>
);

export default LoadingPage;