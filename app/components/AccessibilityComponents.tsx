import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibilitycomponents-component ${className}`}>
      {children}
    </div>
  );
};

AccessibilityComponents.displayName = 'AccessibilityComponents';

export default AccessibilityComponents;
