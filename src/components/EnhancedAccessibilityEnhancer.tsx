import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Keyboard, 
  MousePointer, 
  Sun, 
  Moon, 
  Contrast, 
  Type, 
  Move, 
  Settings, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Accessibility,
  Braille,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Zap,
  Shield,
  Target,
  Award,
  BarChart3,
  Palette,
  RotateCcw,
  Save,
  Loader2
} from 'lucide-react';

interface AccessibilityEnhancerProps {
  enabled: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableFocusManagement = true,
  enableHighContrast = true,
  enableReducedMotion = true
}) => {
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, target, ctrlKey, shiftKey } = event;
      const element = target as HTMLElement;

      // Skip to main content
      if (key === 'Tab' && ctrlKey && shiftKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Enhanced tab navigation
      if (key === 'Tab') {
        const focusableElements = getFocusableElements();
        const currentIndex = focusableElements.indexOf(element);
        
        if (shiftKey && currentIndex > 0) {
          event.preventDefault();
          focusableElements[currentIndex - 1].focus();
        } else if (!shiftKey && currentIndex < focusableElements.length - 1) {
          event.preventDefault();
          focusableElements[currentIndex + 1].focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (key === 'Escape') {
        const openModal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (openModal) {
          const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }

      // Enter/Space for interactive elements
      if ((key === 'Enter' || key === ' ') && element.tagName === 'BUTTON') {
        event.preventDefault();
        element.click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Get all focusable elements
  const getFocusableElements = useCallback((): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
      '[role="button"]',
      '[role="link"]',
      '[role="tab"]',
      '[role="menuitem"]'
    ];

    const elements = document.querySelectorAll(focusableSelectors.join(','));
    return Array.from(elements) as HTMLElement[];
  }, []);

  // Enhanced focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Store focusable elements
    focusableElementsRef.current = getFocusableElements();

    // Focus trap for modals
    const setupFocusTrap = (modal: HTMLElement) => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      modal.addEventListener('keydown', handleTabKey);
      firstElement.focus();

      return () => modal.removeEventListener('keydown', handleTabKey);
    };

    // Auto-focus management
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Add focus indicator
      target.classList.add('focus-visible');
      
      // Announce focus changes to screen readers
      if (enableScreenReaderSupport) {
        announceToScreenReader(`${target.textContent || target.getAttribute('aria-label') || 'Element'} focused`);
      }
    };

    const handleFocusOut = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [enableFocusManagement, enableScreenReaderSupport, getFocusableElements]);

  // Enhanced screen reader support
  const setupScreenReaderSupport = useCallback(() => {
    if (!enableScreenReaderSupport) return;

    // Create live region for announcements
    const createLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.setAttribute('aria-relevant', 'additions text');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
      return liveRegion;
    };

    const liveRegion = createLiveRegion();

    // Announce function
    const announce = (message: string) => {
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    };

    // Global announce function
    (window as any).announceToScreenReader = announce;

    // Enhanced ARIA labels
    const enhanceARIALabels = () => {
      // Add missing ARIA labels to interactive elements
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button, index) => {
        const buttonElement = button as HTMLButtonElement;
        if (!buttonElement.textContent?.trim()) {
          buttonElement.setAttribute('aria-label', `Button ${index + 1}`);
        }
      });

      // Add role attributes where missing
      const navElements = document.querySelectorAll('nav:not([role])');
      navElements.forEach(nav => nav.setAttribute('role', 'navigation'));

      const mainElements = document.querySelectorAll('main:not([role])');
      mainElements.forEach(main => main.setAttribute('role', 'main'));

      const footerElements = document.querySelectorAll('footer:not([role])');
      footerElements.forEach(footer => footer.setAttribute('role', 'contentinfo'));
    };

    enhanceARIALabels();

    // Enhanced form accessibility
    const enhanceFormAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        if (!form.getAttribute('aria-label') && !form.getAttribute('aria-labelledby')) {
          const legend = form.querySelector('legend');
          if (legend) {
            form.setAttribute('aria-labelledby', legend.id || 'form-legend');
          }
        }
      });

      // Add error announcements
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('invalid', () => {
          const errorMessage = input.getAttribute('aria-errormessage');
          if (errorMessage) {
            announce(`Error: ${errorMessage}`);
          }
        });
      });
    };

    enhanceFormAccessibility();

    return () => {
      if (liveRegion && liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, [enableScreenReaderSupport]);

  // High contrast mode
  const setupHighContrast = useCallback(() => {
    if (!enableHighContrast) return;

    const toggleHighContrast = () => {
      document.documentElement.classList.toggle('high-contrast');
      const isEnabled = document.documentElement.classList.contains('high-contrast');
      localStorage.setItem('highContrast', isEnabled.toString());
      
      if (enableScreenReaderSupport) {
        announceToScreenReader(`High contrast mode ${isEnabled ? 'enabled' : 'disabled'}`);
      }
    };

    // Check for saved preference
    const savedPreference = localStorage.getItem('highContrast');
    if (savedPreference === 'true') {
      document.documentElement.classList.add('high-contrast');
    }

    // Add high contrast toggle button
    const createHighContrastToggle = () => {
      const toggle = document.createElement('button');
      toggle.setAttribute('aria-label', 'Toggle high contrast mode');
      toggle.setAttribute('aria-pressed', document.documentElement.classList.contains('high-contrast').toString());
      toggle.className = 'high-contrast-toggle sr-only';
      toggle.onclick = () => {
        toggleHighContrast();
        toggle.setAttribute('aria-pressed', document.documentElement.classList.contains('high-contrast').toString());
      };
      document.body.appendChild(toggle);
      return toggle;
    };

    const toggle = createHighContrastToggle();

    return () => {
      if (toggle && toggle.parentNode) {
        toggle.parentNode.removeChild(toggle);
      }
    };
  }, [enableHighContrast, enableScreenReaderSupport]);

  // Reduced motion support
  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.documentElement.classList.add('reduced-motion');
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        style.id = 'reduced-motion-styles';
        document.head.appendChild(style);
      } else {
        document.documentElement.classList.remove('reduced-motion');
        const style = document.getElementById('reduced-motion-styles');
        if (style) {
          style.remove();
        }
      }
    };

    prefersReducedMotion.addEventListener('change', handleReducedMotion);
    
    // Initial check
    if (prefersReducedMotion.matches) {
      handleReducedMotion({ matches: true } as MediaQueryListEvent);
    }

    return () => {
      prefersReducedMotion.removeEventListener('change', handleReducedMotion);
    };
  }, [enableReducedMotion]);

  // Create skip link
  const createSkipLink = useCallback(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-blue-500';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    skipLinkRef.current = skipLink;

    return () => {
      if (skipLink && skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  // Setup all accessibility features
  useEffect(() => {
    if (!enabled) return;

    const cleanupFunctions: (() => void)[] = [];

    // Create skip link
    const skipLinkCleanup = createSkipLink();
    cleanupFunctions.push(skipLinkCleanup);

    // Setup keyboard navigation
    if (enableKeyboardNavigation) {
      const keyboardCleanup = setupKeyboardNavigation();
      cleanupFunctions.push(keyboardCleanup);
    }

    // Setup focus management
    if (enableFocusManagement) {
      const focusCleanup = setupFocusManagement();
      cleanupFunctions.push(focusCleanup);
    }

    // Setup screen reader support
    if (enableScreenReaderSupport) {
      const screenReaderCleanup = setupScreenReaderSupport();
      cleanupFunctions.push(screenReaderCleanup);
    }

    // Setup high contrast
    if (enableHighContrast) {
      const highContrastCleanup = setupHighContrast();
      cleanupFunctions.push(highContrastCleanup);
    }

    // Setup reduced motion
    if (enableReducedMotion) {
      const reducedMotionCleanup = setupReducedMotion();
      cleanupFunctions.push(reducedMotionCleanup);
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [
    enabled,
    enableKeyboardNavigation,
    enableFocusManagement,
    enableScreenReaderSupport,
    enableHighContrast,
    enableReducedMotion,
    createSkipLink,
    setupKeyboardNavigation,
    setupFocusManagement,
    setupScreenReaderSupport,
    setupHighContrast,
    setupReducedMotion
  ]);

  if (!enabled) return null;

  return (
    <div className="accessibility-enhancer" style={{ display: 'none' }}>
      {/* Hidden component for accessibility features */}
      <div data-accessibility-features="enabled" />
    </div>
  );
};

// Global function for screen reader announcements
declare global {
  interface Window {
    announceToScreenReader: (message: string) => void;
  }
}