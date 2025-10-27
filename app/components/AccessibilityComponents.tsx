import React from 'react';

interface _AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<_AccessibilityComponentsProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibility-components ${className}`}>
      {children}
    </div>
  );
};

AccessibilityComponents.displayName = 'AccessibilityComponents';

export default AccessibilityComponents;