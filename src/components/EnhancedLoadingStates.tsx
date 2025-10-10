import React from 'react';
import { Loader2, Brain, Zap, Shield } from 'lucide-react';

interface LoadingProps {
  message?: string;
  type?: 'default' | 'ai' | 'cyber' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
  );
};

const AILoadingIcon: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="relative">
      <Brain className={`${sizeClasses[size]} text-purple-400 animate-pulse`} />
      <div className="absolute inset-0 animate-ping">
        <Brain className={`${sizeClasses[size]} text-purple-400 opacity-20`} />
      </div>
    </div>
  );
};

const CyberLoadingIcon: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="relative">
      <Zap className={`${sizeClasses[size]} text-cyan-400 animate-bounce`} />
      <div className="absolute inset-0 animate-ping">
        <Shield className={`${sizeClasses[size]} text-cyan-400 opacity-30`} />
      </div>
    </div>
  );
};

const PageLoader: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  type = 'default',
  size = 'md'
}) => {
  const renderIcon = () => {
    switch (type) {
      case 'ai':
        return <AILoadingIcon size={size} />;
      case 'cyber':
        return <CyberLoadingIcon size={size} />;
      case 'minimal':
        return <LoadingSpinner size={size} />;
      default:
        return <LoadingSpinner size={size} />;
    }
  };

  const getContainerClasses = () => {
    switch (type) {
      case 'ai':
        return "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center";
      case 'cyber':
        return "min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 flex items-center justify-center";
      case 'minimal':
        return "flex items-center justify-center p-4";
      default:
        return "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center";
    }
  };

  const getTextClasses = () => {
    switch (type) {
      case 'ai':
        return "text-purple-400 text-lg font-semibold";
      case 'cyber':
        return "text-cyan-400 text-lg font-semibold";
      case 'minimal':
        return "text-gray-600 text-sm";
      default:
        return "text-white text-lg font-semibold";
    }
  };

  return (
    <div className={getContainerClasses()}>
      <div className="text-center">
        <div className="mb-4">
          {renderIcon()}
        </div>
        <p className={getTextClasses()}>
          {message}
        </p>
        {type === 'ai' && (
          <div className="mt-4 text-sm text-gray-400">
            Initializing AI systems...
          </div>
        )}
        {type === 'cyber' && (
          <div className="mt-4 text-sm text-gray-400">
            Connecting to secure networks...
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCardSkeleton: React.FC = () => (
  <div className="cyber-card p-6 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
  </div>
);

const ContentSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="h-4 bg-gray-700 rounded" style={{ width: `${100 - index * 10}%` }}></div>
    ))}
  </div>
);

const GridSkeleton: React.FC<{ count?: number; columns?: number }> = ({ 
  count = 6, 
  columns = 3 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
    {Array.from({ length: count }).map((_, index) => (
      <ServiceCardSkeleton key={index} />
    ))}
  </div>
);

export {
  PageLoader,
  ServiceCardSkeleton,
  ContentSkeleton,
  GridSkeleton,
  LoadingSpinner,
  AILoadingIcon,
  CyberLoadingIcon
};