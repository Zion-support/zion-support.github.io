import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AccessibilityEnhancer({ className = '', children }: AccessibilityEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}