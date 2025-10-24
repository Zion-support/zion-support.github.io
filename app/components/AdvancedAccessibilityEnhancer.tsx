'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedAccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast: _enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true,
}) => {
  return (
    <>
      <Helmet>
        <title>Advanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Advanced accessibility features for better user experience." />
      </Helmet>
      
      <div className="advanced-accessibility-enhancer">
        {children}
      </div>
    </>
  );
};

export default AdvancedAccessibilityEnhancer;