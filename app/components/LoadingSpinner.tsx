import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  return (
    <div className="flex flex-col items-center justify-center space-y-2"></div>
      <div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}></p>
          {text}
        </p>
      );
    </div>
)]
    };
export default LoadingSpinner;
}