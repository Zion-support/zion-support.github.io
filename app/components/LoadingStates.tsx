import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  message = "Loading...",
  showProgress = false,
  progress = 0
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <Loader2 className="w-12 h-12 text-white animate-spin" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-bounce"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-slate-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{progress}% complete</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-slate-700 rounded ${className}`}></div>
  );
};

export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} text-white animate-spin`} />
  );
};

export const LoadingCard: React.FC<{ title?: string }> = ({ title = "Loading..." }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
      <div className="flex items-center space-x-3 mb-4">
        <Spinner size="sm" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        <SkeletonLoader className="h-4 w-full" />
        <SkeletonLoader className="h-4 w-3/4" />
        <SkeletonLoader className="h-4 w-1/2" />
      </div>
    </div>
  );
};

export const LoadingGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <LoadingCard key={index} title={`Loading item ${index + 1}`} />
      ))}
    </div>
  );
};

export const LoadingButton: React.FC<{ 
  loading?: boolean; 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ loading = false, children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 ${className}`}
    >
      {loading && <Spinner size="sm" />}
      <span>{children}</span>
    </button>
  );
};

export default LoadingPage;