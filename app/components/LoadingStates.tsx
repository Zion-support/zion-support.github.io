import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'ai' | 'security' | 'performance' | 'global' | 'default';
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'default', 
  size = 'md', 
  message = 'Loading...' 
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className={`${getSizeClasses()} text-cyan-400 mx-auto mb-4`}>
          {getIcon()}
        </div>
        <p className="text-gray-300 text-lg">{message}</p>
      </div>
    </div>
  );
};

export { LoadingPage };
export default LoadingPage;
