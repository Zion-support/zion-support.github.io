import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

export const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibilitycomponents ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityComponents;