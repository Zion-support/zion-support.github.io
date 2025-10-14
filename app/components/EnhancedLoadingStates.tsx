import React from 'react';
import EnhancedLoadingSpinner from './EnhancedLoadingSpinner';

interface EnhancedLoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots';
  fullScreen?: boolean;
  message?: string;
  className?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({
  type = 'spinner',
  fullScreen = false,
  message = 'Loading...',
  className = ''
}) => {
  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';

  if (type === 'skeleton') {
    return (
      <div className={`${containerClasses} ${className}`}>
        <div className="w-full max-w-md space-y-4">
          <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`${containerClasses} ${className}`}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        {message && <p className="text-gray-300 mt-4">{message}</p>}
      </div>
    );
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="text-center">
        <EnhancedLoadingSpinner size="lg" />
        {message && <p className="text-gray-300 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default EnhancedLoadingStates;