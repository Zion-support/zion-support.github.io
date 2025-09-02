import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
    }
  }, []);

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;