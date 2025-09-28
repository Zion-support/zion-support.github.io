/**
 * Enhanced Loading Spinner Component
 * Provides multiple loading states and animations
 */

import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

export interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
  type?: 'spinner' | 'dots' | 'pulse' | 'wave' | 'orbit';
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  className = '',
  type = 'spinner'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-gray-600 dark:text-gray-300',
    primary: 'text-blue-600 dark:text-blue-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} rounded-full bg-current animate-bounce`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div
            className={`${sizeClasses[size]} rounded-full bg-current animate-pulse`}
            style={{
              animationDuration: '1.5s'
            }}
          />
        );

      case 'wave':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-current rounded-full animate-pulse"
                style={{
                  height: size === 'sm' ? '8px' : size === 'md' ? '12px' : size === 'lg' ? '16px' : '20px',
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );

      case 'orbit':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} rounded-full border-2 border-current border-t-transparent animate-spin`} />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: size === 'sm' ? '6px' : size === 'md' ? '8px' : size === 'lg' ? '12px' : '16px',
                height: size === 'sm' ? '6px' : size === 'md' ? '8px' : size === 'lg' ? '12px' : '16px'
              }}
            >
              <div className="w-full h-full rounded-full bg-current animate-ping opacity-75" />
            </div>
          </div>
        );

      default:
        return (
          <Loader2 className={`${sizeClasses[size]} animate-spin`} />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Loading Animation */}
      <div className={`${variantClasses[variant]} mb-4`}>
        {renderSpinner()}
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="w-full max-w-xs mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                variant === 'primary' ? 'bg-blue-600' :
                variant === 'success' ? 'bg-green-600' :
                variant === 'warning' ? 'bg-yellow-600' :
                variant === 'error' ? 'bg-red-600' :
                'bg-gray-600'
              }`}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
      )}

      {/* Loading Text */}
      {text && (
        <p className={`${variantClasses[variant]} ${textSizeClasses[size]} font-medium text-center`}>
          {text}
        </p>
      )}

      {/* Additional Visual Elements */}
      {type === 'orbit' && (
        <div className="mt-2 flex items-center space-x-1">
          <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
          <span className="text-xs text-gray-500 dark:text-gray-400">Initializing...</span>
          <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      )}
    </div>
  );
};

export { EnhancedLoadingSpinner };

// Export PageLoader as an alias for compatibility
export const PageLoader = EnhancedLoadingSpinner;