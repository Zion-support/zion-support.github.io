import React from 'react';
<<<<<<< HEAD
=======

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86

const LoadingSpinner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-white">Loading...</p>
      </div>
=======
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-600 animate-pulse">{text}</p>
      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
    </div>
  );
};

export default LoadingSpinner;