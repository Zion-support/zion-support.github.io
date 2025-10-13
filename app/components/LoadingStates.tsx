<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client;

import React from 'react;

import { Loader2 } from 'lucide-react;
=======
'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export const PageLoader: React.FC = () => {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/ad-creation-and-management-f267
import React from 'react';
<<<<<<< HEAD
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we load the page</p>
=======
import { Loader2, Brain, Shield, Zap, Activity } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message, 
  variant = 'futuristic' 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'performance':
        return <Activity className="w-8 h-8 text-purple-400" />;
      case 'global':
        return <Zap className="w-8 h-8 text-yellow-400" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />;
    }
  };

  const getMessage = () => {
    if (message) return message;
    
    switch (type) {
      case 'ai':
        return 'Initializing AI systems...';
      case 'security':
        return 'Loading security protocols...';
      case 'performance':
        return 'Optimizing performance...';
      case 'global':
        return 'Loading global services...';
      default:
        return 'Loading...';
    }
  };

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
      </div>
    );
  }

  // Futuristic variant (default)
  return (
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

<<<<<<< HEAD
<<<<<<< HEAD
interface LoadingStatesProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

<<<<<<< HEAD
export default function LoadingStates({ isLoading, children, className = '' }: LoadingStatesProps) {
  if (isLoading) {
    return (
      <div className={`loading-states ${className}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p>Loading...</p>
=======
  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
      {text && (
        <p className="mt-2 text-gray-400 text-sm font-medium">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {spinner}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      </div>
    );
  }

<<<<<<< HEAD
  return <>{children}</>;
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center>
      <div className="text-center>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4>
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2>Loading...</h2>
        <p className="text-gray-300>Please wait while we load the page</p>
=======
import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      </div>
    </div>;
  );
<<<<<<< HEAD

}
<<<<<<< HEAD

export const ComponentLoader: React.FC = () => {
=======
export const ComponentLoader: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="flex items-center justify-center p-8>
      <div className="flex items-center space-x-2 text-cyan-400>
        <Loader2 className="w-5 h-5 animate-spin />
        <span>Loading component...</span>
      </div>
    </div>
  );

}
<<<<<<< HEAD

export const ServiceCardSkeleton: React.FC = () => {
=======
export const ServiceCardSkeleton: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse>
      <div className="h-4 bg-slate-700 rounded mb-4></div>
      <div className="h-3 bg-slate-700 rounded mb-2></div>
      <div className="h-3 bg-slate-700 rounded mb-4></div>
      <div $2></div>
  );

}
<<<<<<< HEAD

export const ContentSkeleton: React.FC = () => {
=======
export const ContentSkeleton: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse>
      <div className="h-6 bg-slate-700 rounded mb-4></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div $2></div>
  );

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
  return spinner;
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-slate-800 rounded-lg p-6 animate-pulse">
    <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-slate-700 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-slate-700 rounded w-2/3"></div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="bg-slate-800 rounded-lg p-6 animate-pulse">
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <div className="h-4 bg-slate-700 rounded w-1/4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/4"></div>
          <div className="h-4 bg-slate-700 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-slate-800 rounded-lg p-6 animate-pulse">
    <div className="h-4 bg-slate-700 rounded w-1/3 mb-4"></div>
    <div className="h-64 bg-slate-700 rounded"></div>
  </div>
);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
export default LoadingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
