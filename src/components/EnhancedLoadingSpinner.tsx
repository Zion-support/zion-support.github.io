/**
 * Enhanced Loading Spinner Component
 * Provides multiple loading animations and accessibility features
 */

import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'progress';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  enableAccessibility?: boolean;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  variant = 'spinner',
  color = 'primary',
  text,
  showProgress = false,
  progress = 0,
  enableAccessibility = true,
  className = ''
}) => {
  const [displayedProgress, setDisplayedProgress] = useState(0);

  // Animate progress changes
  useEffect(() => {
    if (showProgress) {
      const timer = setTimeout(() => {
        setDisplayedProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, showProgress]);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'spinner':
        return (
          <svg
            className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            role={enableAccessibility ? 'status' : undefined}
            aria-label={enableAccessibility ? 'Loading' : undefined}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );

      case 'dots':
        return (
          <div className={`flex space-x-1 ${className}`} role={enableAccessibility ? 'status' : undefined}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${colorClasses[color]} animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
                aria-hidden="true"
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div
            className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} animate-pulse ${className}`}
            role={enableAccessibility ? 'status' : undefined}
            aria-label={enableAccessibility ? 'Loading' : undefined}
          />
        );

      case 'skeleton':
        return (
          <div className={`animate-pulse ${className}`} role={enableAccessibility ? 'status' : undefined}>
            <div className="space-y-3">
              <div className={`h-4 bg-gray-300 rounded ${sizeClasses[size]}`} />
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-5/6" />
                <div className="h-3 bg-gray-300 rounded w-4/6" />
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className={`${className}`} role={enableAccessibility ? 'status' : undefined}>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${displayedProgress}%` }}
                aria-valuenow={displayedProgress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={enableAccessibility ? `Loading ${displayedProgress}%` : undefined}
              />
            </div>
            {showProgress && (
              <div className="text-center mt-2">
                <span className={`text-sm ${colorClasses[color]}`}>
                  {Math.round(displayedProgress)}%
                </span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderSpinner()}
      {text && (
        <p className={`${colorClasses[color]} ${textSizeClasses[size]} font-medium`}>
          {text}
        </p>
      )}
      {enableAccessibility && (
        <span className="sr-only">
          {showProgress ? `Loading ${displayedProgress}%` : 'Loading'}
        </span>
      )}
    </div>
  );
};

// Preset loading components for common use cases
export const PageLoader: React.FC<{ text?: string }> = ({ text = 'Loading page...' }) => (
  <div className="min-h-screen flex items-center justify-center">
    <EnhancedLoadingSpinner
      size="large"
      variant="spinner"
      color="primary"
      text={text}
      enableAccessibility
    />
  </div>
);

export const ButtonLoader: React.FC<{ text?: string }> = ({ text }) => (
  <EnhancedLoadingSpinner
    size="small"
    variant="spinner"
    color="white"
    text={text}
    enableAccessibility
  />
);

export const CardLoader: React.FC = () => (
  <div className="p-4">
    <EnhancedLoadingSpinner
      size="medium"
      variant="skeleton"
      color="gray"
      enableAccessibility
    />
  </div>
);

export const ProgressLoader: React.FC<{ progress: number; text?: string }> = ({ 
  progress, 
  text = 'Loading...' 
}) => (
  <EnhancedLoadingSpinner
    size="medium"
    variant="progress"
    color="primary"
    text={text}
    showProgress
    progress={progress}
    enableAccessibility
  />
);

export default EnhancedLoadingSpinner;