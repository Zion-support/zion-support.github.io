'use client';

import React from 'react';

interface EnhancedLoadingSkeletonProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedLoadingSkeleton;