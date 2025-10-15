<<<<<<< HEAD
=======
import React from 'react';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  text?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} />
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]} font-medium`}>
          {text}
        </p>
      )}
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
          className={`h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = "Loading...",
  showProgress = false,
  progress = 0
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        
        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">{progress}% Complete</p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'it' | 'cybersecurity' | 'cloud' | '5g';
  message?: string;
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({
  service,
  message = "Loading service..."
}) => {
  const serviceConfig = {
    ai: {
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      text: 'AI Solutions'
    },
    it: {
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      text: 'IT Services'
    },
    cybersecurity: {
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      text: 'Cybersecurity'
    },
    cloud: {
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      text: 'Cloud Solutions'
    },
    '5g': {
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      text: '5G Solutions'
    }
  };

  const config = serviceConfig[service];
  const IconComponent = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center mb-4 animate-pulse`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{config.text}</h3>
      <p className="text-gray-400 text-sm">{message}</p>
      <div className="mt-4">
        <LoadingSpinner size="md" color="primary" />
      </div>
    </div>
  );
};

interface CardSkeletonProps {
  count?: number;
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  count = 3,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse"
        >
          {/* Icon Skeleton */}
          <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
          
          {/* Title Skeleton */}
          <div className="h-6 bg-slate-700 rounded mb-3"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          </div>
          
          {/* Button Skeleton */}
          <div className="h-10 bg-slate-700 rounded"></div>
        </div>
      ))}
    </div>
  );
};

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 5,
  columns = 4,
  className = ''
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-pulse">
        {/* Header */}
        <div className="flex space-x-4 mb-4">
          {Array.from({ length: columns }).map((_, index) => (
            <div key={index} className="h-4 bg-slate-700 rounded flex-1"></div>
          ))}
        </div>
        
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4 mb-2">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`h-4 bg-slate-700 rounded ${
                  colIndex === columns - 1 ? 'w-1/2' : 'flex-1'
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Loading Page Component
export const LoadingPage: React.FC = () => {
  return (
    <PageLoader
      message="Loading Zion Tech Group..."
      showProgress={true}
      progress={75}
    />
  );
};

// Service-specific loading components
export const AILoadingPage: React.FC = () => (
  <ServiceLoader service="ai" message="Initializing AI solutions..." />
);

export const ITLoadingPage: React.FC = () => (
  <ServiceLoader service="it" message="Loading IT services..." />
);

export const CybersecurityLoadingPage: React.FC = () => (
  <ServiceLoader service="cybersecurity" message="Securing your data..." />
);

export const CloudLoadingPage: React.FC = () => (
  <ServiceLoader service="cloud" message="Connecting to cloud..." />
);

export const FiveGLoadingPage: React.FC = () => (
  <ServiceLoader service="5g" message="Establishing 5G connection..." />
);
>>>>>>> cursor/analyze-improve-and-deploy-application-a84d
