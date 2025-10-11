import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">LoadingSkeleton</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default LoadingSkeleton;
