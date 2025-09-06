import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-16 w-16',
    large: 'h-32 w-32'
  };
=======
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377

const LoadingSpinner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">{text}</p>
      )}
=======
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
>>>>>>> 7f75898722d8fd84372e93f8a34999dbfb36e377
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-8824
    </div>
  );
};

export default LoadingSpinner;