import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface ImprovedLoadingStatesProps {
  type?: 'spinner' | 'icons' | 'pulse' | 'wave';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ImprovedLoadingStates: React.FC<ImprovedLoadingStatesProps> = ({ 
  type = 'spinner',
  message = 'Loading...',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderLoadingContent = () => {
    switch (type) {
      case 'icons':
        return (
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.6s' }}>
              <Globe className="w-4 h-4 text-white" />
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div className="flex justify-center space-x-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );

      case 'wave':
        return (
          <div className="flex justify-center space-x-1 mb-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-cyan-400 rounded-full animate-pulse"
                style={{ 
                  height: `${20 + i * 4}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center mb-6">
            <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {renderLoadingContent()}
        <p className="text-gray-400 text-sm">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ImprovedLoadingStates;