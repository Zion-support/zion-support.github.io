import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-8">
            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-ping opacity-20"></div>
            </div>
          </div>
        )}
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>
        
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Please wait...</span>
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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-white animate-spin" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">Please wait while we load your content...</p>
        </div>
      </div>
    </div>
  );
};

export const LoadingButton: React.FC<{ 
  loading: boolean; 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ loading, children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors ${className}`}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export const LoadingOverlay: React.FC<{ 
  isVisible: boolean; 
  message?: string;
}> = ({ isVisible, message = "Loading..." }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{message}</h3>
          <p className="text-gray-300 text-sm">Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
