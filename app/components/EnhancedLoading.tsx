import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, CheckCircle, XCircle } from 'lucide-react';

interface LoadingProps {
  type?: 'loading' | 'success' | 'error';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'minimal';
  showIcon?: boolean;
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  type = 'loading',
  message = 'Loading...',
  size = 'md',
  variant = 'default',
  showIcon = true
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className={`${sizeClasses[size]} text-green-400`} />;
      case 'error':
        return <XCircle className={`${sizeClasses[size]} text-red-400`} />;
      default:
        return <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'success':
        return 'from-green-500 to-green-600';
      case 'error':
        return 'from-red-500 to-red-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-4">
        {showIcon && getIcon()}
        <span className={`ml-2 text-gray-300 ${textSizes[size]}`}>
          {message}
        </span>
      </div>
    );
  }

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="text-center relative z-10">
          {showIcon && (
            <div className="mb-8">
              <div className="relative">
                <div className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center animate-pulse`}>
                  {type === 'loading' ? <Brain className="w-8 h-8 text-white" /> : getIcon()}
                </div>
                {type === 'loading' && (
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
                )}
              </div>
            </div>
          )}
          <h2 className={`${textSizes[size]} font-bold text-white mb-4`}>
            {message}
          </h2>
          {type === 'loading' && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-8">
            <div className="relative">
              <div className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center animate-pulse`}>
                {type === 'loading' ? <Brain className="w-8 h-8 text-white" /> : getIcon()}
              </div>
              {type === 'loading' && (
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
              )}
            </div>
          </div>
        )}
        <h2 className={`${textSizes[size]} font-bold text-white mb-4`}>
          {message}
        </h2>
        {type === 'loading' && (
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
            <span className="text-gray-300">Please wait...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedLoading;