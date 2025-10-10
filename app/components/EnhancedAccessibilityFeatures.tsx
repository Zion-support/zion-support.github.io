'use client'
import React, { useEffect, useState, useCallback } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
}

const EnhancedAccessibilityFeatures: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: false,
    screenReader: false
  });

  // Detect screen reader usage
  useEffect(() => {
    const detectScreenReader = () => {
      const isScreenReader = 
        window.speechSynthesis ||
        'speechSynthesis' in window ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setSettings(prev => ({ ...prev, screenReader: !!isScreenReader }));
    };

    detectScreenReader();
  }, []);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    if (settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }, [settings]);

  // Keyboard navigation support
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to main content
    if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
        event.preventDefault();
      }
    }
    
    // Escape key to close modals
    if (event.key === 'Escape') {
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => {
        if (modal.getAttribute('aria-hidden') === 'false') {
          (modal as HTMLElement).click();
        }
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Announce page changes to screen readers
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

  // Focus management
  const manageFocus = useCallback((element: HTMLElement) => {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Add skip links
  useEffect(() => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
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
  }, []);

  // Add ARIA landmarks
  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }
    
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }
    
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('aria-label', 'Site footer');
    }
  }, []);

  // Expose functions globally for other components
  useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
    (window as any).manageFocus = manageFocus;
    
    return () => {
      delete (window as any).announceToScreenReader;
      delete (window as any).manageFocus;
    };
  }, [announceToScreenReader, manageFocus]);

  return (
    <style jsx global>{`
      /* Skip Links */
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
        z-index: 1000;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      /* Screen Reader Only */
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
      
      /* High Contrast Mode */
      .high-contrast {
        --bg-primary: #000000;
        --bg-secondary: #ffffff;
        --text-primary: #ffffff;
        --text-secondary: #000000;
        --accent: #ffff00;
      }
      
      .high-contrast * {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
        border-color: var(--accent) !important;
      }
      
      /* Large Text Mode */
      .large-text {
        font-size: 1.2em;
      }
      
      .large-text h1 { font-size: 3em; }
      .large-text h2 { font-size: 2.5em; }
      .large-text h3 { font-size: 2em; }
      .large-text h4 { font-size: 1.8em; }
      .large-text h5 { font-size: 1.6em; }
      .large-text h6 { font-size: 1.4em; }
      
      /* Reduced Motion */
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      /* Focus Visible */
      .focus-visible *:focus {
        outline: 3px solid #00ffff !important;
        outline-offset: 2px !important;
      }
      
      /* Focus Management */
      *:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
      }
      
      /* ARIA Live Regions */
      [aria-live] {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `}</style>
  );
};

export default EnhancedAccessibilityFeatures;