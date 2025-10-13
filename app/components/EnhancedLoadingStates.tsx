import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    accent: 'text-pink-500'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Loader2 className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} />
      {text && (
        <p className={`text-sm ${colorClasses[color]} font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
};

export const PageLoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mt-4 mb-2">
          Loading Zion Tech Group
        </h2>
        <p className="text-gray-300 text-sm">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

export const ComponentLoadingSpinner: React.FC<{ message?: string }> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-300 text-sm">{message}</p>
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ 
  lines?: number; 
  className?: string 
}> = ({ lines = 3, className = "" }) => {
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

export const CardSkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
    </div>
  );
};

export const TableSkeletonLoader: React.FC<{ 
  rows?: number; 
  columns?: number 
}> = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="animate-pulse">
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`h-4 bg-gray-700 rounded ${
                  colIndex === 0 ? 'w-1/4' : 
                  colIndex === columns - 1 ? 'w-1/6' : 'w-1/3'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ErrorLoadingState: React.FC<{ 
  message?: string; 
  onRetry?: () => void 
}> = ({ 
  message = "Something went wrong while loading.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
        <Shield className="w-8 h-8 text-red-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        Loading Error
      </h3>
      <p className="text-gray-300 text-sm mb-4 max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export const EmptyState: React.FC<{ 
  title: string; 
  description: string; 
  icon?: React.ReactNode;
  action?: React.ReactNode;
}> = ({ 
  title, 
  description, 
  icon = <Brain className="w-12 h-12 text-gray-400" />,
  action 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-gray-700/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 max-w-md">
        {description}
      </p>
      {action}
    </div>
  );
};

// Main loading page component
export const LoadingPage: React.FC = () => {
  return <PageLoadingSpinner />;
};