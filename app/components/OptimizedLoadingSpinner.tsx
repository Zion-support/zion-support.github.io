import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false
  }) => {
    const getSizeClasses = () => {
      switch (size) {
        case 'xs':
          return 'w-4 h-4';
        case 'sm':
          return 'w-6 h-6';
        case 'md':
          return 'w-8 h-8';
        case 'lg':
          return 'w-12 h-12';
        case 'xl':
          return 'w-16 h-16';
        default:
          return 'w-8 h-8';
      }
    };

    const getColorClasses = () => {
      switch (color) {
        case 'blue':
          return 'text-blue-500';
        case 'gray':
          return 'text-gray-500';
        case 'green':
          return 'text-green-500';
        case 'red':
          return 'text-red-500';
        case 'purple':
          return 'text-purple-500';
        default:
          return 'text-blue-500';
      }
    };

    const renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${getColorClasses().replace('text-', 'bg-')} animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          );
        
        case 'pulse':
          return (
            <div className={`${getSizeClasses()} ${getColorClasses().replace('text-', 'bg-')} rounded-full animate-pulse`} />
          );
        
        case 'spinner':
          return (
            <Loader2 className={`${getSizeClasses()} ${getColorClasses()} animate-spin`} />
          );
        
        case 'skeleton':
          return (
            <div className="space-y-2">
              <div className={`h-4 ${getColorClasses().replace('text-', 'bg-')} rounded animate-pulse`} />
              <div className={`h-4 w-3/4 ${getColorClasses().replace('text-', 'bg-')} rounded animate-pulse`} />
            </div>
          );
        
        case 'bars':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-1 ${getColorClasses().replace('text-', 'bg-')} animate-pulse`}
                  style={{ 
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          );
        
        default:
          return (
            <Loader2 className={`${getSizeClasses()} ${getColorClasses()} animate-spin`} />
          );
      }
    };

    const content = (
      <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
        {renderSpinner()}
        {text && (
          <p className={`text-sm font-medium ${getColorClasses()}`}>
            {text}
          </p>
        )}
      </div>
    );

    if (fullScreen) {
      return (
        <>
          <Helmet>
            <title>Loading - Zion Tech Group</title>
          </Helmet>
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            {content}
          </div>
        </>
      );
    }

    return (
      <>
        <Helmet>
          <title>Loading - Zion Tech Group</title>
        </Helmet>
        {content}
      </>
    );
  }
);

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

export default OptimizedLoadingSpinner;