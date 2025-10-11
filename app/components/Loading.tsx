import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">Loading</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default Loading;
