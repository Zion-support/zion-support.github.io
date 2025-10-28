interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

import React, { ReactNode } from 'react';





const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibilitycomponents-component ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityComponents;
