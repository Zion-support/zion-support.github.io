import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);

  // Check for user preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for high contrast preference
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastQuery.matches);

      // Check for reduced motion preference
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
      const handleReducedMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }
  }, []);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      setCurrentFocus(target);
      setFocusVisible(true);
      
      // Add focus-visible class for better focus indication
      target.classList.add('focus-visible');
    };

    const handleFocusOut = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
      setFocusVisible(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip links for keyboard navigation
      if (e.key === 'Tab' && e.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements) as HTMLElement[];
        const currentIndex = focusableArray.indexOf(currentFocus as HTMLElement);
        
        if (currentIndex > 0) {
          e.preventDefault();
          focusableArray[currentIndex - 1].focus();
        }
      } else if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements) as HTMLElement[];
        const currentIndex = focusableArray.indexOf(currentFocus as HTMLElement);
        
        if (currentIndex < focusableArray.length - 1) {
          e.preventDefault();
          focusableArray[currentIndex + 1].focus();
        }
      }

      // Escape key handling
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enableFocusManagement, currentFocus]);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    if (!enableScreenReader) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [enableScreenReader]);

  // Apply accessibility styles
  useEffect(() => {
    const style = document.createElement('style');
    
    let css = `
      /* Focus styles */
      .focus-visible {
        outline: 2px solid #4f46e5 !important;
        outline-offset: 2px !important;
      }
      
      /* Skip links */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      /* Screen reader only content */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      /* High contrast mode */
      ${isHighContrast ? `
        * {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
        }
        
        a, button {
          text-decoration: underline !important;
        }
        
        img {
          filter: contrast(200%) !important;
        }
      ` : ''}
      
      /* Reduced motion */
      ${isReducedMotion ? `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      ` : ''}
      
      /* Focus trap */
      .focus-trap {
        position: relative;
      }
      
      /* ARIA live regions */
      [aria-live] {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `;

    style.textContent = css;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isHighContrast, isReducedMotion]);

  // Add skip links
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const skipLinks = document.createElement('div');
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      if (document.body.contains(skipLinks)) {
        document.body.removeChild(skipLinks);
      }
    };
  }, [enableKeyboardNavigation]);

  // Add ARIA landmarks
  useEffect(() => {
    if (!enableAriaLabels) return;

    // Add main landmark
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('id', 'main-content');
    }

    // Add navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('id', index === 0 ? 'navigation' : `navigation-${index}`);
      }
    });

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('id', 'footer');
    }

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.getAttribute('id')) {
        const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
        heading.setAttribute('id', text);
      }
    });
  }, [enableAriaLabels]);

  // Announce page changes for screen readers
  useEffect(() => {
    if (enableScreenReader) {
      announceToScreenReader('Page loaded successfully');
    }
  }, [announceToScreenReader, enableScreenReader]);

  return (
    <div 
      className={`accessibility-enhanced ${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      data-focus-visible={focusVisible}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;