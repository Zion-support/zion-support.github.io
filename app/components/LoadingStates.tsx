import React, { ReactNode } from 'react';

interface LoadingStatesProps {
  children?: ReactNode;
  type?: 'spinner' | 'skeleton' | 'dots';
  message?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  children, 
  type = 'spinner', 
  message = 'Loading...' 
}) => {
  if (type === 'skeleton') {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      {message && <span className="ml-2 text-gray-300">{message}</span>}
      {children}
    </div>
  );
};

export default LoadingStates;