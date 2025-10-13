import React from 'react';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 
        className={`${sizeClasses[size]} text-cyan-400 animate-spin`}
        data-testid="loading-spinner"
      />
      {text && (
        <p className="mt-2 text-gray-300 text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showProgress = false,
  progress = 0 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-cyan-500/20 rounded-full animate-pulse"></div>
            <div className="absolute w-24 h-24 border-4 border-purple-500/20 rounded-full animate-ping"></div>
          </div>
          
          {/* Main loading icon */}
          <div className="relative z-10 w-16 h-16 mx-auto">
            <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}% complete</p>
          </div>
        )}

        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoadingProps {
  service: 'ai' | 'it' | 'saas' | '5g';
  message?: string;
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ 
  service, 
  message 
}) => {
  const serviceConfig = {
    ai: {
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      defaultMessage: 'Loading AI Services...',
    },
    it: {
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      defaultMessage: 'Loading IT Solutions...',
    },
    saas: {
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      defaultMessage: 'Loading Micro SAAS...',
    },
    5g: {
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      defaultMessage: 'Loading 5G Solutions...',
    },
  };

  const config = serviceConfig[service];
  const Icon = config.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center mx-auto shadow-2xl`}>
            <Icon className="w-10 h-10 text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-ping mx-auto"></div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          {message || config.defaultMessage}
        </h2>

        <div className="w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-1">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-1 rounded-full animate-pulse"></div>
          </div>
        </div>
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
          className={`h-4 bg-gray-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

interface CardSkeletonProps {
  count?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse"
        >
          <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;