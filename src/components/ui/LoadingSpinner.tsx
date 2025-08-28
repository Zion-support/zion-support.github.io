import React from 'react';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'ai' | 'security' | 'cloud';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

const iconMap = {
  default: Loader2,
  futuristic: Zap,
  ai: Brain,
  security: Shield,
  cloud: Cloud
};

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  className = ''
}) => {
  const Icon = iconMap[variant];
  const sizeClass = sizeMap[size];

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {/* Main Spinner */}
      <div className="relative mb-4">
        {/* Background Ring */}
        <div className={`${sizeClass} rounded-full border-2 border-slate-700/30`} />
        
        {/* Animated Ring */}
        <div 
          className={`${sizeClass} rounded-full border-2 border-transparent border-t-cyan-500 absolute top-0 left-0 animate-spin`}
          style={{ animationDuration: '1s' }}
        />
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            className={`${size === 'xl' ? 'w-6 h-6' : size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} text-cyan-400 animate-pulse`} 
          />
        </div>
      </div>

      {/* Loading Text */}
      {text && (
        <div className="text-center mb-4">
          <p className="text-slate-300 font-medium text-lg">{text}</p>
          <div className="flex items-center justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="w-64 bg-slate-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}

      {/* Progress Percentage */}
      {showProgress && (
        <p className="text-slate-400 text-sm font-mono">
          {Math.round(progress)}%
        </p>
      )}

      {/* Futuristic Loading Animation */}
      {variant === 'futuristic' && (
        <div className="mt-4">
          <div className="flex space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-4 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* AI Loading Animation */}
      {variant === 'ai' && (
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping" style={{ animationDelay: '200ms' }} />
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      )}

      {/* Security Loading Animation */}
      {variant === 'security' && (
        <div className="mt-4">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-green-500 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-0 w-8 h-8 border-2 border-green-400 rounded-full animate-ping opacity-75" />
          </div>
        </div>
      )}

      {/* Cloud Loading Animation */}
      {variant === 'cloud' && (
        <div className="mt-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          </div>
        </div>
      )}
    </div>
  );
};

// Full Screen Loading Spinner
export const FullScreenLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'className'>> = (props) => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
    <LoadingSpinner {...props} />
  </div>
);

// Inline Loading Spinner
export const InlineLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'className'> & { inline?: boolean }> = ({ inline = true, ...props }) => (
  <div className={`${inline ? 'inline-flex' : 'flex'} items-center justify-center`}>
    <LoadingSpinner {...props} />
  </div>
);

// Skeleton Loading Component
export const SkeletonLoader: React.FC<{ className?: string; lines?: number }> = ({ className = '', lines = 3 }) => (
  <div className={`animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-slate-700 rounded mb-3 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);
