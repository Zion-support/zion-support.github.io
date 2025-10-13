import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinner = (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-600 ${sizeClasses[size]} ${className}`}></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          {spinner}
          <p className="mt-4 text-white text-lg">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {spinner}
      {text && <span className="ml-2 text-gray-600">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;