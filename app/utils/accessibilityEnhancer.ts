'use client';

import React from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children, 
  className = '' 
}) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      focusableElements[nextIndex]?.focus();
      event.preventDefault();
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        (modal as HTMLElement).focus();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={`accessibility-enhanced ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
