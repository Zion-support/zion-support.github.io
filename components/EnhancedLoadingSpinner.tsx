import React, { useEffect, useState } from 'react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  message?: string;
  progress?: number;
  showProgress?: boolean;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'spinner',
  message = 'Loading...',
  progress,
  showProgress = false,
  className = ''
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (variant === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [variant]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />
        );
      
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse`} />
        );
      
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-5/6" />
          </div>
        );
      
      default:
        return (
          <div className={`${sizeClasses[size]} border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin`} />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      
      {message && (
        <div className={`text-center ${textSizeClasses[size]} text-gray-600 dark:text-gray-400`}>
          {message}{variant === 'dots' && dots}
        </div>
      )}
      
      {showProgress && progress !== undefined && (
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;