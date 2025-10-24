'use client';

import React from 'react';

interface EnhancedLoadingStatesProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedLoadingStates;