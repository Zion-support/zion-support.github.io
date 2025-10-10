'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  children?: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  children 
}) => {
  useEffect(() => {
    // Add accessibility enhancements
    if (enableKeyboardNavigation) {
      document.body.setAttribute('data-keyboard-nav', 'true');
    }
    
    if (enableScreenReaderSupport) {
      document.body.setAttribute('data-screen-reader', 'true');
    }
    
    if (enableHighContrast) {
      document.body.setAttribute('data-high-contrast', 'true');
    }
    
    if (enableFocusManagement) {
      document.body.setAttribute('data-focus-management', 'true');
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;