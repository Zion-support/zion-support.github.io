import React from 'react';
import { useAccessibilityEnhancer } from '../utils/accessibilityEnhancer';

const AccessibilityEnhancerComponent: React.FC = () => {
  useAccessibilityEnhancer({
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableFocusManagement: true,
    enableColorContrast: true,
    enableTextScaling: true,
    enableMotionReduction: true,
    enableHighContrast: true,
    enableVoiceControl: true,
    enableTouchAccessibility: true,
    enableARIALabels: true
  });

  return null;
};

export default AccessibilityEnhancerComponent;