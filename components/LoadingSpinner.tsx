import React from 'react';
import { LoadingState } from '../types';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'purple' | 'green' | 'yellow' | 'red';
  text?: string;
  progress?: number;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'progress';
  fullScreen?: boolean;
  loadingState?: LoadingState;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue',
  text = 'Loading...',
  progress,
  variant = 'spinner',
  fullScreen = false,
  loadingState,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-600 text-blue-600',
    purple: 'border-purple-600 text-purple-600',
    green: 'border-green-600 text-green-600',
    yellow: 'border-yellow-600 text-yellow-600',
    red: 'border-red-600 text-red-600'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-current rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-current rounded-full animate-pulse`} />
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1 bg-current animate-pulse"
                style={{ 
                  height: `${(i + 1) * 4}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        );
      
      case 'progress':
        return (
          <div className="w-full max-w-xs">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-current h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress || 0}%` }}
              />
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-current ${sizeClasses[size]}`} />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${colorClasses[color]} ${className}`}>
      {renderSpinner()}
      {text && (
        <p className="mt-3 text-sm text-slate-300 animate-pulse">
          {text}
        </p>
      )}
      {loadingState?.error && (
        <p className="mt-2 text-sm text-red-400">
          {loadingState.error}
        </p>
      )}
      {progress !== undefined && variant !== 'progress' && (
        <p className="mt-2 text-xs text-slate-400">
          {Math.round(progress)}%
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-900 rounded-lg p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;