import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  return (
    <div className="accessibility-enhancer">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
