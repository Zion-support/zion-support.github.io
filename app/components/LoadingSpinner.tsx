import React from 'react';
import { Loader2, Zap, Brain, Shield, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'cyber' | 'pulse' | 'dots';
  text?: string;
  showIcon?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showIcon = true,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'cyber':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-2 border-cyan-500/30 rounded-full`}>
              <div className="absolute inset-0 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-1 border-2 border-cyan-400/50 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
            </div>
            <div className="absolute inset-0 animate-ping">
              <div className={`${sizeClasses[size]} bg-cyan-500/20 rounded-full`}></div>
            </div>
          </div>
        );
      
      case 'pulse':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s',
                }}
              ></div>
            ))}
          </div>
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s',
                }}
              ></div>
            ))}
          </div>
        );
      
      default:
        return (
          <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-500`} />
        );
    }
  };

  const renderIcon = () => {
    if (!showIcon) return null;

    const icons = [Zap, Brain, Shield, Globe];
    const Icon = icons[Math.floor(Math.random() * icons.length)];

    return (
      <div className="mb-4 animate-float">
        <Icon className={`${iconSizeClasses[size]} text-cyan-400 mx-auto`} />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {renderIcon()}
      <div className="mb-4">
        {renderSpinner()}
      </div>
      <p className={`${textSizeClasses[size]} text-gray-300 font-medium animate-pulse`}>
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;