import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`}
        role='status'
        aria-label='Loading'
      >
<<<<<<< HEAD
        <span className="sr-only">Loading...</span>
=======
        <span className='sr-only'>Loading...</span>
>>>>>>> 71655f282840ed9a4a2a6696e410390223898ad3
      </div>
    </div>
  );
};

export default LoadingSpinner;
