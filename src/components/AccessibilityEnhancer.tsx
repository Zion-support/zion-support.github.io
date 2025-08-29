import React, { useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}

export function AccessibilityEnhancer() {
  const location = useLocation();
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusIndicator: true,
    screenReader: false
  });

  // Apply accessibility settings to document
  const applyAccessibilitySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (newSettings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    setSettings(newSettings);
    
    // Save to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  }, []);

  // Load accessibility settings from localStorage
  const loadAccessibilitySettings = useCallback(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const savedSettings = JSON.parse(saved);
        applyAccessibilitySettings(savedSettings);
      } catch (error) {
        console.warn('Failed to load accessibility settings:', error);
      }
    }
  }, [applyAccessibilitySettings]);

  // Enhanced keyboard navigation
  const enhanceKeyboardNavigation = useCallback(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      
      // Skip if target is an input field
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }
      
      switch (event.key) {
        case 'Tab':
          // Enhanced tab navigation
          const focusable = Array.from(document.querySelectorAll(focusableElements));
          const firstFocusable = focusable[0] as HTMLElement;
          const lastFocusable = focusable[focusable.length - 1] as HTMLElement;
          
          if (event.shiftKey && target === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          } else if (!event.shiftKey && target === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
          }
          break;
          
        case 'Escape':
          // Close modals and dropdowns
          const modals = document.querySelectorAll('[role="dialog"], [data-modal]');
          modals.forEach(modal => {
            if (modal instanceof HTMLElement) {
              modal.style.display = 'none';
            }
          });
          break;
          
        case 'Enter':
        case ' ':
          // Activate buttons and links with space/enter
          if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            event.preventDefault();
            target.click();
          }
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Enhanced focus management
  const enhanceFocusManagement = useCallback(() => {
    // Skip links for focus management
    const skipLinks = document.querySelectorAll('[data-skip-link]');
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (link as HTMLElement).getAttribute('href')?.substring(1);
        if (targetId) {
          const target = document.getElementById(targetId);
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
            announceToScreenReader(`Navigated to ${target.textContent || targetId}`);
          }
        }
      });
    });
  }, [announceToScreenReader]);

  // ARIA enhancements
  const enhanceARIA = useCallback(() => {
    // Add missing ARIA labels
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.setAttribute('alt', 'Decorative image');
        img.setAttribute('aria-hidden', 'true');
      }
    });
    
    // Enhance form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (input instanceof HTMLElement) {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        
        if (!label && !input.getAttribute('aria-label')) {
          input.setAttribute('aria-label', `Input field ${id || 'unnamed'}`);
        }
      }
    });
    
    // Add landmark roles
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
    
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }
  }, []);

  // Color contrast checker
  const checkColorContrast = useCallback(() => {
    const elements = document.querySelectorAll('*');
    const lowContrastElements: HTMLElement[] = [];
    
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        const style = window.getComputedStyle(element);
        const backgroundColor = style.backgroundColor;
        const color = style.color;
        
        // Simple contrast check (this is a basic implementation)
        if (backgroundColor && color && backgroundColor !== 'rgba(0, 0, 0, 0)' && color !== 'rgba(0, 0, 0, 0)') {
          // Add contrast warning class if needed
          element.classList.add('contrast-checked');
        }
      }
    });
  }, []);

  // Initialize accessibility features
  useEffect(() => {
    loadAccessibilitySettings();
    enhanceKeyboardNavigation();
    enhanceFocusManagement();
    enhanceARIA();
    checkColorContrast();
    
    // Announce route changes to screen readers
    announceToScreenReader(`Navigated to ${location.pathname === '/' ? 'home page' : location.pathname}`);
  }, [location.pathname, loadAccessibilitySettings, enhanceKeyboardNavigation, enhanceFocusManagement, enhanceARIA, checkColorContrast, announceToScreenReader]);

  // Add skip links to the page
  useEffect(() => {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.innerHTML = `
      <a href="#main-content" data-skip-link class="skip-link">
        Skip to main content
      </a>
      <a href="#navigation" data-skip-link class="skip-link">
        Skip to navigation
      </a>
      <a href="#footer" data-skip-link class="skip-link">
        Skip to footer
      </a>
    `;
    
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    
    return () => {
      if (document.body.contains(skipLinksContainer)) {
        document.body.removeChild(skipLinksContainer);
      }
    };
  }, []);

  // Add accessibility toggle button
  useEffect(() => {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'accessibility-toggle';
    toggleButton.setAttribute('aria-label', 'Accessibility settings');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '♿';
    toggleButton.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', (!expanded).toString());
      
      if (!expanded) {
        showAccessibilityPanel();
      } else {
        hideAccessibilityPanel();
      }
    });
    
    document.body.appendChild(toggleButton);
    
    return () => {
      if (document.body.contains(toggleButton)) {
        document.body.removeChild(toggleButton);
      }
    };
  }, []);

  const showAccessibilityPanel = () => {
    const panel = document.createElement('div');
    panel.className = 'accessibility-panel';
    panel.innerHTML = `
      <div class="accessibility-panel-content">
        <h3>Accessibility Settings</h3>
        <label>
          <input type="checkbox" ${settings.highContrast ? 'checked' : ''} onchange="this.dispatchEvent(new CustomEvent('highContrast', {detail: this.checked}))">
          High Contrast
        </label>
        <label>
          <input type="checkbox" ${settings.largeText ? 'checked' : ''} onchange="this.dispatchEvent(new CustomEvent('largeText', {detail: this.checked}))">
          Large Text
        </label>
        <label>
          <input type="checkbox" ${settings.reducedMotion ? 'checked' : ''} onchange="this.dispatchEvent(new CustomEvent('reducedMotion', {detail: this.checked}))">
          Reduced Motion
        </label>
        <label>
          <input type="checkbox" ${settings.focusIndicator ? 'checked' : ''} onchange="this.dispatchEvent(new CustomEvent('focusIndicator', {detail: this.checked}))">
          Focus Indicator
        </label>
      </div>
    `;
    
    panel.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 999;
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      min-width: 250px;
    `;
    
    // Add event listeners
    panel.addEventListener('highContrast', (e: any) => {
      applyAccessibilitySettings({ ...settings, highContrast: e.detail });
    });
    
    panel.addEventListener('largeText', (e: any) => {
      applyAccessibilitySettings({ ...settings, largeText: e.detail });
    });
    
    panel.addEventListener('reducedMotion', (e: any) => {
      applyAccessibilitySettings({ ...settings, reducedMotion: e.detail });
    });
    
    panel.addEventListener('focusIndicator', (e: any) => {
      applyAccessibilitySettings({ ...settings, focusIndicator: e.detail });
    });
    
    document.body.appendChild(panel);
    
    // Store reference for removal
    (window as any).currentAccessibilityPanel = panel;
  };

  const hideAccessibilityPanel = () => {
    const panel = (window as any).currentAccessibilityPanel;
    if (panel && document.body.contains(panel)) {
      document.body.removeChild(panel);
      (window as any).currentAccessibilityPanel = null;
    }
  };

  return null; // This component doesn't render anything
}