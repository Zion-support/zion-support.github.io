'use client';
import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>Accessibility Components</h2>
      <p>Accessibility components for enhanced user experience.</p>
      {children}
    </div>
  );
};

export default AccessibilityComponents;