import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'gray' | 'white' | 'green' | 'red';
  text?: string;
  fullScreen?: boolean;
  progress?: number;
  showProgress?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'blue',
  text = 'Loading...',
  fullScreen = false,
  progress = 0,
  showProgress = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
    green: 'border-green-600',
    red: 'border-red-600'
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    white: 'text-white',
    green: 'text-green-600',
    red: 'text-red-600'
  };

  const spinner = (
    <div className="flex flex-col items-center">
      <div className={`animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && (
        <p className={`mt-2 text-sm ${textColorClasses[color]}`}>{text}</p>
      )}
      {showProgress && (
        <div className="mt-2 w-full max-w-xs">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">{progress}%</p>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Progress Loading Component
interface ProgressLoadingProps {
  progress: number;
  text?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'red';
}

const ProgressLoading: React.FC<ProgressLoadingProps> = ({
  progress,
  text = 'Loading...',
  showPercentage = true,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600'
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-16 h-16 relative mb-4">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`${colorClasses[color]} transition-all duration-300`}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

// Animated Loading Component
const AnimatedLoading: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-sm text-gray-600">{text}{dots}</span>
      </div>
    </div>
  );
};

// Pulse Loading Component
const PulseLoading: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse mb-2"></div>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export { 
  LoadingSpinner, 
  ProgressLoading, 
  AnimatedLoading, 
  PulseLoading 
};
export default LoadingSpinner;