'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'

export const PageLoader: React.FC = () => {
import React from 'react';
'use client';
import React from 'react';
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react';

import { Loader2, Brain, Shield, Zap, Activity } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  variant = "futuristic" 
}) => {
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white text-lg">{message}</span>
        </div>
      </div>
    );
  }

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
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

  // Futuristic variant
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Optimized animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500 will-change-transform"></div>
      </div>
    );
  }

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Zion Tech Group</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Loading animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-400">Preparing your experience...</p>
        </div>

        {/* Service icons animation */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-lg flex items-center justify-center animate-pulse">
            <Brain className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-purple-500/20 rounded-lg flex items-center justify-center animate-pulse delay-200">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-md border border-pink-500/20 rounded-lg flex items-center justify-center animate-pulse delay-400">
            <Globe className="w-6 h-6 text-pink-400" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-slate-800/50 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-400">Initializing advanced systems...</p>
        </div>
      </div>
    </div>
  );
};
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
      </div>
    );
  }

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center>
      <div className="text-center>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4>
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2>Loading...</h2>
        <p className="text-gray-300>Please wait while we load the page</p>
import React from 'react';

export const PageLoader: React.FC = () => {
export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>;
  );
export const ComponentLoader: React.FC = () => {}
  return (

    <div className="flex items-center justify-center p-8>
      <div className="flex items-center space-x-2 text-cyan-400>
        <Loader2 className="w-5 h-5 animate-spin />

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-2 text-cyan-400">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Loading component...</span>
      </div>
    </div>
  );
export const ServiceCardSkeleton: React.FC = () => {}
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse>
      <div className="h-4 bg-slate-700 rounded mb-4></div>
      <div className="h-3 bg-slate-700 rounded mb-2></div>
      <div className="h-3 bg-slate-700 rounded mb-4></div>
      <div $2></div>
  );

}
export const ContentSkeleton: React.FC = () => {}
  return (

    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse>
      <div className="h-6 bg-slate-700 rounded mb-4></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div className="h-4 bg-slate-700 rounded mb-2></div>
      <div $2></div>
  );

};
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
export default LoadingPage;
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse">
      <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
    </div>
  );
};

export default LoadingPage;
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
    <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} />
  );
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Loading Zion Tech Group
      </h2>
      
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      <p className="text-gray-400 text-sm mt-4">
        Preparing your AI-powered experience...
      </p>
    </div>
  </div>
);

export const ServiceLoader: React.FC<{ service: string }> = ({ service }) => {
  const serviceIcons = {
    ai: Brain,
    cloud: Cloud,
    security: Shield,
    development: Code
  };

  const Icon = serviceIcons[service as keyof typeof serviceIcons] || Brain;

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          Loading {service.toUpperCase()} Services
        </h3>
        <LoadingSpinner size="md" />
      </div>
    </div>
  );
};

export const CardLoader: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-pulse">
        <div className="w-12 h-12 bg-gray-700/50 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-700/50 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700/50 rounded"></div>
          <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        </div>
      </div>
    ))}
  </div>
);

export const TableLoader: React.FC<{ rows?: number; cols?: number }> = ({ 
  rows = 5, 
  cols = 4 
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-700/50 animate-pulse">
    <div className="bg-slate-800/50 p-4">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(cols)].map((_, i) => (
          <div key={i} className="h-5 bg-gray-700/50 rounded"></div>
        ))}
      </div>
    </div>
    {[...Array(rows)].map((_, rowIndex) => (
      <div key={rowIndex} className="border-t border-gray-700/50 p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {[...Array(cols)].map((_, colIndex) => (
            <div key={colIndex} className="h-4 bg-gray-700/50 rounded"></div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ButtonLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center">
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
);

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center text-gray-400 text-sm">
    <LoadingSpinner size="sm" className="mr-2" />
    <span>{text}</span>
  </div>
);

export const FullScreenLoader: React.FC<{ message?: string }> = ({ 
  message = 'Loading...' 
}) => (
  <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      <LoadingSpinner size="lg" />
    </div>
  </div>
);

export const SkeletonLoader: React.FC<{ 
  width?: string | number;
  height?: string | number;
  className?: string;
}> = ({ width = '100%', height = '1rem', className = '' }) => (
  <div
    className={`bg-gray-700/50 rounded animate-pulse ${className}`}
    style={{ width, height }}
  />
);

export default PageLoader;
