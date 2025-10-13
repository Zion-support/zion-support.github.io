import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
}

const LoadingIcon = ({ type = 'loading' }: { type?: string }) => {
  switch (type) {
    case 'ai':
      return <Brain className="animate-pulse" />;
    case 'security':
      return <Shield className="animate-pulse" />;
    case 'performance':
      return <Zap className="animate-pulse" />;
    case 'global':
      return <Globe className="animate-pulse" />;
    default:
      return <Loader2 className="animate-spin" />;
  }
};

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...' 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 text-cyan-400">
          <LoadingIcon type={type} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-400 mt-4">Please wait while we prepare everything for you...</p>
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
    <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]}`} />
  );
};

export const LoadingCard: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-center mb-4">
        <LoadingSpinner size="lg" />
      </div>
      <p className="text-white text-center">{message}</p>
    </div>
  );
};
