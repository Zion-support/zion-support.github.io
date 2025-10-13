import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: number;
  altTexts: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  screenReaderCompatible: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  onMetricsUpdate?: (metrics: AccessibilityMetrics) => void;
  enableMonitoring?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  onMetricsUpdate,
  enableMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: 0,
    altTexts: 0,
    ariaLabels: 0,
    keyboardNavigation: false,
    screenReaderCompatible: false
  });

  const [isVisible, setIsVisible] = useState(false);

  const checkContrastRatio = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const elements = document.querySelectorAll('*');
    let totalRatio = 0;
    let checkedElements = 0;

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        // Simple contrast ratio calculation (simplified)
        const colorLuminance = getLuminance(color);
        const bgLuminance = getLuminance(backgroundColor);
        const ratio = (Math.max(colorLuminance, bgLuminance) + 0.05) / (Math.min(colorLuminance, bgLuminance) + 0.05);
        
        if (ratio > 0) {
          totalRatio += ratio;
          checkedElements++;
        }
      }
    });

    return checkedElements > 0 ? totalRatio / checkedElements : 0;
  }, []);

  const getLuminance = (color: string) => {
    // Simplified luminance calculation
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return 0;
    
    const [r, g, b] = rgb.map(Number);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const checkFocusableElements = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    let count = 0;
    focusableSelectors.forEach(selector => {
      count += document.querySelectorAll(selector).length;
    });

    return count;
  }, []);

  const checkHeadingStructure = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 0;
    let lastLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level === 1) {
        score += 10; // h1 is important
      } else if (level <= lastLevel + 1) {
        score += 5; // Proper hierarchy
      } else {
        score -= 2; // Improper hierarchy
      }
      lastLevel = level;
    });

    return Math.max(0, score);
  }, []);

  const checkAltTexts = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const images = document.querySelectorAll('img');
    let altCount = 0;

    images.forEach((img) => {
      if (img.alt && img.alt.trim() !== '') {
        altCount++;
      }
    });

    return images.length > 0 ? (altCount / images.length) * 100 : 100;
  }, []);

  const checkAriaLabels = useCallback(() => {
    if (typeof window === 'undefined') return 0;

    const elements = document.querySelectorAll('[aria-label], [aria-labelledby]');
    return elements.length;
  }, []);

  const checkKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check if focus is visible
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    let keyboardAccessible = true;

    focusableElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.addEventListener('focus', () => {
          const styles = window.getComputedStyle(element);
          if (styles.outline === 'none' && !styles.boxShadow) {
            keyboardAccessible = false;
          }
        });
      }
    });

    return keyboardAccessible;
  }, []);

  const checkScreenReaderCompatibility = useCallback(() => {
    if (typeof window === 'undefined') return false;

    // Check for proper ARIA landmarks
    const landmarks = document.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"]');
    const hasMain = document.querySelector('main, [role="main"]');
    const hasNavigation = document.querySelector('nav, [role="navigation"]');
    
    return landmarks.length > 0 && hasMain && hasNavigation;
  }, []);

  const runAccessibilityAudit = useCallback(() => {
    if (!enableMonitoring) return;

    const newMetrics: AccessibilityMetrics = {
      contrastRatio: checkContrastRatio(),
      focusableElements: checkFocusableElements(),
      headingStructure: checkHeadingStructure(),
      altTexts: checkAltTexts(),
      ariaLabels: checkAriaLabels(),
      keyboardNavigation: checkKeyboardNavigation(),
      screenReaderCompatible: checkScreenReaderCompatibility()
    };

    setMetrics(newMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }

    // Show accessibility indicator in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [
    enableMonitoring,
    onMetricsUpdate,
    checkContrastRatio,
    checkFocusableElements,
    checkHeadingStructure,
    checkAltTexts,
    checkAriaLabels,
    checkKeyboardNavigation,
    checkScreenReaderCompatibility
  ]);

  useEffect(() => {
    runAccessibilityAudit();

    // Run audit on DOM changes
    const observer = new MutationObserver(runAccessibilityAudit);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'aria-label', 'aria-labelledby']
    });

    return () => observer.disconnect();
  }, [runAccessibilityAudit]);

  // Calculate accessibility score
  const getAccessibilityScore = useCallback(() => {
    const scores = [];
    
    // Contrast ratio score (0-100)
    if (metrics.contrastRatio > 0) {
      scores.push(Math.min(100, (metrics.contrastRatio / 4.5) * 100));
    }
    
    // Alt texts score
    scores.push(metrics.altTexts);
    
    // Heading structure score
    scores.push(Math.min(100, metrics.headingStructure));
    
    // ARIA labels bonus
    if (metrics.ariaLabels > 0) {
      scores.push(Math.min(100, metrics.ariaLabels * 10));
    }
    
    // Keyboard navigation bonus
    if (metrics.keyboardNavigation) {
      scores.push(100);
    } else {
      scores.push(0);
    }
    
    // Screen reader compatibility bonus
    if (metrics.screenReaderCompatible) {
      scores.push(100);
    } else {
      scores.push(50);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }, [metrics]);

  const accessibilityScore = getAccessibilityScore();

  // Add accessibility enhancements
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add skip links if not present
    if (!document.querySelector('.skip-link')) {
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
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Ensure main content has proper ID
    const mainContent = document.querySelector('main, [role="main"]');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (!isVisible && process.env.NODE_ENV === 'production') {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Accessibility Monitor</h3>
            <div className={`w-3 h-3 rounded-full ${
              accessibilityScore >= 90 ? 'bg-green-500' : 
              accessibilityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Accessibility Score:</span>
              <span className="font-mono">{accessibilityScore}/100</span>
            </div>
            
            <div className="flex justify-between">
              <span>Focusable Elements:</span>
              <span className="font-mono">{metrics.focusableElements}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Alt Text Coverage:</span>
              <span className="font-mono">{Math.round(metrics.altTexts)}%</span>
            </div>
            
            <div className="flex justify-between">
              <span>ARIA Labels:</span>
              <span className="font-mono">{metrics.ariaLabels}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Keyboard Nav:</span>
              <span className="font-mono">{metrics.keyboardNavigation ? '✓' : '✗'}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Screen Reader:</span>
              <span className="font-mono">{metrics.screenReaderCompatible ? '✓' : '✗'}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedAccessibility;
