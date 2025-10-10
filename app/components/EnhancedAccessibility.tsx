import React from 'react';

interface AccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<AccessibilityProps> = ({ children }) => {
  return (
    <div className="accessibility-enhancer">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
