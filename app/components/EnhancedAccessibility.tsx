import React from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  return (
    <div className="enhanced-accessibility">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;