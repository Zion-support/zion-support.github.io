import React from 'react';

interface EnhancedAccessibilityEnhancerProps {
  children: React.ReactNode;
}

export const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAccessibilityEnhancer;