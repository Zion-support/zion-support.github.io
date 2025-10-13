import React from 'react';
import { Loader2, Zap, Brain, Shield } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true,
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const icons = [Zap, Brain, Shield];
  const RandomIcon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        {showIcon && (
          <div className="relative mb-6">
            <Loader2 className={`${sizeClasses[size]} text-blue-400 animate-spin mx-auto`} />
            <RandomIcon className={`${sizeClasses[size]} text-cyan-400 absolute top-0 left-1/2 transform -translate-x-1/2 animate-pulse`} />
          </div>
        )}
        <h2 className={`${textSizeClasses[size]} font-semibold text-white mb-2`}>
          {message}
        </h2>
        <p className="text-gray-400">Please wait while we load the content</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 ${className}`}>
      <div className="animate-pulse">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-4"></div>
        <div className="h-3 bg-gray-600 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-600 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-600 rounded" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
      ))}
    </div>
  );
};

export default LoadingPage;