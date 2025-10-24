'use client';
import React, { ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
