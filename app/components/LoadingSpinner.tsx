import React from 'react';
import { Loader2, Zap, Brain, Cpu } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'cyber' | 'neon';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  variant = 'cyber'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (variant === 'cyber') {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-cyan-400 animate-pulse`} />
          </div>
        </div>
        <p className={`${textSizeClasses[size]} text-cyan-400 mt-4 font-semibold`}>{text}</p>
      </div>
    );
  }

  if (variant === 'neon') {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-purple-400/20 border-t-purple-400 rounded-full animate-spin`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-purple-400 animate-pulse`} />
          </div>
        </div>
        <p className={`${textSizeClasses[size]} text-purple-400 mt-4 font-semibold neon-text`}>{text}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      <p className={`${textSizeClasses[size]} text-gray-300 mt-4`}>{text}</p>
    </div>
  );
};

export default LoadingSpinner;