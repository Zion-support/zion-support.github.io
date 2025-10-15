import React from 'react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  fullScreen = false, 
  text = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-4 text-gray-300 text-sm">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
