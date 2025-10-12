import React from 'react';

interface EnhancedLoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedloadingskeleton ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedLoadingSkeleton;
