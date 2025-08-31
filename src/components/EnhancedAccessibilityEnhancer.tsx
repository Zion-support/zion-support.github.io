import React, { useEffect, useState, useCallback, useRef } from 'react';

interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  announceChanges?: boolean;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = false,
  autoDetect = true,
  announceChanges = true
}) => {
  const [features, setFeatures] = useState<AccessibilityFeatures>({
    highContrast: false,
    reducedMotion: false,
    largeText: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: true
  });

  const [isActive, setIsActive] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const announcementRef = useRef<HTMLDivElement>(null);

  // Detect user preferences
  const detectUserPreferences = useCallback(() => {
    if (!autoDetect) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Check for large text preference
    const prefersLargeText = window.matchMedia('(prefers-reduced-data: reduce)').matches;

    setFeatures(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      largeText: prefersLargeText
    }));
  }, [autoDetect]);

  // Apply accessibility features
  const applyAccessibilityFeatures = useCallback((newFeatures: Partial<AccessibilityFeatures>) => {
    const updatedFeatures = { ...features, ...newFeatures };
    setFeatures(updatedFeatures);

    // Apply high contrast
    if (updatedFeatures.highContrast) {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.style.setProperty('--high-contrast', '1');
    } else {
      document.documentElement.classList.remove('high-contrast');
      document.documentElement.style.setProperty('--high-contrast', '0');
    }

    // Apply reduced motion
    if (updatedFeatures.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      document.documentElement.style.setProperty('--reduced-motion', '1');
    } else {
      document.documentElement.classList.remove('reduced-motion');
      document.documentElement.style.setProperty('--reduced-motion', '0');
    }

    // Apply large text
    if (updatedFeatures.largeText) {
      document.documentElement.classList.add('large-text');
      document.documentElement.style.setProperty('--large-text', '1');
    } else {
      document.documentElement.classList.remove('large-text');
      document.documentElement.style.setProperty('--large-text', '0');
    }

    // Apply focus indicator
    if (updatedFeatures.focusIndicator) {
      document.documentElement.classList.add('focus-visible');
      document.documentElement.style.setProperty('--focus-indicator', '1');
    } else {
      document.documentElement.classList.remove('focus-visible');
      document.documentElement.style.setProperty('--focus-indicator', '0');
    }

    // Announce changes to screen readers
    if (announceChanges) {
      const changeMessages = [];
      if (newFeatures.highContrast !== undefined) {
        changeMessages.push(`High contrast ${newFeatures.highContrast ? 'enabled' : 'disabled'}`);
      }
      if (newFeatures.reducedMotion !== undefined) {
        changeMessages.push(`Reduced motion ${newFeatures.reducedMotion ? 'enabled' : 'disabled'}`);
      }
      if (newFeatures.largeText !== undefined) {
        changeMessages.push(`Large text ${newFeatures.largeText ? 'enabled' : 'disabled'}`);
      }
      if (newFeatures.focusIndicator !== undefined) {
        changeMessages.push(`Focus indicator ${newFeatures.focusIndicator ? 'enabled' : 'disabled'}`);
      }

      if (changeMessages.length > 0) {
        announceToScreenReader(changeMessages.join('. '));
      }
    }
  }, [features, announceChanges]);

  // Announce to screen reader
  const announceToScreenReader = useCallback((message: string) => {
    setAnnouncement(message);
    
    // Create a live region for screen readers
    if (announcementRef.current) {
      announcementRef.current.setAttribute('aria-live', 'polite');
      announcementRef.current.setAttribute('aria-atomic', 'true');
    }

    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncement('');
    }, 3000);
  }, []);

  // Enhanced keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!features.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input, textarea, or contenteditable
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation with visual indicators
          if (event.shiftKey) {
            // Previous element
            const prevElement = getPreviousFocusableElement(target);
            if (prevElement) {
              event.preventDefault();
              prevElement.focus();
              highlightFocusableElement(prevElement);
            }
          } else {
            // Next element
            const nextElement = getNextFocusableElement(target);
            if (nextElement) {
              event.preventDefault();
              nextElement.focus();
              highlightFocusableElement(nextElement);
            }
          }
          break;

        case 'Enter':
        case ' ':
          // Activate buttons and links
          if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.getAttribute('role') === 'button') {
            event.preventDefault();
            target.click();
          }
          break;

        case 'Escape':
          // Close modals, dropdowns, etc.
          const modal = document.querySelector('[data-modal="open"]');
          if (modal) {
            const closeButton = modal.querySelector('[data-close]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
          break;

        case 'h':
        case 'H':
          // Navigate to next heading
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            navigateToNextHeading(target);
          }
          break;

        case 'l':
        case 'L':
          // Navigate to next link
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            navigateToNextLink(target);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [features.keyboardNavigation]);

  // Get next focusable element
  const getNextFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = Array.from(document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];

    const currentIndex = focusableElements.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % focusableElements.length;
    
    return focusableElements[nextIndex] || null;
  };

  // Get previous focusable element
  const getPreviousFocusableElement = (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = Array.from(document.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];

    const currentIndex = focusableElements.indexOf(currentElement);
    const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
    
    return focusableElements[prevIndex] || null;
  };

  // Highlight focusable element
  const highlightFocusableElement = (element: HTMLElement) => {
    // Remove previous highlights
    document.querySelectorAll('.focus-highlight').forEach(el => {
      el.classList.remove('focus-highlight');
    });

    // Add highlight to current element
    element.classList.add('focus-highlight');
    
    // Remove highlight after animation
    setTimeout(() => {
      element.classList.remove('focus-highlight');
    }, 2000);
  };

  // Navigate to next heading
  const navigateToNextHeading = (currentElement: HTMLElement) => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')) as HTMLElement[];
    const currentIndex = headings.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % headings.length;
    
    if (headings[nextIndex]) {
      headings[nextIndex].focus();
      headings[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Navigate to next link
  const navigateToNextLink = (currentElement: HTMLElement) => {
    const links = Array.from(document.querySelectorAll('a[href]')) as HTMLElement[];
    const currentIndex = links.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % links.length;
    
    if (links[nextIndex]) {
      links[nextIndex].focus();
      links[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Setup focus management
  const setupFocusManagement = useCallback(() => {
    // Trap focus in modals
    const modals = document.querySelectorAll('[data-modal]');
    modals.forEach(modal => {
      const focusableElements = Array.from(modal.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )) as HTMLElement[];

      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

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
      }
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    if (!enabled) return;

    detectUserPreferences();
    setupKeyboardNavigation();
    setupFocusManagement();

    // Apply initial features
    applyAccessibilityFeatures(features);
  }, [enabled, detectUserPreferences, setupKeyboardNavigation, setupFocusManagement, applyAccessibilityFeatures]);

  // Handle feature toggle
  const toggleFeature = useCallback((feature: keyof AccessibilityFeatures) => {
    const newValue = !features[feature];
    applyAccessibilityFeatures({ [feature]: newValue });
  }, [features, applyAccessibilityFeatures]);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Controls */}
      {showControls && (
        <div className="fixed top-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 max-w-xs">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Accessibility Options
          </h3>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={features.highContrast}
                onChange={() => toggleFeature('highContrast')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={features.reducedMotion}
                onChange={() => toggleFeature('reducedMotion')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={features.largeText}
                onChange={() => toggleFeature('largeText')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Large Text</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={features.focusIndicator}
                onChange={() => toggleFeature('focusIndicator')}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicator</span>
            </label>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Use Tab to navigate, Enter/Space to activate, Escape to close modals.
            </p>
          </div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </div>

      {/* Skip Links */}
      <div className="skip-links">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#navigation" className="skip-link">
          Skip to navigation
        </a>
        <a href="#footer" className="skip-link">
          Skip to footer
        </a>
      </div>

      {/* Focus Indicator Styles */}
      <style jsx>{`
        .skip-links {
          position: absolute;
          top: -40px;
          left: 6px;
          z-index: 1000;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          transition: top 0.3s;
        }

        .skip-link:focus {
          top: 6px;
        }

        .focus-highlight {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
          transition: outline 0.2s ease-in-out;
        }

        .high-contrast {
          --text-color: #000000;
          --bg-color: #ffffff;
          --accent-color: #0000ff;
        }

        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .large-text {
          font-size: 1.2em;
        }

        .focus-visible *:focus {
          outline: 3px solid #06b6d4 !important;
          outline-offset: 2px !important;
        }
      `}</style>
    </>
  );
};