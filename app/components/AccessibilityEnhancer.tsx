'use client'
import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
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
