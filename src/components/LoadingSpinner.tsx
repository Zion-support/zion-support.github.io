import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`} role="status" aria-live="polite">
      <div 
        className={`${sizeClasses[size]} border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin`}
        aria-hidden="true"
      />
      <p className="text-gray-300 text-sm font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;