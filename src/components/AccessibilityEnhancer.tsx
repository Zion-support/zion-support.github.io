'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children, 
  className 
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    const enhanceAccessibility = () => {
      // Focus management
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.setAttribute('tabindex', '0');
      });
    };

    enhanceAccessibility();
  }, []);

  return (
    <div className={className} role="main">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
