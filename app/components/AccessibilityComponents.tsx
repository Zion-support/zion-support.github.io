'use client';
import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AccessibilityComponents;