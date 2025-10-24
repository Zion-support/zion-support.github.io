'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedAccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation: _enableKeyboardNavigation = true,
  enableScreenReaderSupport: _enableScreenReaderSupport = true,
  enableHighContrast: _enableHighContrast = false,
  enableFocusManagement: _enableFocusManagement = true,
}) => {
  return (
    <>
      <Helmet>
        <title>Enhanced Accessibility - Zion Tech Group</title>
        <meta name="description" content="Enhanced accessibility features for better user experience." />
      </Helmet>
      
      <div className="enhanced-accessibility-enhancer">
        {children}
      </div>
    </>
  );
};

export default EnhancedAccessibilityEnhancer;