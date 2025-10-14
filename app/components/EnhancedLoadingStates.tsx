'use client';
import React from 'react';
import EnhancedLoadingSpinner from './EnhancedLoadingSpinner';

interface EnhancedLoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots';
  fullScreen?: boolean;
  message?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({
  type = 'spinner',
  fullScreen = false,
  message = 'Loading...'
}) => {
  const containerClass = fullScreen 
    ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';

  if (type === 'skeleton') {
    return (
      <div className={containerClass}>
        <div className="animate-pulse space-y-4 w-full max-w-md">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={containerClass}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <EnhancedLoadingSpinner size="large" message={message} />
    </div>
  );
};

export default EnhancedLoadingStates;