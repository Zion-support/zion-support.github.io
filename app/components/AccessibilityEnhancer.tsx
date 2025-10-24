'use client';

import React from 'react';


interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true
}) => {
  return (
    <div 
      className={`${enableHighContrast ? 'high-contrast' : ''}`}
      role={_enableScreenReaderSupport ? 'main' : undefined}
      tabIndex={_enableFocusManagement ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
