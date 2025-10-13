import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  return <>{children}</>;
}