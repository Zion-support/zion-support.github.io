import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibilityenhancer ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;