'use client';

import React from 'react';

interface EnhancedLoadingProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedLoading;