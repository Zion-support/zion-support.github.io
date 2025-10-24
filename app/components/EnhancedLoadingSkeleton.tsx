import React from 'react';

interface EnhancedLoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedloadingskeleton ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedLoadingSkeleton;