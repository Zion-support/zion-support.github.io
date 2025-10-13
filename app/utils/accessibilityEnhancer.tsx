import React from 'react';

export interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

export default function AccessibilityEnhancer({ children, className = '' }: AccessibilityEnhancerProps) {
  return (
    <div className={`accessibility-enhancer ${className}`}>
      {children}
    </div>
}