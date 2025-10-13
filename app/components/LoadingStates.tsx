import React from 'react';

interface LoadingStatesProps {
  children: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      {children}
    </div>
  );
};

export default LoadingStates;