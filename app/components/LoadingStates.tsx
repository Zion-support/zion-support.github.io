import React from 'react';
import { Loader2, Brain, Shield, Zap, Activity } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message, 
  variant = 'futuristic' 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'performance':
        return <Activity className="w-8 h-8 text-purple-400" />;
      case 'global':
        return <Zap className="w-8 h-8 text-yellow-400" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />;
    }
  };

  const getMessage = () => {
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

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />
          <p className="text-gray-300 text-sm">{getMessage()}</p>
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">{getMessage()}</h2>
          <p className="text-gray-300">Please wait while we load the content</p>
        </div>
      </div>
    );
  }

  // Futuristic variant (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
            {getIcon()}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            {getMessage()}
          </span>
        </h2>
        
        <div className="flex justify-center space-x-1 mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-gray-300 max-w-md mx-auto">
          {type === 'ai' && 'Preparing advanced AI algorithms and machine learning models...'}
          {type === 'security' && 'Activating security protocols and encryption systems...'}
          {type === 'performance' && 'Optimizing code and resources for maximum performance...'}
          {type === 'global' && 'Synchronizing global services and infrastructure...'}
          {type === 'loading' && 'Please wait while we prepare everything for you...'}
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
