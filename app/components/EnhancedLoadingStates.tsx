'use client';
import React from 'react';
import { Loader2, Brain, Cloud, Shield, Code, Zap } from 'lucide-react';

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
  showProgress?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = 'Loading...', 
  showProgress = false 
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + Math.random() * 10;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <Brain className="w-10 h-10 text-white animate-bounce" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-ping">
            <Zap className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>
        
        {showProgress && (
          <div className="w-64 bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        )}
        
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'it' | 'saas' | 'cloud' | 'security' | 'code';
  message?: string;
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({ 
  service, 
  message = 'Loading service...' 
}) => {
  const serviceConfig = {
    ai: { icon: Brain, color: 'from-purple-500 to-pink-500', text: 'AI Solutions' },
    it: { icon: Code, color: 'from-blue-500 to-cyan-500', text: 'IT Services' },
    saas: { icon: Zap, color: 'from-green-500 to-emerald-500', text: 'Micro SAAS' },
    cloud: { icon: Cloud, color: 'from-cyan-500 to-blue-500', text: 'Cloud Services' },
    security: { icon: Shield, color: 'from-red-500 to-orange-500', text: 'Security Solutions' },
    code: { icon: Code, color: 'from-indigo-500 to-purple-500', text: 'Development' }
  };

  const config = serviceConfig[service];
  const IconComponent = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mb-4 animate-pulse`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {config.text}
      </h3>
      <p className="text-gray-300 text-sm mb-4">
        {message}
      </p>
      <LoadingSpinner size="md" className="text-purple-400" />
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
          className={`h-4 bg-gray-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface CardSkeletonProps {
  count?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-6 animate-pulse">
          <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4" />
          <div className="h-6 bg-gray-700 rounded mb-2" />
          <div className="h-4 bg-gray-700 rounded mb-2" />
          <div className="h-4 bg-gray-700 rounded w-3/4" />
        </div>
      ))}
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
      className={`inline-flex items-center justify-center ${className}`}
      disabled={loading}
    >
      {loading && <LoadingSpinner size="sm" className="mr-2" />}
      {children}
    </button>
  );
};