import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  animated?: boolean;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  text,
  showProgress = false,
  progress = 0,
  animated = true,
  className = ''
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setDisplayProgress(prev => {
          const diff = progress - prev;
          if (Math.abs(diff) < 0.1) return progress;
          return prev + diff * 0.1;
        });
      }, 16);
      return () => clearInterval(timer);
    }
  }, [progress, showProgress]);

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
    white: 'text-white'
  };

  const spinnerSize = sizeClasses[size];
  const spinnerColor = colorClasses[color];

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Main Spinner */}
      <div className="relative">
        {/* Outer ring */}
        <div className={`${spinnerSize} rounded-full border-2 border-gray-300 dark:border-gray-600`}>
          {/* Inner spinning ring */}
          <div
            className={`${spinnerSize} rounded-full border-2 border-transparent border-t-current ${spinnerColor} ${
              animated ? 'animate-spin' : ''
            }`}
            style={{
              animationDuration: '1s',
              animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </div>

        {/* Progress ring (if enabled) */}
        {showProgress && (
          <div className="absolute inset-0">
            <svg className={`${spinnerSize} transform -rotate-90`} viewBox="0 0 36 36">
              <path
                className="text-gray-200 dark:text-gray-700"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={spinnerColor}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${displayProgress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        )}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {showProgress && (
            <span className={`text-xs font-semibold ${spinnerColor}`}>
              {Math.round(displayProgress)}%
            </span>
          )}
        </div>
      </div>

      {/* Loading text */}
      {text && (
        <div className="text-center">
          <p className={`text-sm font-medium ${spinnerColor} animate-pulse`}>
            {text}
          </p>
        </div>
      )}

      {/* Animated dots */}
      {animated && !showProgress && (
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${spinnerColor} animate-pulse`}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;