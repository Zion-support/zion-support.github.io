import React, { useEffect, useCallback, useRef, useState } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: boolean;
  altTextCoverage: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  colorBlindness: boolean;
  screenReader: boolean;
}

interface AccessibilityEnhancerProps {
  enableMonitoring?: boolean;
  enableEnhancements?: boolean;
  showAccessibilityPanel?: boolean;
  logMetrics?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableMonitoring = true,
  enableEnhancements = true,
  showAccessibilityPanel = false,
  logMetrics = false,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: false,
    altTextCoverage: 0,
    ariaLabels: 0,
    keyboardNavigation: false,
    colorBlindness: false,
    screenReader: false
  });

  const [accessibilityMode, setAccessibilityMode] = useState({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusIndicator: true
  });

  const metricsRef = useRef<AccessibilityMetrics>(metrics);
  const focusTrapRef = useRef<HTMLDivElement>(null);

  // Enhanced keyboard navigation with focus trapping
  const enhanceKeyboardNavigation = useCallback(() => {
    if (!enableEnhancements) return;

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow-lg';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main-content';
    }

    // Enhanced focus management with focus trap
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
    );

    let currentFocusIndex = 0;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        
        if (e.shiftKey) {
          currentFocusIndex = currentFocusIndex > 0 ? currentFocusIndex - 1 : focusableElements.length - 1;
        } else {
          currentFocusIndex = currentFocusIndex < focusableElements.length - 1 ? currentFocusIndex + 1 : 0;
        }

        (focusableElements[currentFocusIndex] as HTMLElement).focus();
      }
    };

    // Enhanced keyboard shortcuts
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Alt + H: Go to home
      if (e.altKey && e.key === 'h') {
        e.preventDefault();
        const homeLink = document.querySelector('a[href="/"]') as HTMLAnchorElement;
        if (homeLink) homeLink.click();
      }
      
      // Alt + S: Go to services
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        const servicesLink = document.querySelector('a[href="/services"]') as HTMLAnchorElement;
        if (servicesLink) servicesLink.click();
      }
      
      // Alt + C: Go to contact
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        const contactLink = document.querySelector('a[href="/contact"]') as HTMLAnchorElement;
        if (contactLink) contactLink.click();
      }
      
      // Escape: Close modals/dropdowns
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('[data-modal="true"][data-open="true"]');
        openModals.forEach(modal => {
          (modal as HTMLElement).setAttribute('data-open', 'false');
        });
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleKeyboardShortcuts);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleKeyboardShortcuts);
    };
  }, [enableEnhancements]);

  // Enhanced ARIA labels and roles
  const enhanceARIA = useCallback(() => {
    if (!enableEnhancements) return;

    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
      
      // Add role if missing
      if (!button.getAttribute('role')) {
        button.setAttribute('role', 'button');
      }
    });

    // Add missing ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby]):not([placeholder])');
    inputs.forEach((input, index) => {
      const label = input.closest('label');
      if (!label) {
        input.setAttribute('aria-label', `Input ${index + 1}`);
      }
      
      // Add proper ARIA attributes
      if (input.type === 'search') {
        input.setAttribute('role', 'searchbox');
        input.setAttribute('aria-expanded', 'false');
      }
    });

    // Enhance navigation with ARIA
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((nav, index) => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Main navigation ${index + 1}`);
      }
    });

    // Enhance headings structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.getAttribute('id')) {
        heading.setAttribute('id', `heading-${index + 1}`);
      }
    });

    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }
  }, [enableEnhancements]);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    const newMode = !accessibilityMode.highContrast;
    setAccessibilityMode(prev => ({ ...prev, highContrast: newMode }));
    
    if (newMode) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.setAttribute('data-theme', 'high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [accessibilityMode.highContrast]);

  // Reduced motion mode
  const toggleReducedMotion = useCallback(() => {
    const newMode = !accessibilityMode.reducedMotion;
    setAccessibilityMode(prev => ({ ...prev, reducedMotion: newMode }));
    
    if (newMode) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.setAttribute('data-motion', 'reduced');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.removeAttribute('data-motion');
    }
  }, [accessibilityMode.reducedMotion]);

  // Large text mode
  const toggleLargeText = useCallback(() => {
    const newMode = !accessibilityMode.largeText;
    setAccessibilityMode(prev => ({ ...prev, largeText: newMode }));
    
    if (newMode) {
      document.documentElement.classList.add('large-text');
      document.documentElement.setAttribute('data-text-size', 'large');
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.removeAttribute('data-text-size');
    }
  }, [accessibilityMode.largeText]);

  // Focus indicator toggle
  const toggleFocusIndicator = useCallback(() => {
    const newMode = !accessibilityMode.focusIndicator;
    setAccessibilityMode(prev => ({ ...prev, focusIndicator: newMode }));
    
    if (newMode) {
      document.documentElement.classList.add('focus-indicator');
      document.documentElement.setAttribute('data-focus', 'visible');
    } else {
      document.documentElement.classList.remove('focus-indicator');
      document.documentElement.removeAttribute('data-focus');
    }
  }, [accessibilityMode.focusIndicator]);

  // Monitor accessibility metrics
  const monitorAccessibility = useCallback(() => {
    if (!enableMonitoring) return;

    // Count focusable elements
    const focusableElements = document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let headingStructure = true;
    let currentLevel = 0;
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > currentLevel + 1) {
        headingStructure = false;
      }
      currentLevel = level;
    });

    // Check alt text coverage
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
    const altTextCoverage = images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100;

    // Check ARIA labels
    const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby]');
    const ariaLabels = elementsWithAria.length;

    // Check contrast ratio (simplified)
    const contrastRatio = 4.5; // This would need a proper contrast calculation library

    // Check for screen reader usage
    const screenReader = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for color blindness support
    const colorBlindness = document.querySelectorAll('[data-colorblind="true"]').length > 0;

    const newMetrics = {
      contrastRatio,
      focusableElements: focusableElements.length,
      headingStructure,
      altTextCoverage,
      ariaLabels,
      keyboardNavigation: true,
      colorBlindness,
      screenReader
    };

    setMetrics(newMetrics);
    metricsRef.current = newMetrics;

    if (logMetrics) {
      console.log('Accessibility Metrics:', newMetrics);
    }
  }, [enableMonitoring, logMetrics]);

  // Apply accessibility enhancements
  const applyEnhancements = useCallback(() => {
    if (!enableEnhancements) return;

    enhanceKeyboardNavigation();
    enhanceARIA();

    // Add focus visible styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 3px solid #0066cc !important;
        outline-offset: 2px !important;
      }
      
      .high-contrast {
        --text-color: #000000;
        --bg-color: #ffffff;
        --accent-color: #0000ff;
        --border-color: #000000;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .large-text {
        font-size: 1.2em;
      }
      
      .large-text h1 { font-size: 2.5em; }
      .large-text h2 { font-size: 2.2em; }
      .large-text h3 { font-size: 1.9em; }
      .large-text p { font-size: 1.3em; }
    `;
    document.head.appendChild(style);
  }, [enableEnhancements, enhanceKeyboardNavigation, enhanceARIA]);

  useEffect(() => {
    if (enableEnhancements) {
      applyEnhancements();
    }

    if (enableMonitoring) {
      monitorAccessibility();
      
      // Monitor for dynamic content changes
      const observer = new MutationObserver(() => {
        monitorAccessibility();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableEnhancements, enableMonitoring, applyEnhancements, monitorAccessibility]);

  // Accessibility panel component
  const AccessibilityPanel = () => (
    <div className="accessibility-panel fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Accessibility Options</h3>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accessibilityMode.highContrast}
            onChange={toggleHighContrast}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accessibilityMode.reducedMotion}
            onChange={toggleReducedMotion}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accessibilityMode.largeText}
            onChange={toggleLargeText}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
        </label>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={accessibilityMode.focusIndicator}
            onChange={toggleFocusIndicator}
            className="rounded"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
        </label>
      </div>

      {logMetrics && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Metrics</h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <p>Focusable Elements: {metrics.focusableElements}</p>
            <p>Alt Text Coverage: {metrics.altTextCoverage.toFixed(1)}%</p>
            <p>ARIA Labels: {metrics.ariaLabels}</p>
            <p>Heading Structure: {metrics.headingStructure ? '✓' : '✗'}</p>
          </div>
        </div>
      )}
    </div>
  );

  if (!enableEnhancements && !enableMonitoring) {
    return null;
  }

  return (
    <>
      {/* Accessibility toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-200"
        aria-label="Toggle accessibility options"
        aria-expanded={isVisible}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility panel */}
      {isVisible && showAccessibilityPanel && <AccessibilityPanel />}

      {/* Hidden accessibility metrics for monitoring */}
      <div className="sr-only" aria-live="polite">
        Accessibility metrics: {metrics.focusableElements} focusable elements, {metrics.altTextCoverage.toFixed(1)}% alt text coverage
      </div>
    </>
  );
};
