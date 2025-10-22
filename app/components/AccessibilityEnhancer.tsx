import React, { useEffect } from 'react';
import AccessibilityEnhancer from '../utils/accessibilityEnhancer';

const AccessibilityEnhancerComponent: React.FC = () => {
  useEffect(() => {
    const enhancer = new AccessibilityEnhancer();
    enhancer.init();
  }, []);

  return null;
};

export default AccessibilityEnhancerComponent;