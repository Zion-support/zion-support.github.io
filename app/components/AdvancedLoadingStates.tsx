import React from 'react';

interface AdvancedLoadingStatesProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({
  type = 'spinner',
  fullScreen = false,
  message = 'Loading...'
}) => {
  const containerClass = fullScreen 
    ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8';

  const renderLoadingContent = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-white text-lg">{message}</p>
          </div>
        );
      case 'skeleton':
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-pulse bg-gray-300 rounded h-12 w-12"></div>
            <div className="animate-pulse bg-gray-300 rounded h-4 w-32"></div>
            <p className="text-white text-lg">{message}</p>
          </div>
        );
      case 'dots':
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-white text-lg">{message}</p>
          </div>
        );
      case 'pulse':
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-pulse bg-blue-500 rounded-full h-12 w-12"></div>
            <p className="text-white text-lg">{message}</p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-white text-lg">{message}</p>
          </div>
        );
    }
  };

  return (
    <div className={containerClass}>
      {renderLoadingContent()}
    </div>
  );
};

export default AdvancedLoadingStates;