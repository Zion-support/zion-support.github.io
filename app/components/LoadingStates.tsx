import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingstates-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">LoadingStates</h3>
          <p className="text-gray-600">This is the LoadingStates component.</p>
        </div>
      )}
    </div>
  );
};

export default LoadingStates;