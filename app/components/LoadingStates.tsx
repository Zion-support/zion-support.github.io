import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading Zion Tech Group..." 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto animate-ping opacity-20"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>
        
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Please wait...</span>
        </div>
        
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              Initializing AI-powered solutions...
            </p>
          </div>
        </div>
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

export const LoadingCard: React.FC<{ title?: string }> = ({ title = "Loading..." }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg"></div>
        <div className="h-4 bg-white/20 rounded w-32"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-white/20 rounded w-full"></div>
        <div className="h-3 bg-white/20 rounded w-3/4"></div>
        <div className="h-3 bg-white/20 rounded w-1/2"></div>
      </div>
    </div>
  );
};
