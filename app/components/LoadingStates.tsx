import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'error' | 'success';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const iconSize = sizeClasses[size];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {type === 'loading' && <Loader2 className={`${iconSize} text-cyan-400 animate-spin`} />}
          {type === 'error' && <Brain className={`${iconSize} text-red-400`} />}
          {type === 'success' && <Shield className={`${iconSize} text-green-400`} />}
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
        {type === 'loading' && (
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export { LoadingPage };