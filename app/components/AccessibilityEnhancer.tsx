'use client';

import React, { useEffect, useCallback, useState } from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReaderSupport?: boolean;
  enableKeyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableHighContrast = false,
  enableReducedMotion = false,
  enableScreenReaderSupport = true,
  enableKeyboardNavigation = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(enableHighContrast);
  const [isReducedMotion, setIsReducedMotion] = useState(enableReducedMotion);

  // Skip links functionality
  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;

    const skipLinks = document.querySelector('.skip-links');
    if (skipLinks) return; // Already exists

    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
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
        font-weight: bold;
        z-index: 1000;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }, [enableSkipLinks]);

  // Focus management
  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
      };

      modal.addEventListener('keydown', handleTabKey);
    });

    // Announce page changes to screen readers
    const announcePageChange = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    // Listen for route changes (Next.js specific)
    const observer = new MutationObserver(() => {
      const mainContent = document.querySelector('main, [role="main"]');
      if (mainContent) {
        announcePageChange('Page content has loaded');
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }, [enableFocusManagement]);

  // High contrast mode
  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  }, [isHighContrast]);

  // Reduced motion
  const toggleReducedMotion = useCallback(() => {
    setIsReducedMotion(!isReducedMotion);
    document.documentElement.classList.toggle('reduced-motion', !isReducedMotion);
  }, [isReducedMotion]);

  // Screen reader support
  const enhanceScreenReaderSupport = useCallback(() => {
    if (!enableScreenReaderSupport) return;

    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add role attributes
    const navigation = document.querySelector('nav');
    if (navigation && !navigation.getAttribute('role')) {
      navigation.setAttribute('role', 'navigation');
    }

    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    // Add heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.getAttribute('id')) {
        heading.id = `heading-${index}`;
      }
    });
  }, [enableScreenReaderSupport]);

  // Keyboard navigation
  const setupKeyboardNavigation = useCallback(() => {
    if (!enableKeyboardNavigation) return;

    // Add keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + M for main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main, [role="main"]');
        (main as HTMLElement)?.focus();
      }

      // Alt + N for navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav, [role="navigation"]');
        (nav as HTMLElement)?.focus();
      }

      // Alt + S for search
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        const search = document.querySelector('input[type="search"], [role="search"] input');
        (search as HTMLElement)?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    addSkipLinks();
    setupFocusManagement();
    enhanceScreenReaderSupport();
    const cleanup = setupKeyboardNavigation();

    return cleanup;
  }, [addSkipLinks, setupFocusManagement, enhanceScreenReaderSupport, setupKeyboardNavigation]);

  // Add CSS for accessibility features
  useEffect(() => {
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

      .high-contrast {
        filter: contrast(150%) brightness(120%);
      }

      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }

      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Accessibility controls component
  return (
    <div className="accessibility-controls" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <button
        onClick={toggleHighContrast}
        className="accessibility-toggle"
        aria-label="Toggle high contrast mode"
        title="Toggle high contrast mode"
      >
        {isHighContrast ? '🔆' : '🌙'}
      </button>
      <button
        onClick={toggleReducedMotion}
        className="accessibility-toggle"
        aria-label="Toggle reduced motion"
        title="Toggle reduced motion"
      >
        {isReducedMotion ? '🎬' : '⏸️'}
      </button>
    </div>
  );
};

export default AccessibilityEnhancer;