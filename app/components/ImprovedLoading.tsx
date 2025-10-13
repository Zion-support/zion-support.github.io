import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'minimal';
  showIcon?: boolean;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  variant = 'default',
  showIcon = true,
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const containerClasses = fullScreen
    ? 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4'
    : 'flex items-center justify-center p-8';

  const renderIcon = () => {
    if (!showIcon) return null;

    switch (variant) {
      case 'futuristic':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin`} />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          </div>
        );
      case 'minimal':
        return <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />;
      default:
        return (
          <div className="relative">
            <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
            <div className="absolute inset-0 animate-ping">
              <div className={`${sizeClasses[size]} rounded-full bg-cyan-400/20`} />
            </div>
          </div>
        );
    }
  };

  const renderFuturisticMessage = () => {
    const icons = [Zap, Brain, Shield, Globe];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    const Icon = randomIcon;

    return (
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded animate-pulse" />
            <div className="h-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded animate-pulse w-3/4 mx-auto" />
          </div>
        </div>
        <p className="text-cyan-400 text-sm font-medium animate-pulse">
          {message}
        </p>
      </div>
    );
  };

  const renderDefaultMessage = () => (
    <div className="text-center">
      {renderIcon()}
      <p className={`${textSizeClasses[size]} text-gray-300 mt-4 font-medium`}>
        {message}
      </p>
    </div>
  );

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {variant === 'futuristic' ? renderFuturisticMessage() : renderDefaultMessage()}
        
        {variant === 'futuristic' && (
          <div className="mt-6 space-y-2">
            <div className="flex space-x-1 justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Initializing Zion Tech Group...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loading;