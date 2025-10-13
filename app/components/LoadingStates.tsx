import React from 'react';
import { Loader2, Zap } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <Loader2 className="w-6 h-6 text-blue-400 animate-spin absolute -bottom-2 -right-2" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300 text-sm">Please wait while we prepare everything for you</p>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <Loader2 className={`${sizeClasses[size]} text-blue-400 animate-spin`} />
  );
};

export const LoadingCard: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center mb-4">
        <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
      <p className="text-gray-300">{message}</p>
    </div>
  );
};

export const LoadingButton: React.FC<{ 
  loading: boolean; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = ({ loading, children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
        loading 
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      } ${className}`}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      <span>{children}</span>
    </button>
  );
};

export default LoadingPage;