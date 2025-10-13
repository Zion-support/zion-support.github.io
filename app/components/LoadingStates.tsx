import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
  type?: 'loading' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true,
  type = 'loading',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <Shield className={`${iconSizeClasses[size]} text-red-400`} />;
      case 'success':
        return <Zap className={`${iconSizeClasses[size]} text-green-400`} />;
      default:
        return <Brain className={`${iconSizeClasses[size]} text-white`} />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'error':
        return 'from-red-500 to-pink-600';
      case 'success':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-8">
            <div className="relative">
              <div className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center animate-pulse`}>
                {getIcon()}
              </div>
              {type === 'loading' && (
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
              )}
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        {type === 'loading' && (
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
            <span className="text-gray-300">Please wait...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
  );
};

export const LoadingCard: React.FC<{ message?: string }> = ({ message = "Loading..." }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-center space-x-3">
        <LoadingSpinner size="md" />
        <span className="text-gray-300">{message}</span>
      </div>
    </div>
  );
};

export const LoadingGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} message={`Loading item ${index + 1}...`} />
      ))}
    </div>
  );
};

export const LoadingButton: React.FC<{ 
  loading?: boolean; 
  children: React.ReactNode;
  className?: string;
}> = ({ loading = false, children, className = "" }) => {
  return (
    <button 
      className={`flex items-center justify-center space-x-2 ${className}`}
      disabled={loading}
    >
      {loading && <LoadingSpinner size="sm" />}
      <span>{children}</span>
    </button>
  );
};

export default LoadingPage;