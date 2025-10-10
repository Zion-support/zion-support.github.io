import React from 'react';
import { Loader2, Brain, Zap, Cloud, Code } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{text}</p>
      )}
    </div>
  );
};

interface SkeletonProps {
  className?: string;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  lines = 1,
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"
          style={{
            width: `${Math.random() * 40 + 60}%`,
          }}
        />
      ))}
    </div>
  );
};

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = 'Loading...',
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
        <p className="text-gray-400">Please wait while we prepare everything for you...</p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'it' | 'saas' | 'quantum';
  message?: string;
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({
  service,
  message,
}) => {
  const serviceConfig = {
    ai: {
      icon: Brain,
      color: 'from-purple-400 to-pink-600',
      defaultMessage: 'Initializing AI systems...',
    },
    it: {
      icon: Cloud,
      color: 'from-blue-400 to-cyan-600',
      defaultMessage: 'Setting up infrastructure...',
    },
    saas: {
      icon: Code,
      color: 'from-green-400 to-blue-600',
      defaultMessage: 'Loading micro SAAS tools...',
    },
    quantum: {
      icon: Zap,
      color: 'from-yellow-400 to-orange-600',
      defaultMessage: 'Calibrating quantum processors...',
    },
  };

  const config = serviceConfig[service];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mb-4 animate-pulse`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {message || config.defaultMessage}
      </h3>
      <div className="w-8 h-1 bg-gray-600 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${config.color} rounded-full animate-pulse`}></div>
      </div>
    </div>
  );
};