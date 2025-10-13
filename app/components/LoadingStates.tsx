import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ type = 'loading' }) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 text-cyan-400 mx-auto mb-4">
          {getIcon()}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export default LoadingPage;
