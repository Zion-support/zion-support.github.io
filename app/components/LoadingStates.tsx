import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ type = 'loading' }) => {
  const getLoadingText = () => {
    switch (type) {
      case 'ai':
        return 'Initializing AI Systems...';
      case 'security':
        return 'Loading Security Protocols...';
      case 'performance':
        return 'Optimizing Performance...';
      case 'global':
        return 'Loading Global Services...';
      default:
        return 'Loading...';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Loader2 className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
          <div className="absolute inset-0 w-16 h-16 border-2 border-purple-400/20 rounded-full animate-ping mx-auto" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">
          {getLoadingText()}
        </h2>
        <p className="text-gray-400">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
