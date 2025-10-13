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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
        <p className="text-gray-300">{getLoadingMessage()}</p>
      </div>
    </div>
  );
};

export default LoadingPage;
