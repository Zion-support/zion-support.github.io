import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = '',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-purple-500',
    secondary: 'text-cyan-500',
    white: 'text-white'
  };

  const spinner = (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <div className="animate-spin rounded-full h-full w-full border-2 border-current border-t-transparent"></div>
      {text && (
        <p className="mt-2 text-sm text-gray-300 text-center">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;