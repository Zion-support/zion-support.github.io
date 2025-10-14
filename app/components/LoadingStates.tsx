import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic';
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md',
  variant = 'futuristic'
}) => {
  const getIcon = () => {
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

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  if (variant === 'default') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-400">Please wait while we load the content...</p>
        </div>
      </div>
    );
  }

  // Futuristic variant
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className={`${getSizeClasses()} text-cyan-400 mx-auto mb-4`}>
          {getIcon()}
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
        <div className="mt-4 flex justify-center">
          <div className="animate-pulse flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoadingPage };
export default LoadingPage;