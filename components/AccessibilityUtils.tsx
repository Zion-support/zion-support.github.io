import React from 'react';

interface AccessibilityUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityUtils: React.FC<AccessibilityUtilsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`accessibilityutils ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityUtils;