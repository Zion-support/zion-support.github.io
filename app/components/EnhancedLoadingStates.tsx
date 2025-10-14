'use client';
import React from 'react';
<<<<<<< HEAD
interface LoadingStateProps {
  type?: 'spinner' | 'skeleton' | 'dots';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}
export default function EnhancedLoadingStates({
  type = 'spinner',
  size = 'md',
  text = 'Loading...'
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
  const renderSkeleton = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
  const renderDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {type === 'spinner' && renderSpinner()}
      {type === 'skeleton' && renderSkeleton()}
      {type === 'dots' && renderDots()}
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
