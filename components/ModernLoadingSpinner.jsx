import React from 'react';

const ModernLoadingSpinner = ({ size = 'medium', text = 'Loading...', className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16';
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>;
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-spin"></div>;
      </div>
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">;
          {text}
        </p>
      )}
    </div>
  );
};

export default ModernLoadingSpinner;