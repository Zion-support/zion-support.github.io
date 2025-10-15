import React from 'react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false, 
  text = 'Loading...', 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div 
        data-testid="loading-spinner"
        className={`${sizeClasses[size]} border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin`} 
      />
      {text && <p className="text-gray-300 text-sm">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;