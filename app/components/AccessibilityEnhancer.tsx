import React from "react";

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer = ({ children }: AccessibilityEnhancerProps) => {
  return (
    <div className="accessibility-enhancer">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
