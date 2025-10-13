import React from 'react';

interface LoadingPageProps {
  message?: string;
  fullScreen?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  fullScreen = true 
}) => {
  const containerClass = fullScreen 
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center">
        <div className="relative">
          {/* Animated spinner */}
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin"></div>
          </div>
          
          {/* Pulsing dots */}
          <div className="flex justify-center space-x-1 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">
          {message}
        </h2>
        
        <p className="text-gray-400 text-sm">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="w-full h-full rounded-full border-2 border-cyan-500/20 border-t-cyan-500"></div>
    </div>
  );
};

export const LoadingCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
        <div className="h-4 bg-white/20 rounded w-1/2"></div>
        <div className="h-4 bg-white/20 rounded w-5/6"></div>
        {children}
      </div>
    </div>
  );
};

export const LoadingButton: React.FC<{ 
  loading?: boolean; 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ loading = false, children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        loading 
          ? 'bg-gray-500 cursor-not-allowed' 
          : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
      } ${className}`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </button>
  );
};

export default LoadingPage;
