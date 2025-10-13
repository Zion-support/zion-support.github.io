import React from 'react';
import { Loader2, Zap, Sparkles } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'spinner' | 'pulse';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (type === 'spinner') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin mx-auto mb-4`} />
          <p className={`${textSizeClasses[size]} text-gray-300`}>{message}</p>
        </div>
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse mx-auto mb-4`} />
          <p className={`${textSizeClasses[size]} text-gray-300`}>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse`} />
          <Zap className={`${sizeClasses[size]} text-white absolute top-0 left-0 animate-bounce`} />
        </div>
        <p className={`${textSizeClasses[size]} text-gray-300 mt-4`}>{message}</p>
        <div className="flex items-center justify-center mt-2">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;