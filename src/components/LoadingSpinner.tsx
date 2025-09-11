import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className={`loading-container ${className}`}>
      <div className="loading-spinner-wrapper">
        <div 
          className={`loading-spinner ${sizeClasses[size]}`}
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">{text}</span>
        </div>
      </div>
      {text && (
        <p className={`loading-text ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;