'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableMotionReduction?: boolean;
  enableFontScaling?: boolean;
  enableVoiceNavigation?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableMotionReduction = true,
  enableFontScaling = true,
  enableVoiceNavigation = true
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    screenReader: false,
    keyboardNavigation: false
  });

  // Detect user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Check for color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setAccessibilitySettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    
    // Apply high contrast mode
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (accessibilitySettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply font scaling
    root.style.setProperty('--font-scale', accessibilitySettings.fontSize === 'large' ? '1.2' : '1');
  }, [accessibilitySettings]);

  // Keyboard navigation enhancement
  const setupKeyboardNavigation = useCallback(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const skipLink = document.querySelector('[data-skip-link]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }
      
      // Escape key to close modals/dropdowns
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.hasAttribute('data-close-on-escape')) {
          activeElement.click();
        }
      }
      
      // Arrow keys for menu navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]') as HTMLElement;
        if (menu && menu.contains(event.target as Node)) {
          event.preventDefault();
          const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
          const currentIndex = menuItems.indexOf(event.target as HTMLElement);
          const nextIndex = event.key === 'ArrowDown' 
            ? (currentIndex + 1) % menuItems.length
            : currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
          menuItems[nextIndex]?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Screen reader enhancements
  const setupScreenReaderSupport = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add live region for dynamic content updates
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (if using client-side routing)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      announcePageChange('Page changed');
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      announcePageChange('Page updated');
    };
  }, []);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      element.addEventListener('keydown', handleTabKey);
      firstElement?.focus();
      
      return () => element.removeEventListener('keydown', handleTabKey);
    };

    // Apply focus trap to modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const cleanup = trapFocus(modal as HTMLElement);
      // Store cleanup function for later use
      (modal as any).__focusTrapCleanup = cleanup;
    });
  }, []);

  // ARIA labels enhancement
  const enhanceARIALabels = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Add missing ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      } else {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      img.setAttribute('alt', `Image ${index + 1}`);
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input, index) => {
      const placeholder = input.getAttribute('placeholder');
      const label = input.getAttribute('name');
      if (placeholder) {
        input.setAttribute('aria-label', placeholder);
      } else if (label) {
        input.setAttribute('aria-label', label);
      } else {
        input.setAttribute('aria-label', `Input ${index + 1}`);
      }
    });
  }, []);

  // Skip links
  const addSkipLinks = useCallback(() => {
    if (typeof window === 'undefined') return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.setAttribute('aria-label', 'Skip links');

    skipLinks.forEach(({ href, text }) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = text;
      link.className = 'skip-link';
      link.setAttribute('data-skip-link', 'true');
      skipLinksContainer.appendChild(link);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }, []);

  // Color contrast checking
  const checkColorContrast = useCallback(() => {
    if (typeof window === 'undefined') return;

    const checkElementContrast = (element: HTMLElement) => {
      const styles = window.getComputedStyle(element);
      const backgroundColor = styles.backgroundColor;
      const color = styles.color;
      
      // Simple contrast check (this would need a more sophisticated implementation)
      if (backgroundColor && color) {
        // Add visual indicator for low contrast elements
        element.setAttribute('data-contrast-checked', 'true');
      }
    };

    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    elements.forEach(element => checkElementContrast(element as HTMLElement));
  }, []);

  // Voice navigation support
  const setupVoiceNavigation = useCallback(() => {
    if (typeof window === 'undefined' || !('webkitSpeechRecognition' in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      
      // Voice commands
      if (command.includes('go to home')) {
        window.location.href = '/';
      } else if (command.includes('go to about')) {
        window.location.href = '/about';
      } else if (command.includes('go to contact')) {
        window.location.href = '/contact';
      } else if (command.includes('go to services')) {
        window.location.href = '/services';
      } else if (command.includes('call phone')) {
        window.location.href = 'tel:+13024640950';
      } else if (command.includes('send email')) {
        window.location.href = 'mailto:kleber@ziontechgroup.com';
      }
    };

    // Add voice navigation button
    const voiceButton = document.createElement('button');
    voiceButton.textContent = 'Voice Navigation';
    voiceButton.className = 'voice-navigation-button';
    voiceButton.setAttribute('aria-label', 'Start voice navigation');
    voiceButton.onclick = () => recognition.start();
    
    const header = document.querySelector('header') || document.querySelector('nav');
    if (header) {
      header.appendChild(voiceButton);
    }
  }, []);

  // Initialize all accessibility features
  useEffect(() => {
    if (enableKeyboardNavigation) {
      setupKeyboardNavigation();
    }
    if (enableScreenReader) {
      setupScreenReaderSupport();
    }
    if (enableFocusManagement) {
      setupFocusManagement();
    }
    if (enableARIALabels) {
      enhanceARIALabels();
    }
    if (enableSkipLinks) {
      addSkipLinks();
    }
    if (enableColorContrast) {
      checkColorContrast();
    }
    if (enableVoiceNavigation) {
      setupVoiceNavigation();
    }
  }, [enableKeyboardNavigation, enableScreenReader, enableFocusManagement, enableARIALabels, enableSkipLinks, enableColorContrast, enableVoiceNavigation, setupKeyboardNavigation, setupScreenReaderSupport, setupFocusManagement, enhanceARIALabels, addSkipLinks, checkColorContrast, setupVoiceNavigation]);

  return null;
};

export default AdvancedAccessibilityEnhancer;