'use client';
import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableARIALabels?: boolean;
  enableColorContrast?: boolean;
  enableTextScaling?: boolean;
  enableMotionReduction?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableARIALabels = true,
  enableColorContrast = true,
  enableTextScaling = true,
  enableMotionReduction = true
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: true
  });

  const initializeAccessibility = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setAccessibilitySettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }));

    // Apply initial settings
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }

    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const setupKeyboardNavigation = useCallback(() => {
    if (typeof document === 'undefined' || !enableKeyboardNavigation) return;

    // Add keyboard navigation styles
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.3) !important;
      }
      
      .keyboard-navigation button:focus,
      .keyboard-navigation a:focus,
      .keyboard-navigation input:focus,
      .keyboard-navigation textarea:focus,
      .keyboard-navigation select:focus {
        outline: 2px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
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
    `;
    document.head.appendChild(style);

    // Add keyboard navigation class to body
    document.body.classList.add('keyboard-navigation');

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      // Skip to main content with Tab
      if (e.key === 'Tab' && !e.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === document.body) {
          (skipLink as HTMLElement).focus();
        }
      }

      // Handle Escape key
      if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
        modals.forEach(modal => {
          if (modal.getAttribute('aria-hidden') === 'false') {
            (modal as HTMLElement).setAttribute('aria-hidden', 'true');
            (modal as HTMLElement).style.display = 'none';
          }
        });
      }

      // Handle Enter and Space on interactive elements
      if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target as HTMLElement;
        if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
          e.preventDefault();
          target.click();
        }
      }
    });
  }, [enableKeyboardNavigation]);

  const setupScreenReaderSupport = useCallback(() => {
    if (typeof document === 'undefined' || !enableScreenReader) return;

    // Add screen reader only text
    const style = document.createElement('style');
    style.textContent = `
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
      
      .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    // Add skip links
    if (enableSkipLinks) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, [enableScreenReader, enableSkipLinks]);

  const setupARIALabels = useCallback(() => {
    if (typeof document === 'undefined' || !enableARIALabels) return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      const text = button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
      } else {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach((link, index) => {
      const text = link.textContent?.trim();
      const href = (link as HTMLAnchorElement).href;
      
      if (text && text.length > 0) {
        link.setAttribute('aria-label', `${text}${href ? ` - ${href}` : ''}`);
      } else {
        link.setAttribute('aria-label', `Link ${index + 1}${href ? ` - ${href}` : ''}`);
      }
    });

    // Add ARIA labels to form elements
    const inputs = document.querySelectorAll('input:not([aria-label])');
    inputs.forEach((input) => {
      const placeholder = (input as HTMLInputElement).placeholder;
      const name = (input as HTMLInputElement).name;
      const type = (input as HTMLInputElement).type;
      
      if (placeholder) {
        input.setAttribute('aria-label', placeholder);
      } else if (name) {
        input.setAttribute('aria-label', name.replace(/_/g, ' '));
      } else {
        input.setAttribute('aria-label', `${type} input`);
      }
    });

    // Add ARIA labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img, index) => {
      const src = (img as HTMLImageElement).src;
      const filename = src.split('/').pop()?.split('.')[0] || `image-${index + 1}`;
      img.setAttribute('alt', filename.replace(/[-_]/g, ' '));
    });

    // Add ARIA labels to icons
    const icons = document.querySelectorAll('[data-lucide], .icon, .fa, .fas, .far, .fab');
    icons.forEach((icon, index) => {
      if (!icon.getAttribute('aria-label') && !icon.getAttribute('aria-hidden')) {
        const className = icon.className;
        const iconName = className.match(/(?:lucide|lucide-|fa-|fas-|far-|fab-)([a-z-]+)/i)?.[1] || `icon-${index + 1}`;
        icon.setAttribute('aria-label', iconName.replace(/-/g, ' '));
      }
    });
  }, [enableARIALabels]);

  const setupColorContrast = useCallback(() => {
    if (typeof document === 'undefined' || !enableColorContrast) return;

    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --neon-cyan: #00ffff;
        --neon-purple: #8b5cf6;
        --neon-pink: #ec4899;
        --neon-green: #10b981;
        --neon-blue: #3b82f6;
        --neon-orange: #f59e0b;
        --neon-red: #ef4444;
        
        --cyber-bg: #000000;
        --cyber-surface: #1a1a1a;
        --cyber-border: #ffffff;
        --cyber-text: #ffffff;
        --cyber-text-secondary: #ffffff;
      }
      
      .high-contrast .cyber-card {
        background: #000000 !important;
        border: 2px solid #ffffff !important;
        color: #ffffff !important;
      }
      
      .high-contrast .neon-text {
        color: #00ffff !important;
        text-shadow: 0 0 5px #00ffff !important;
      }
      
      .high-contrast .cyber-button {
        background: #00ffff !important;
        color: #000000 !important;
        border: 2px solid #ffffff !important;
      }
      
      .high-contrast .cyber-button:hover {
        background: #ffffff !important;
        color: #000000 !important;
      }
    `;
    document.head.appendChild(style);

    // Add high contrast toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle High Contrast';
    toggle.className = 'accessibility-toggle';
    toggle.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
      background: #000;
      color: #fff;
      border: 1px solid #fff;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 12px;
    `;
    
    toggle.addEventListener('click', () => {
      const isHighContrast = document.documentElement.classList.contains('high-contrast');
      if (isHighContrast) {
        document.documentElement.classList.remove('high-contrast');
        setAccessibilitySettings(prev => ({ ...prev, highContrast: false }));
      } else {
        document.documentElement.classList.add('high-contrast');
        setAccessibilitySettings(prev => ({ ...prev, highContrast: true }));
      }
    });
    
    document.body.appendChild(toggle);
  }, [enableColorContrast]);

  const setupTextScaling = useCallback(() => {
    if (typeof document === 'undefined' || !enableTextScaling) return;

    const style = document.createElement('style');
    style.textContent = `
      .text-small { font-size: 0.875rem; }
      .text-normal { font-size: 1rem; }
      .text-large { font-size: 1.125rem; }
      .text-xl { font-size: 1.25rem; }
      .text-2xl { font-size: 1.5rem; }
      .text-3xl { font-size: 1.875rem; }
    `;
    document.head.appendChild(style);

    // Add text scaling controls
    const controls = document.createElement('div');
    controls.className = 'text-scaling-controls';
    controls.style.cssText = `
      position: fixed;
      top: 50px;
      right: 10px;
      z-index: 1000;
      background: #000;
      color: #fff;
      border: 1px solid #fff;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    `;

    const sizes = ['Small', 'Normal', 'Large'];
    sizes.forEach((size, index) => {
      const button = document.createElement('button');
      button.textContent = size;
      button.style.cssText = `
        background: #333;
        color: #fff;
        border: 1px solid #666;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
      `;
      
      button.addEventListener('click', () => {
        document.body.className = document.body.className.replace(/text-(small|normal|large)/g, '');
        document.body.classList.add(`text-${size.toLowerCase()}`);
        setAccessibilitySettings(prev => ({ ...prev, fontSize: size.toLowerCase() }));
      });
      
      controls.appendChild(button);
    });
    
    document.body.appendChild(controls);
  }, [enableTextScaling]);

  const setupMotionReduction = useCallback(() => {
    if (typeof document === 'undefined' || !enableMotionReduction) return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
        
        .neon-pulse,
        .cyber-glow,
        .neural-pulse,
        .energy-pulse {
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Add motion reduction toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Reduce Motion';
    toggle.className = 'motion-toggle';
    toggle.style.cssText = `
      position: fixed;
      top: 10px;
      right: 200px;
      z-index: 1000;
      background: #000;
      color: #fff;
      border: 1px solid #fff;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 12px;
    `;
    
    toggle.addEventListener('click', () => {
      const isReduced = document.documentElement.classList.contains('reduced-motion');
      if (isReduced) {
        document.documentElement.classList.remove('reduced-motion');
        setAccessibilitySettings(prev => ({ ...prev, reducedMotion: false }));
      } else {
        document.documentElement.classList.add('reduced-motion');
        setAccessibilitySettings(prev => ({ ...prev, reducedMotion: true }));
      }
    });
    
    document.body.appendChild(toggle);
  }, [enableMotionReduction]);

  const setupFocusManagement = useCallback(() => {
    if (typeof document === 'undefined' || !enableFocusManagement) return;

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
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
      });
    };

    // Apply focus trap to modals
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      trapFocus(modal as HTMLElement);
    });

    // Manage focus for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.matches('[role="dialog"], [role="alertdialog"]')) {
              trapFocus(element);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }, [enableFocusManagement]);

  useEffect(() => {
    initializeAccessibility();
    setupKeyboardNavigation();
    setupScreenReaderSupport();
    setupARIALabels();
    setupColorContrast();
    setupTextScaling();
    setupMotionReduction();
    setupFocusManagement();
  }, [
    initializeAccessibility,
    setupKeyboardNavigation,
    setupScreenReaderSupport,
    setupARIALabels,
    setupColorContrast,
    setupTextScaling,
    setupMotionReduction,
    setupFocusManagement
  ]);

  return null;
};

export default AccessibilityEnhancer;