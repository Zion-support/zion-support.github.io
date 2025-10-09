'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  color?: 'primary' | 'secondary' | 'accent';
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  color = 'primary',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} rounded-full border-2 border-gray-300/20`}></div>
        
        {/* Spinning ring */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin`}></div>
        
        {/* Inner pulsing dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse`}></div>
      </div>
      
      {text && (
        <p className={`mt-4 text-sm font-medium ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Enhanced loading spinner with multiple variants
export const LoadingSpinnerVariant: React.FC<{
  variant?: 'dots' | 'bars' | 'pulse' | 'cyber' | 'neural';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}> = ({
  variant = 'cyber',
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-cyan-400 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-cyan-400 animate-pulse`}
                style={{ 
                  height: '100%',
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-cyan-400 rounded-full animate-pulse`}></div>
        );

      case 'cyber':
        return (
          <div className="relative">
            {/* Cyber grid background */}
            <div className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
            </div>
            {/* Scanning line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-50"></div>
          </div>
        );

      case 'neural':
        return (
          <div className="relative">
            {/* Neural network nodes */}
            <div className={`${sizeClasses[size]} relative`}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${20 + (i * 10)}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
              {/* Connecting lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full">
                  <line
                    x1="20%"
                    y1="20%"
                    x2="30%"
                    y2="35%"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-cyan-400 animate-pulse"
                  />
                  <line
                    x1="30%"
                    y1="35%"
                    x2="40%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-cyan-400 animate-pulse"
                    style={{ animationDelay: '0.1s' }}
                  />
                </svg>
              </div>
            </div>
          </div>
        );

      default:
        return <LoadingSpinner size={size} text={text} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderVariant()}
      {text && (
        <p className="mt-4 text-sm font-medium text-cyan-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

// Skeleton loading components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-gray-200 rounded mb-2 ${
          i === lines - 1 ? 'w-5/6' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export const SkeletonButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`h-10 bg-gray-200 rounded animate-pulse ${className}`}></div>
);

export const SkeletonImage: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`}></div>
);

// Loading states for different components
export const LoadingStates = {
  // Page loading
  Page: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <LoadingSpinnerVariant variant="cyber" size="xl" text="Loading Zion Tech Group..." />
    </div>
  ),

  // Component loading
  Component: ({ text }: { text?: string }) => (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinnerVariant variant="neural" size="lg" text={text} />
    </div>
  ),

  // Button loading
  Button: () => (
    <div className="flex items-center gap-2">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Loading...</span>
    </div>
  ),

  // Card loading
  Card: () => <SkeletonCard />,

  // Text loading
  Text: ({ lines }: { lines?: number }) => <SkeletonText lines={lines} />,

  // Image loading
  Image: () => <SkeletonImage className="w-full h-48" />
};

export default LoadingSpinner;