
import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div id="main-content" className={`min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;



