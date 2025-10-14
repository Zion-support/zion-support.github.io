import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`loading-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Loading</h3>
          <p className="text-gray-600">This is the Loading component.</p>
        </div>
      )}
    </div>
  );
};

export default Loading;