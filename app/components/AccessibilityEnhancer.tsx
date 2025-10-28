'use client';

import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`accessibilityenhancer-component ${className}`}>
      {children}
    </div>
  );
};

AccessibilityEnhancer.displayName = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;
