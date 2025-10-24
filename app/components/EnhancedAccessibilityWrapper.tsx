'use client';
import React, { ReactNode } from 'react';

interface EnhancedAccessibilityWrapperProps {
  children: ReactNode;
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
