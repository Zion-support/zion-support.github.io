import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingstates ${className}`}>
      {children}
    </div>
  );
};

export default LoadingStates;