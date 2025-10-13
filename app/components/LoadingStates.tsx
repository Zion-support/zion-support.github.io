import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message 
}) => {
  const getLoadingMessage = () => {
    if (message) return message;
    
    switch (type) {
      case 'ai':
        return 'Initializing AI systems...';
      case 'security':
        return 'Loading security protocols...';
      case 'performance':
        return 'Optimizing performance...';
      case 'global':
        return 'Loading global services...';
      default:
        return 'Loading...';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-6" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-ping mx-auto"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {getLoadingMessage()}
        </h2>
        
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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

export const LoadingOverlay: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800/90 backdrop-blur-lg rounded-lg p-6 border border-white/20">
        <div className="flex items-center space-x-3">
          <LoadingSpinner />
          <span className="text-white font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
};