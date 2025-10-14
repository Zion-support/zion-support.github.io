import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <Brain className="h-8 w-8 text-cyan-400 animate-pulse" />
          <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
          <Shield className="h-8 w-8 text-cyan-400 animate-pulse" />
          <Globe className="h-8 w-8 text-cyan-400 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h2>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export default Loading;