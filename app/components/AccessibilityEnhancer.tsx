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

  return null;
};

export default AccessibilityEnhancer;