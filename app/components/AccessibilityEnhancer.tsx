import React, { useEffect } from 'react';
import { accessibilityEnhancer } from '../utils/accessibilityEnhancer';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    accessibilityEnhancer.init();
  }, []);

  return <>{children}</>;
}