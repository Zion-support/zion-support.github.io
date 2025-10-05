import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
<<<<<<< HEAD
  className?: string;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
<<<<<<< HEAD
  text = 'Loading...',
  className = ''
=======
  text = 'Loading...'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
<<<<<<< HEAD
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div 
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
      />
      {text && <p className="mt-4 text-sm text-gray-600">{text}</p>}
=======
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-300 border-t-blue-600`}></div>
      {text && (
        <p className="mt-4 text-gray-600 text-sm">{text}</p>
      )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
    </div>
  );
};

export default Loading;