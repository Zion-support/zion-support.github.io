import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const LoadingSpinner = memo(function LoadingSpinner(_{ 
  size = 'md', _className = '', text = 'Loading...' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-[200px] ${className}`}>
      <div 
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-cyan-400 border-t-transparent`}
        role="status"
        aria-label={text}
      ></div>
      {text && (
        <p className="mt-2 text-sm text-gray-300 animate-pulse">{text}</p>
      )}
    </div>
  );
});

export default LoadingSpinner;