'use client';
import React from 'react';

interface AccessibilityEnhancerProps {
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  React.useEffect(() => {
    // Initialize accessibility enhancements when component mounts
    const { accessibilityEnhancer } = require('../utils/accessibilityEnhancer');
    return () => {
      accessibilityEnhancer.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;