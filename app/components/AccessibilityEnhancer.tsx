import React, { ReactNode } from 'react';

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  return (
    <div className="accessibilityenhancer">
      {children}
    </div>
  );
}