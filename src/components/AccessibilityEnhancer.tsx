import React, { useEffect, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableFocusManagement?: boolean;
  enableColorContrastCheck?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableFocusManagement = true,
  enableColorContrastCheck = true
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

      setIsHighContrast(highContrastQuery.matches);
      setIsReducedMotion(reducedMotionQuery.matches);

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setIsHighContrast(e.matches);
      };

      const handleReducedMotionChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches);
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      };
    }
  }, []);

  useEffect(() => {
    // Apply accessibility styles
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (isReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [isHighContrast, isReducedMotion]);

  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Focus management for modals and dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('data-modal')) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    if (!enableFocusManagement) return;

    // Focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      target.style.outline = '2px solid #007bff';
      target.style.outlineOffset = '2px';
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement]);

  useEffect(() => {
    if (!enableScreenReaderSupport) return;

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Make announcement function globally available
    (window as Window & { announceToScreenReader?: (message: string) => void }).announceToScreenReader = announceToScreenReader;
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    if (!enableColorContrastCheck) return;

    // Check color contrast for interactive elements
    const checkColorContrast = () => {
      const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
      
      interactiveElements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const backgroundColor = styles.backgroundColor;
        const color = styles.color;
        
        // This is a simplified check - in a real application, you'd use a proper contrast checking library
        if (backgroundColor === 'rgba(0, 0, 0, 0)' || color === 'rgba(0, 0, 0, 0)') {
          console.warn('Potential contrast issue detected:', element);
        }
      });
    };

    // Run check after a delay to ensure styles are applied
    const timeoutId = setTimeout(checkColorContrast, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [enableColorContrastCheck]);

  // Add skip link to main content
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.setAttribute('data-skip-to-main', 'true');
    
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

  return null; // This component doesn't render anything visible
};

export default AccessibilityEnhancer;