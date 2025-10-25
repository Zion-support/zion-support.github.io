import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  message?: string;
  showProgress?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'minimal';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading content, please wait...', 
  showProgress = false,
  size = 'md',
  variant = 'default'
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + Math.random() * 10;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [showProgress]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const spinnerClasses = {
    default: 'border-blue-200 border-t-blue-600',
    futuristic: 'border-cyan-200 border-t-cyan-500',
    minimal: 'border-gray-200 border-t-gray-600'
  };

  if (variant === 'futuristic') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" role="status" aria-live="polite">
        <div className="relative mb-4">
          <div className={`${sizeClasses[size]} border-4 ${spinnerClasses[variant]} rounded-full animate-spin`} aria-hidden="true"></div>
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className={`${sizeClasses[size === 'lg' ? 'md' : 'sm']} border-2 border-transparent border-t-purple-500 rounded-full animate-spin`}></div>
          </div>
        </div>
        {showProgress && (
          <div className="w-48 bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        )}
        <p className="text-gray-600 text-sm font-medium">{message}</p>
        <span className="sr-only">{message}</span>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center min-h-screen" role="status" aria-live="polite">
        <div className="flex flex-col items-center">
          <div className={`${sizeClasses[size]} border-2 ${spinnerClasses[variant]} rounded-full animate-spin`} aria-hidden="true"></div>
          <span className="mt-2 text-sm text-gray-500">{message}</span>
          <span className="sr-only">{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen" role="status" aria-live="polite">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 ${spinnerClasses[variant]} rounded-full animate-spin`} aria-hidden="true"></div>
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className={`${sizeClasses[size === 'lg' ? 'md' : 'sm']} border-2 border-transparent border-t-purple-600 rounded-full animate-spin`}></div>
        </div>
      </div>
      <span className="sr-only">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
