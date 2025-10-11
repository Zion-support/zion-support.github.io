'use client';
import React, { useEffect, useState } from 'react';
interface AccessibilityEnhancerProps {
    children: React.ReactNode;
  }
const AdvancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
    const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  useEffect(() => 
    // Check for user's motion preferences;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches)
    // Check for high contrast preference
    const highContrastQuery = const highContrastQuery = const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches),;  );
};

export default AdvancedAccessibilityEnhancer;
  </button>
  </button>
  </button>
  </AccessibilityEnhancerProps>
