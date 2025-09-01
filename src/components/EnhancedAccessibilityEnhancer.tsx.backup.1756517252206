import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

interface AccessibilityEnhancerProps {
  enabled?: boolean;
  showControls?: boolean;
  autoDetect?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

export const EnhancedAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enabled = true,
  showControls = true,
  autoDetect = true,
  onSettingsChange,
}) => {
  const location = useLocation();
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReader: false,
    keyboardNavigation: true,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  // Auto-detect user preferences
  useEffect(() => {
    if (!autoDetect) return;

    const mediaQueries = {
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      prefersHighContrast: window.matchMedia('(prefers-contrast: high)'),
      prefersLargeText: window.matchMedia('(prefers-contrast: more)'),
    };

    const updateSettings = () => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: mediaQueries.prefersReducedMotion.matches,
        highContrast: mediaQueries.prefersHighContrast.matches,
        largeText: mediaQueries.prefersLargeText.matches,
      }));
    };

    // Initial check
    updateSettings();

    // Listen for changes
    mediaQueries.prefersReducedMotion.addEventListener('change', updateSettings);
    mediaQueries.prefersHighContrast.addEventListener('change', updateSettings);
    mediaQueries.prefersLargeText.addEventListener('change', updateSettings);

    return () => {
      mediaQueries.prefersReducedMotion.removeEventListener('change', updateSettings);
      mediaQueries.prefersHighContrast.removeEventListener('change', updateSettings);
      mediaQueries.prefersLargeText.removeEventListener('change', updateSettings);
    };
  }, [autoDetect]);

  // Apply accessibility settings
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    const body = document.body;

    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      body.style.setProperty('--color-primary', '#ffffff');
      body.style.setProperty('--color-background', '#000000');
      body.style.setProperty('--color-text', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      body.style.removeProperty('--color-primary');
      body.style.removeProperty('--color-background');
      body.style.removeProperty('--color-text');
    }

    // Large text mode
    if (settings.largeText) {
      root.classList.add('large-text');
      body.style.fontSize = '18px';
      body.style.lineHeight = '1.6';
    } else {
      root.classList.remove('large-text');
      body.style.fontSize = '';
      body.style.lineHeight = '';
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
      body.style.setProperty('--animation-duration', '0.01ms');
      body.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.classList.remove('reduced-motion');
      body.style.removeProperty('--animation-duration');
      body.style.removeProperty('--transition-duration');
    }

    // Focus indicator
    if (settings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Notify parent component
    onSettingsChange?.(settings);
  }, [enabled, settings, onSettingsChange]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enabled || !settings.keyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.altKey) {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Enhanced tab navigation
      if (event.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const currentIndex = Array.from(focusableElements).indexOf(target);
        
        if (event.shiftKey && currentIndex === 0) {
          event.preventDefault();
          (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
        } else if (!event.shiftKey && currentIndex === focusableElements.length - 1) {
          event.preventDefault();
          (focusableElements[0] as HTMLElement).focus();
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const currentElement = event.target as HTMLElement;
        const parent = currentElement.parentElement;
        
        if (parent && parent.hasAttribute('role')) {
          event.preventDefault();
          this.handleArrowNavigation(event.key, currentElement, parent);
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="close" i], [aria-label*="cancel" i]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
      }
    };

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      // Track focus history
      if (target && !focusHistoryRef.current.includes(target)) {
        focusHistoryRef.current.push(target);
        if (focusHistoryRef.current.length > 10) {
          focusHistoryRef.current.shift();
        }
      }

      // Announce focus changes for screen readers
      if (settings.screenReader) {
        this.announceFocusChange(target);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocus);
    };
  }, [enabled, settings.keyboardNavigation, settings.screenReader]);

  // Handle arrow key navigation
  const handleArrowNavigation = useCallback((key: string, currentElement: HTMLElement, parent: HTMLElement) => {
    const focusableChildren = Array.from(parent.querySelectorAll('[tabindex]:not([tabindex="-1"])'));
    const currentIndex = focusableChildren.indexOf(currentElement);
    
    let nextIndex = currentIndex;
    
    switch (key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % focusableChildren.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = currentIndex === 0 ? focusableChildren.length - 1 : currentIndex - 1;
        break;
    }
    
    (focusableChildren[nextIndex] as HTMLElement).focus();
  }, []);

  // Announce focus changes for screen readers
  const announceFocusChange = useCallback((element: HTMLElement) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    
    const text = element.getAttribute('aria-label') || 
                 element.getAttribute('title') || 
                 element.textContent || 
                 element.tagName.toLowerCase();
    
    announcement.textContent = `Focused: ${text}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Add skip link
  useEffect(() => {
    if (!enabled) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none';
    skipLink.setAttribute('tabindex', '0');
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    skipLinkRef.current = skipLink;

    return () => {
      if (skipLinkRef.current && skipLinkRef.current.parentNode) {
        skipLinkRef.current.parentNode.removeChild(skipLinkRef.current);
      }
    };
  }, [enabled]);

  // Add ARIA landmarks
  useEffect(() => {
    if (!enabled) return;

    // Ensure main content has proper landmark
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
    }

    // Add navigation landmarks
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });

    // Add content landmarks
    const contentSections = document.querySelectorAll('section, article, aside');
    contentSections.forEach((section, index) => {
      if (!section.getAttribute('aria-label') && !section.getAttribute('aria-labelledby')) {
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
          const headingId = heading.id || `heading-${index}`;
          heading.id = headingId;
          section.setAttribute('aria-labelledby', headingId);
        }
      }
    });
  }, [enabled, location.pathname]);

  // Toggle accessibility settings
  const toggleSetting = useCallback((key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  // Reset to default settings
  const resetSettings = useCallback(() => {
    setSettings({
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusIndicator: true,
      screenReader: false,
      keyboardNavigation: true,
    });
  }, []);

  // Toggle accessibility panel visibility
  const togglePanel = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Accessibility Controls Button */}
      {showControls && (
        <button
          onClick={togglePanel}
          className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Accessibility settings"
          aria-expanded={isVisible}
          aria-controls="accessibility-panel"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}

      {/* Accessibility Settings Panel */}
      {isVisible && showControls && (
        <div
          id="accessibility-panel"
          className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-describedby="accessibility-description"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900">
              Accessibility Settings
            </h2>
            <button
              onClick={togglePanel}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close accessibility settings"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p id="accessibility-description" className="text-sm text-gray-600 mb-4">
            Customize your experience to make it more accessible
          </p>

          <div className="space-y-4">
            {/* High Contrast */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={() => toggleSetting('highContrast')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">High Contrast</span>
            </label>

            {/* Large Text */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={() => toggleSetting('largeText')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Large Text</span>
            </label>

            {/* Reduced Motion */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={() => toggleSetting('reducedMotion')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
            </label>

            {/* Focus Indicator */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.focusIndicator}
                onChange={() => toggleSetting('focusIndicator')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Focus Indicator</span>
            </label>

            {/* Screen Reader Support */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.screenReader}
                onChange={() => toggleSetting('screenReader')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Screen Reader Support</span>
            </label>

            {/* Keyboard Navigation */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.keyboardNavigation}
                onChange={() => toggleSetting('keyboardNavigation')}
                className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Enhanced Keyboard Navigation</span>
            </label>
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              onClick={resetSettings}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Reset
            </button>
            <button
              onClick={togglePanel}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Screen Reader Only Content */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentFocus && (
          <span>
            Focused on: {currentFocus.getAttribute('aria-label') || currentFocus.textContent || 'element'}
          </span>
        )}
      </div>
    </>
  );
};

// Export default component
export default EnhancedAccessibilityEnhancer;