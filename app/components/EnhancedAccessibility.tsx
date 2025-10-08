import React, { useEffect, useState } from 'react';

interface AccessibilityMetrics {
  overallScore: number;
  contrastRatio: number;
  focusableElements: number;
  headingStructure: number;
  altTextCoverage: number;
  keyboardNavigation: number;
}

interface AccessibilityEnhancerProps {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: AccessibilityMetrics) => void;
  enableKeyboardNavigation?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const EnhancedAccessibility: React.FC<AccessibilityEnhancerProps> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate,
  enableKeyboardNavigation = true,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    overallScore: 0,
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: 0,
    altTextCoverage: 0,
    keyboardNavigation: 0
  });

  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for high contrast mode
  useEffect(() => {
    if (enableHighContrast && window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
        if (e.matches) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      };
      
      highContrastQuery.addEventListener('change', handleChange);
      
      if (highContrastQuery.matches) {
        document.body.classList.add('high-contrast');
      }
      
      return () => {
        highContrastQuery.removeEventListener('change', handleChange);
      };
    }
  }, [enableHighContrast]);

  // Check for reduced motion preference
  useEffect(() => {
    if (enableReducedMotion && window.matchMedia) {
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
        if (e.matches) {
          document.body.classList.add('reduced-motion');
        } else {
          document.body.classList.remove('reduced-motion');
        }
      };
      
      reducedMotionQuery.addEventListener('change', handleChange);
      
      if (reducedMotionQuery.matches) {
        document.body.classList.add('reduced-motion');
      }
      
      return () => {
        reducedMotionQuery.removeEventListener('change', handleChange);
      };
    }
  }, [enableReducedMotion]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Arrow key navigation for custom components
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        
        if (currentIndex !== -1) {
          const nextIndex = event.key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, focusableElements.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          (focusableElements[nextIndex] as HTMLElement)?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Measure accessibility metrics
  const measureAccessibility = () => {
    try {
      // Count focusable elements
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ).length;

      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let headingStructure = 0;
      if (headings.length > 0) {
        const firstHeading = headings[0];
        if (firstHeading.tagName === 'H1') {
          headingStructure = 100;
        } else {
          headingStructure = 50;
        }
      }

      // Check alt text coverage
      const images = document.querySelectorAll('img');
      const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
      const altTextCoverage = images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100;

      // Check contrast ratio (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      let contrastRatio = 100;
      if (textElements.length > 0) {
        // This is a simplified check - in a real implementation, you'd use a library like color-contrast
        contrastRatio = 85; // Placeholder value
      }

      // Check keyboard navigation
      const keyboardNavigation = enableKeyboardNavigation ? 100 : 0;

      const newMetrics: AccessibilityMetrics = {
        overallScore: 0,
        contrastRatio,
        focusableElements,
        headingStructure,
        altTextCoverage,
        keyboardNavigation
      };

      // Calculate overall score
      newMetrics.overallScore = Math.round(
        (contrastRatio + headingStructure + altTextCoverage + keyboardNavigation) / 4
      );

      setMetrics(newMetrics);

      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      // Log metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('♿ Accessibility Metrics:', newMetrics);
      }
    } catch (error) {
      console.error('Error measuring accessibility:', error);
    }
  };

  // Real-time monitoring
  useEffect(() => {
    if (enableRealTimeMonitoring) {
      const interval = setInterval(measureAccessibility, 5000);
      return () => clearInterval(interval);
    }
  }, [enableRealTimeMonitoring]);

  // Initial measurement
  useEffect(() => {
    const timer = setTimeout(measureAccessibility, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Add skip links
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, []);

  // Enhance form accessibility
  useEffect(() => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.getAttribute('role')) {
        form.setAttribute('role', 'form');
      }
    });

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${inputElement.id}"]`);
        if (label) {
          inputElement.setAttribute('aria-labelledby', label.id || `label-${inputElement.id}`);
        }
      }
    });
  }, []);

  // Don't render anything visible
  return null;
};

export default EnhancedAccessibility;