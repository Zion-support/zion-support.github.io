'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableReducedMotion?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableReducedMotion = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('reduce-motion', 'high-contrast');
    };
  }, [enableReducedMotion, enableHighContrast]);

  return <>{children}</>;
};

export default EnhancedAccessibility;
