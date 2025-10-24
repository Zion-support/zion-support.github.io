'use client';

import React from 'react';

interface EnhancedAccessibilityWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedAccessibilityWrapper: React.FC<EnhancedAccessibilityWrapperProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedAccessibilityWrapper;