'use client';
import React from 'react';
interface AccessibilityEnhancerProps {
  className?: string;
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className, children }) => {
  return (
    <div className="accessibility-enhanced" role="main">
      {children}
    </div>
  );
};
export default AccessibilityEnhancer;
