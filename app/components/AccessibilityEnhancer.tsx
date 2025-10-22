import React, { useEffect } from 'react';
import { useAccessibilityEnhancer } from '../utils/accessibilityEnhancer';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  options?: {
    enableKeyboardNavigation?: boolean;
    enableScreenReader?: boolean;
    enableFocusManagement?: boolean;
    enableColorContrast?: boolean;
    enableTextScaling?: boolean;
    enableMotionReduction?: boolean;
    enableHighContrast?: boolean;
    enableVoiceControl?: boolean;
    enableTouchAccessibility?: boolean;
    enableARIALabels?: boolean;
  };
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ 
  children, 
  options = {} 
}) => {
  const {
    enableKeyboardNavigation = true,
    enableScreenReader = true,
    enableFocusManagement = true,
    enableColorContrast = true,
    enableTextScaling = true,
    enableMotionReduction = true,
    enableHighContrast = true,
    enableVoiceControl = true,
    enableTouchAccessibility = true,
    enableARIALabels = true
  } = options;

  const {
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupFocusManagement,
    setupColorContrast,
    setupTextScaling,
    setupMotionReduction,
    setupHighContrast,
    setupVoiceControl,
    setupTouchAccessibility,
    setupARIALabels
  } = useAccessibilityEnhancer({
    enableKeyboardNavigation,
    enableScreenReader,
    enableFocusManagement,
    enableColorContrast,
    enableTextScaling,
    enableMotionReduction,
    enableHighContrast,
    enableVoiceControl,
    enableTouchAccessibility,
    enableARIALabels
  });

  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReader) {
      setupScreenReaderSupport();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }
    if (enableColorContrast) {
      setupColorContrast();
    }
    if (enableTextScaling) {
      setupTextScaling();
    }
    if (enableMotionReduction) {
      setupMotionReduction();
    }
    if (enableHighContrast) {
      setupHighContrast();
    }
    if (enableVoiceControl) {
      setupVoiceControl();
    }
    if (enableTouchAccessibility) {
      setupTouchAccessibility();
    }
    if (enableARIALabels) {
      setupARIALabels();
    }
  }, [
    enableKeyboardNavigation,
    enableScreenReader,
    enableFocusManagement,
    enableColorContrast,
    enableTextScaling,
    enableMotionReduction,
    enableHighContrast,
    enableVoiceControl,
    enableTouchAccessibility,
    enableARIALabels,
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupFocusManagement,
    setupColorContrast,
    setupTextScaling,
    setupMotionReduction,
    setupHighContrast,
    setupVoiceControl,
    setupTouchAccessibility,
    setupARIALabels
  ]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;