import React, { useState, useEffect, useCallback } from 'react';

interface AccessibilityMetrics {
  overallScore: number;
  colorContrast: number;
  keyboardNavigation: number;
  screenReaderSupport: number;
  focusManagement: number;
  semanticHTML: number;
}

interface AccessibilityEnhancerProps {
  enableFocusIndicators?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableFocusIndicators = true,
  enableHighContrast = true,
  enableReducedMotion = true,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    overallScore: 0,
    colorContrast: 0,
    keyboardNavigation: 0,
    screenReaderSupport: 0,
    focusManagement: 0,
    semanticHTML: 0,
  });

  const checkReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  }, []);

  const checkHighContrast = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    return mediaQuery.matches;
  }, []);

  const applyAccessibilityStyles = useCallback(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // Apply reduced motion
    if (enableReducedMotion && isReducedMotion) {
      root.style.setProperty('--motion-duration', '0s');
      root.style.setProperty('--motion-timing', 'linear');
    } else {
      root.style.removeProperty('--motion-duration');
      root.style.removeProperty('--motion-timing');
    }

    // Apply high contrast
    if (enableHighContrast && isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply focus indicators
    if (enableFocusIndicators) {
      root.classList.add('focus-indicators');
    } else {
      root.classList.remove('focus-indicators');
    }

    // Apply font size
    root.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [enableReducedMotion, enableHighContrast, enableFocusIndicators, isReducedMotion, isHighContrast, fontSize]);

  const calculateAccessibilityScore = useCallback((): AccessibilityMetrics => {
    let colorContrast = 100;
    let keyboardNavigation = 100;
    let screenReaderSupport = 100;
    let focusManagement = 100;
    let semanticHTML = 100;

    // Check color contrast
    const elements = document.querySelectorAll('*');
    let contrastIssues = 0;
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        contrastIssues++;
      }
    });
    
    if (contrastIssues > 0) {
      colorContrast = Math.max(0, 100 - (contrastIssues * 10));
    }

    // Check keyboard navigation
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    let keyboardIssues = 0;
    focusableElements.forEach(element => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '0' && !element.hasAttribute('tabindex')) {
        keyboardIssues++;
      }
    });

    if (keyboardIssues > 0) {
      keyboardNavigation = Math.max(0, 100 - (keyboardIssues * 5));
    }

    // Check semantic HTML
    const semanticElements = document.querySelectorAll('main, nav, header, footer, section, article, aside');
    const totalElements = document.querySelectorAll('div, span').length;
    
    if (totalElements > 0) {
      const semanticRatio = semanticElements.length / totalElements;
      semanticHTML = Math.min(100, semanticRatio * 200);
    }

    // Calculate overall score
    const overallScore = Math.round(
      (colorContrast + keyboardNavigation + screenReaderSupport + focusManagement + semanticHTML) / 5
    );

    return {
      overallScore,
      colorContrast,
      keyboardNavigation,
      screenReaderSupport,
      focusManagement,
      semanticHTML,
    };
  }, []);

  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    // Add keyboard event listeners
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip link navigation
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableKeyboardNavigation]);

  const enhanceScreenReaderSupport = useCallback(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }
    });

    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // Initialize accessibility features
    setIsReducedMotion(checkReducedMotion());
    setIsHighContrast(checkHighContrast());

    // Set up media query listeners
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    highContrastQuery.addEventListener('change', handleHighContrastChange);

    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      highContrastQuery.removeEventListener('change', handleHighContrastChange);
    };
  }, [checkReducedMotion, checkHighContrast]);

  useEffect(() => {
    applyAccessibilityStyles();
  }, [applyAccessibilityStyles]);

  useEffect(() => {
    const cleanup = enhanceKeyboardNavigation();
    return cleanup;
  }, [enhanceKeyboardNavigation]);

  useEffect(() => {
    enhanceScreenReaderSupport();
  }, [enhanceScreenReaderSupport]);

  useEffect(() => {
    // Calculate metrics periodically
    const interval = setInterval(() => {
      const newMetrics = calculateAccessibilityScore();
      setMetrics(newMetrics);
    }, 5000);

    return () => clearInterval(interval);
  }, [calculateAccessibilityScore]);

  const getMetrics = () => metrics;

  // Expose methods for external use
  React.useImperativeHandle(React.forwardRef(() => null), () => ({
    getMetrics,
    setFontSize: (size: number) => setFontSize(Math.max(12, Math.min(24, size))),
  }));

  return (
    <div className="accessibility-enhancer">
      {/* This component doesn't render anything visible by default */}
      {/* You can add accessibility controls here if needed */}
    </div>
  );
};

export default AccessibilityEnhancer;