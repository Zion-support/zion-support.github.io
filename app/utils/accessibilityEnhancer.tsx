import React, { useEffect } from 'react';
import { accessibilityEnhancer } from './accessibilityEnhancerClass';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    accessibilityEnhancer.init();
  }, []);

  return <>{children}</>;
}

export default AccessibilityEnhancer;