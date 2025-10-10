'use client';
import React, { useEffect, useState } from 'react';
import { logger } from '../utils/productionLogger';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableAriaLabels?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableAriaLabels = true
}) => {
  const [accessibilityStatus, setAccessibilityStatus] = useState({
    keyboardNavigation: false,
    screenReaderSupport: false,
    highContrast: false,
    focusManagement: false,
    ariaLabels: false
  });

  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReaderSupport) {
      setupScreenReaderSupport();
    }
    if (enableHighContrast) {
      setupHighContrast();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }
    if (enableAriaLabels) {
      setupAriaLabels();
    }
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement, enableAriaLabels]);

  const setupKeyboardNavigation = (): void => {
    try {
      // Add keyboard navigation support
      document.addEventListener('keydown', handleKeyboardNavigation);
      
      // Add skip links
      addSkipLinks();
      
      // Add tab order management
      manageTabOrder();
      
      setAccessibilityStatus(prev => ({ ...prev, keyboardNavigation: true }));
      logger.info('Keyboard navigation setup completed', {}, 'AccessibilityEnhancer');
    } catch (error) {
      logger.error('Keyboard navigation setup failed', { error: (error as Error).message }, 'AccessibilityEnhancer');
    }
  };

  const setupScreenReaderSupport = (): void => {
    try {
      // Add screen reader announcements
      addScreenReaderAnnouncements();
      
      // Add live regions
      addLiveRegions();
      
      // Add landmark roles
      addLandmarkRoles();
      
      setAccessibilityStatus(prev => ({ ...prev, screenReaderSupport: true }));
      logger.info('Screen reader support setup completed', {}, 'AccessibilityEnhancer');
    } catch (error) {
      logger.error('Screen reader support setup failed', { error: (error as Error).message }, 'AccessibilityEnhancer');
    }
  };

  const setupHighContrast = (): void => {
    try {
      // Add high contrast mode support
      addHighContrastStyles();
      
      // Add color contrast validation
      validateColorContrast();
      
      setAccessibilityStatus(prev => ({ ...prev, highContrast: true }));
      logger.info('High contrast setup completed', {}, 'AccessibilityEnhancer');
    } catch (error) {
      logger.error('High contrast setup failed', { error: (error as Error).message }, 'AccessibilityEnhancer');
    }
  };

  const setupFocusManagement = (): void => {
    try {
      // Add focus management
      addFocusManagement();
      
      // Add focus indicators
      addFocusIndicators();
      
      setAccessibilityStatus(prev => ({ ...prev, focusManagement: true }));
      logger.info('Focus management setup completed', {}, 'AccessibilityEnhancer');
    } catch (error) {
      logger.error('Focus management setup failed', { error: (error as Error).message }, 'AccessibilityEnhancer');
    }
  };

  const setupAriaLabels = (): void => {
    try {
      // Add ARIA labels to interactive elements
      addAriaLabels();
      
      // Add ARIA descriptions
      addAriaDescriptions();
      
      setAccessibilityStatus(prev => ({ ...prev, ariaLabels: true }));
      logger.info('ARIA labels setup completed', {}, 'AccessibilityEnhancer');
    } catch (error) {
      logger.error('ARIA labels setup failed', { error: (error as Error).message }, 'AccessibilityEnhancer');
    }
  };

  const handleKeyboardNavigation = (event: KeyboardEvent): void => {
    // Handle escape key
    if (event.key === 'Escape') {
      // Close any open modals or dropdowns
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        if (modal.getAttribute('aria-hidden') === 'false') {
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    }

    // Handle tab navigation
    if (event.key === 'Tab') {
      // Ensure focus is visible
      document.body.classList.add('keyboard-navigation');
    }
  };

  const addSkipLinks = (): void => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    // Add styles for skip links
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: bold;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .skip-link:focus {
        top: 0;
        opacity: 1;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  const manageTabOrder = (): void => {
    // Ensure logical tab order
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach((element, index) => {
      if (!element.getAttribute('tabindex')) {
        element.setAttribute('tabindex', (index + 1).toString());
      }
    });
  };

  const addScreenReaderAnnouncements = (): void => {
    // Add announcement region
    const announcement = document.createElement('div');
    announcement.id = 'announcements';
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    document.body.appendChild(announcement);
  };

  const addLiveRegions = (): void => {
    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.id = 'live-region';
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  };

  const addLandmarkRoles = (): void => {
    // Add landmark roles to main sections
    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const nav = document.querySelector('nav');
    if (nav) {
      nav.setAttribute('role', 'navigation');
      nav.id = 'navigation';
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
      footer.id = 'footer';
    }

    const header = document.querySelector('header');
    if (header) {
      header.setAttribute('role', 'banner');
    }
  };

  const addHighContrastStyles = (): void => {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
        .bg-gray-100 {
          background-color: #000 !important;
          color: #fff !important;
        }
        .text-gray-600 {
          color: #fff !important;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const validateColorContrast = (): void => {
    // Basic color contrast validation
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified check - in production, use a proper contrast checker
      if (color && backgroundColor && color !== backgroundColor) {
        element.setAttribute('data-contrast-checked', 'true');
      }
    });
  };

  const addFocusManagement = (): void => {
    // Add focus management for modals and dropdowns
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      const modal = target.closest('[role="dialog"]');
      
      if (modal) {
        // Trap focus within modal
        const focusableElements = modal.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (target === lastElement) {
            firstElement.focus();
          }
        }
      }
    });
  };

  const addFocusIndicators = (): void => {
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #4f46e5 !important;
        outline-offset: 2px !important;
      }
      
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
    `;
    document.head.appendChild(style);
  };

  const addAriaLabels = (): void => {
    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      if (!text) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`);
    });
  };

  const addAriaDescriptions = (): void => {
    // Add ARIA descriptions to complex elements
    const complexElements = document.querySelectorAll('[data-aria-description]');
    complexElements.forEach(element => {
      const description = element.getAttribute('data-aria-description');
      if (description) {
        const id = `description-${Math.random().toString(36).substr(2, 9)}`;
        element.setAttribute('aria-describedby', id);
        
        const descriptionElement = document.createElement('div');
        descriptionElement.id = id;
        descriptionElement.className = 'sr-only';
        descriptionElement.textContent = description;
        element.appendChild(descriptionElement);
      }
    });
  };

    // Large text mode
    if (newSettings.largeText) {
      root.classList.add('large-text');
      root.style.fontSize = '1.2em';
    } else {
      root.classList.remove('large-text');
      root.style.fontSize = '';
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
      root.style.setProperty('--animation-speed', '0.01s');
    } else {
      root.classList.remove('reduced-motion');
      root.style.setProperty('--animation-speed', '0.3s');
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Store settings in localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    
    logger.info('Accessibility settings applied', newSettings);
  }, []);

  // Initialize accessibility settings
  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applyAccessibilitySettings(parsed);
      } catch (error) {
        logger.error('Failed to parse accessibility settings', error);
      }
    }

    // Detect screen reader
    const hasScreenReader = detectScreenReader();
    setSettings(prev => ({ ...prev, screenReader: hasScreenReader }));

    // Check for system preferences
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      
      setSettings(prev => ({
        ...prev,
        reducedMotion: prefersReducedMotion,
        highContrast: prefersHighContrast,
      }));
    }

    // Show accessibility panel after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [detectScreenReader, applyAccessibilitySettings]);

  // Handle setting changes
  const handleSettingChange = useCallback((key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
  }, [settings, applyAccessibilitySettings]);

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.volume = 0.5;
      speechSynthesis.speak(utterance);
    }
  }, []);

  // Skip to main content functionality
  const handleSkipToMain = useCallback(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      announceChange('Skipped to main content');
    }
  }, [announceChange]);

  // Keyboard navigation enhancement
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + A to toggle accessibility panel
      if (event.altKey && event.key === 'a') {
        event.preventDefault();
        setIsVisible(prev => !prev);
        announceChange(settings.screenReader ? 'Accessibility panel toggled' : '');
      }

      // Alt + S to skip to main content
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        handleSkipToMain();
      }

      // Escape to close accessibility panel
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleSkipToMain, announceChange, settings.screenReader]);

  if (!isVisible) return null;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={handleSkipToMain}
      >
        Skip to main content
      </a>

      {/* Accessibility Panel */}
      <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
        <h3 className="text-lg font-bold mb-4">Accessibility Settings</h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={(e) => {
                handleSettingChange('highContrast', e.target.checked);
                announceChange(e.target.checked ? 'High contrast enabled' : 'High contrast disabled');
              }}
              className="rounded"
            />
            <span>High Contrast</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.largeText}
              onChange={(e) => {
                handleSettingChange('largeText', e.target.checked);
                announceChange(e.target.checked ? 'Large text enabled' : 'Large text disabled');
              }}
              className="rounded"
            />
            <span>Large Text</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => {
                handleSettingChange('reducedMotion', e.target.checked);
                announceChange(e.target.checked ? 'Reduced motion enabled' : 'Reduced motion disabled');
              }}
              className="rounded"
            />
            <span>Reduce Motion</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.focusVisible}
              onChange={(e) => {
                handleSettingChange('focusVisible', e.target.checked);
                announceChange(e.target.checked ? 'Focus indicators enabled' : 'Focus indicators disabled');
              }}
              className="rounded"
            />
            <span>Focus Indicators</span>
          </label>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-700">
          <p className="text-sm text-gray-300">
            Keyboard shortcuts: Alt+A (toggle panel), Alt+S (skip to main), Esc (close)
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          aria-label="Close accessibility panel"
        >
          ×
        </button>
      </div>

      {/* Screen reader announcements */}
      <div
        id="sr-announcements"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </>
  );
};

export default AccessibilityEnhancer;