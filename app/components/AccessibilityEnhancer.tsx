import React, { useEffect, useCallback } from 'react';

interface AccessibilityOptions {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableHighContrastMode?: boolean;
  enableReducedMotion?: boolean;
  enableScreenReaderAnnouncements?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityOptions> = ({
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableHighContrastMode = true,
  enableReducedMotion = true,
  enableScreenReaderAnnouncements = true
}) => {
  const addSkipLinks = useCallback(() => {
    if (!enableSkipLinks) return;

    const existingSkipLink = document.querySelector('.skip-link');
    if (!existingSkipLink) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200';
      skipLink.setAttribute('aria-label', 'Skip to main content');
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add skip to navigation link
    const existingNavSkipLink = document.querySelector('.skip-nav-link');
    if (!existingNavSkipLink) {
      const navSkipLink = document.createElement('a');
      navSkipLink.href = '#main-navigation';
      navSkipLink.textContent = 'Skip to navigation';
      navSkipLink.className = 'skip-nav-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200';
      navSkipLink.setAttribute('aria-label', 'Skip to navigation');
      document.body.insertBefore(navSkipLink, document.body.firstChild);
    }
  }, [enableSkipLinks]);

  const addLandmarks = useCallback(() => {
    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Main content');
    }

    // Add navigation landmark
    const nav = document.querySelector('nav');
    if (nav && !nav.id) {
      nav.id = 'main-navigation';
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Main navigation');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
      footer.setAttribute('aria-label', 'Site footer');
    }

    // Add search landmark if exists
    const search = document.querySelector('[role="search"]');
    if (search && !search.getAttribute('aria-label')) {
      search.setAttribute('aria-label', 'Search');
    }
  }, []);

  const setupFocusManagement = useCallback(() => {
    if (!enableFocusManagement) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      // Handle escape key for closing modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
        
        // Close any open dropdowns or modals
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
        });
      }

      // Handle arrow keys for menu navigation
      if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.closest('[role="menu"]')) {
          e.preventDefault();
          // Custom arrow key navigation logic can be added here
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [enableFocusManagement]);

  const setupHighContrastMode = useCallback(() => {
    if (!enableHighContrastMode) return;

    // Check for high contrast mode preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    if (highContrastQuery.matches) {
      document.body.classList.add('high-contrast');
    }

    highContrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      highContrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, [enableHighContrastMode]);

  const setupReducedMotion = useCallback(() => {
    if (!enableReducedMotion) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    if (reducedMotionQuery.matches) {
      document.body.classList.add('reduced-motion');
    }

    reducedMotionQuery.addEventListener('change', handleMotionChange);

    return () => {
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [enableReducedMotion]);

  const setupScreenReaderAnnouncements = useCallback(() => {
    if (!enableScreenReaderAnnouncements) return;

    // Create live region for announcements
    const existingLiveRegion = document.querySelector('#live-region');
    if (!existingLiveRegion) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }

    // Announce page changes
    const announcePageChange = (message: string) => {
      const liveRegion = document.querySelector('#live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (if using React Router)
    const handleRouteChange = () => {
      const pageTitle = document.title;
      announcePageChange(`Navigated to ${pageTitle}`);
    };

    // This would be connected to your router in a real implementation
    // For now, we'll just set up the infrastructure
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enableScreenReaderAnnouncements]);

  const addAccessibilityStyles = useCallback(() => {
    const existingStyle = document.querySelector('#accessibility-styles');
    if (existingStyle) return;

    const style = document.createElement('style');
    style.id = 'accessibility-styles';
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus,
      .skip-nav-link:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
        background-color: #1d4ed8 !important;
      }
      
      .high-contrast {
        filter: contrast(1.2) brightness(1.1);
      }
      
      .high-contrast * {
        border-color: currentColor !important;
      }
      
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
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
      
      .focus\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // Initialize all accessibility features
    addSkipLinks();
    addLandmarks();
    addAccessibilityStyles();
    
    const focusCleanup = setupFocusManagement();
    if (focusCleanup) cleanupFunctions.push(focusCleanup);
    
    const contrastCleanup = setupHighContrastMode();
    if (contrastCleanup) cleanupFunctions.push(contrastCleanup);
    
    const motionCleanup = setupReducedMotion();
    if (motionCleanup) cleanupFunctions.push(motionCleanup);
    
    const announcementCleanup = setupScreenReaderAnnouncements();
    if (announcementCleanup) cleanupFunctions.push(announcementCleanup);

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [
    addSkipLinks,
    addLandmarks,
    addAccessibilityStyles,
    setupFocusManagement,
    setupHighContrastMode,
    setupReducedMotion,
    setupScreenReaderAnnouncements
  ]);

  return null;
};

export default AccessibilityEnhancer;
