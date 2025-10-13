<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client;
=======
import React from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import React from 'react;
=======
import React from 'react';
import { Loader2, Zap, Shield, Globe, Database } from 'lucide-react';

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
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4

import { Loader2 } from 'lucide-react;
export const PageLoader: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the page</p>
  type = 'loading', 
  message, 
  variant = 'futuristic' 
=======
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
};

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-6">
            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
        <p className="text-gray-300">Please wait while we prepare everything for you...</p>
        <div className="mt-6 flex justify-center">
          <LoadingSpinner size="lg" className="text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = "Loading...",
  description = "Please wait",
  icon
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
}) => {
  const getIcon = () => {
    switch (type) {

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />
          <p className="text-gray-300 text-sm">{getMessage()}</p>
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">{getMessage()}</h2>
          <p className="text-gray-300">Please wait while we load the content</p>
        </div>
  // Futuristic variant (default)
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
            {getIcon()}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            {getMessage()}
          </span>
        </h2>
        
        <div className="flex justify-center space-x-1 mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-gray-300 max-w-md mx-auto">
          {type === 'ai' && 'Preparing advanced AI algorithms and machine learning models...'}
          {type === 'security' && 'Activating security protocols and encryption systems...'}
          {type === 'performance' && 'Optimizing code and resources for maximum performance...'}
          {type === 'global' && 'Synchronizing global services and infrastructure...'}
          {type === 'loading' && 'Please wait while we prepare everything for you...'}
        </p>

interface LoadingStatesProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function LoadingStates({ isLoading, children, className = '' }: LoadingStatesProps) {
  if (isLoading) {
    return (
      <div className={`loading-states ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p>Loading...</p>
  return <>{children}</>;
}

}

export const ComponentLoader: React.FC = () => {

}

export const ServiceCardSkeleton: React.FC = () => {

export const ContentSkeleton: React.FC = () => {
export const ContentSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse">
      <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
=======
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center space-x-4">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        <LoadingSpinner size="md" className="text-cyan-400" />
=======
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the content</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
      </div>
    </div>
  );
};

<<<<<<< HEAD
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
          className={`h-4 bg-gray-300 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
    </div>
  );
};

<<<<<<< HEAD
export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
=======
interface ServiceLoadingProps {
  service: 'ai' | 'cybersecurity' | 'cloud' | '5g' | 'data';
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ service }) => {
  const serviceConfig = {
    ai: { icon: <Zap className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    cybersecurity: { icon: <Shield className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    cloud: { icon: <Globe className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    '5g': { icon: <Globe className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    data: { icon: <Database className="w-6 h-6" />, color: "from-indigo-500 to-purple-500" }
  };

  const config = serviceConfig[service];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <SkeletonLoader lines={2} />
        </div>
      </div>
      <SkeletonLoader lines={3} />
    </div>
  );
};

export default LoadingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
=======
export default LoadingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
