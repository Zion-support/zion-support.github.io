import React from 'react';

interface LoadingSpinnerProps {_size?: 'sm' | 'md' | 'lg';
  className?: string;}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (_{_size = 'md', _className = '', _}) => {_const _sizeClasses = {
    sm: 'w-4 h-4', _md: 'w-8 h-8', _lg: 'w-12 h-12', };

  return (
    <div
      className={_'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ' +
        sizeClasses[size] +
        ' ' +
        className}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
