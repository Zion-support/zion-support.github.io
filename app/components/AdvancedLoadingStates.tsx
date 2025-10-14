import React from 'react';

interface AdvancedLoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  fullScreen?: boolean;
  message?: string;
  className?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({
  type = 'spinner',
  fullScreen = false,
  message = 'Loading...',
  className = ''
}) => {
  const baseClasses = fullScreen 
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    : 'flex items-center justify-center p-8';

  const getLoadingContent = () => {
    switch (type) {
      case 'skeleton':
        return (
          <div className="space-y-4 w-full max-w-md">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
          </div>
        );
      case 'dots':
        return (
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        );
      case 'pulse':
        return (
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        );
      default: // spinner
        return (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        );
    }
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className="text-center">
        {getLoadingContent()}
        {message && (
          <p className="mt-4 text-white text-sm font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;
