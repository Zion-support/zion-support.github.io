import React from 'react';
import { useAccessibilityEnhancer } from '../utils/accessibilityEnhancer';

const AccessibilityEnhancerComponent: React.FC = () => {
  useAccessibilityEnhancer();

  return null;
};

export default AccessibilityEnhancerComponent;