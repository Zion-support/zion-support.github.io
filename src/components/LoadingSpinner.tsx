<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  variant?: 'default' | 'dots' | 'pulse' | 'wave';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  variant = 'default'
=======
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
=======
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  };

  const renderSpinner = () => {
    switch (variant) {
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
      
      case 'wave':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-blue-600 rounded-full animate-pulse"
                style={{
                  height: `${20 + i * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <div
            className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
          />
        );
    }
  };

  return (
<<<<<<< HEAD
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="mb-6">
        {renderSpinner()}
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          {text}{dots}
        </h2>
        <p className="text-blue-300 text-sm">
          Please wait while we prepare everything for you
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 w-64 bg-gray-700 rounded-full h-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
             style={{ width: '100%' }} />
      </div>
=======
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
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
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    </div>
  );
};

<<<<<<< HEAD
export { LoadingSpinner };
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
export default LoadingSpinner;