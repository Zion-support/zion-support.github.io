import React from 'react';

interface EnhancedloadingskeletonProps {
  children?: React.ReactNode;
}

const Enhancedloadingskeleton: React.FC<EnhancedloadingskeletonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Enhancedloadingskeleton;
