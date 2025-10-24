<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
=======
import React, { useEffect } from 'react';

<<<<<<< HEAD
const EnhancedAccessibility: React.FC<{ children: React.ReactNode ,}> = ({ children }) => {
=======
=======
import { useEffect } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    focusVisible: false
  })
  // const { trackEvent } = useAnalytics()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
  useEffect(() => {
    // Add ARIA landmarks
    const addLandmarks = () => {
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
    };

    // Add skip links
    const addSkipLinks = () => {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Enhance focus management
    const enhanceFocusManagement = () => {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #06b6d4 !important;
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
        .sr-only.focus:not-sr-only {
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
    };

    // Initialize accessibility enhancements
<<<<<<< HEAD
    addLandmarks();
    addSkipLinks();
    enhanceFocusManagement();

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      if (skipLink) {
        skipLink.remove();
      }
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedAccessibility;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
import React from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAccessibility;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======


=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
'use client';
import React from "react";

const EnhancedAccessibility: React.FC<{children: React.ReactNode}> = ({children}) => {useEffect(() => {
    // Add high contrast mode support;
    const addHighContrastSupport = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');} else {document.documentElement.classList.remove('high-contrast');}
      };

      mediaQuery.addEventListener('change', handleContrastChange);
      handleContrastChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    };

    // Add reduced motion support;
    const addReducedMotionSupport = () => {const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('reduce-motion');} else {document.documentElement.classList.remove('reduce-motion');}
      };

      mediaQuery.addEventListener('change', handleMotionChange);
      handleMotionChange(mediaQuery);

      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    };

    // Add screen reader announcements;
    const addScreenReaderAnnouncements = () => {const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
<<<<<<< HEAD
      announcement.const className = 'sr-only';
      announcement.const id = 'announcements';
      document.body.appendChild(announcement);};
=======
      announcement.className = 'sr-only';
      announcement.id = 'announcements';
      document.body.appendChild(announcement);
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

    // Initialize accessibility features;
    const cleanupContrast = addHighContrastSupport();
    const cleanupMotion = addReducedMotionSupport();
    addScreenReaderAnnouncements();

    // Cleanup;
    return () => {cleanupContrast?.();
      cleanupMotion?.();};
  }, []);

<<<<<<< HEAD
  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
=======
    return <React.Fragment>{children}</React.Fragment>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
};

export default EnhancedAccessibility;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    addLandmarks()
    addSkipLinks()
    enhanceFocusManagement()
    addKeyboardNavigation()
      const header = document.querySelector('header')
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner')}
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
    setSettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    }))
    // Apply initial settings
    applyAccessibilitySettings({
      ...settings,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
    })
    // Listen for preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }))
      applyAccessibilitySettings({ ...settings, reducedMotion: e.matches })}
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, highContrast: e.matches }))
      applyAccessibilitySettings({ ...settings, highContrast: e.matches })}
    motionQuery.addEventListener('change', handleMotionChange)
    contrastQuery.addEventListener('change', handleContrastChange)
    // Setup keyboard navigation
    setupKeyboardNavigation()
    // Setup focus management
    setupFocusManagement()
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      contrastQuery.removeEventListener('change', handleContrastChange)
    }
  }, [settings, setupFocusManagement])

  const applyAccessibilitySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')} else {
      root.classList.remove('high-contrast')}

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')} else {
      root.classList.remove('reduced-motion')}

    // Apply font size
    root.classList.remove('font-normal', 'font-large', 'font-extra-large')
    root.classList.add(`font-${newSettings.fontSize}`)
    // Apply focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible')} else {
      root.classList.remove('focus-visible')}
  }
  const setupKeyboardNavigation = () => {
    // Skip to main content functionality
    const skipLink = document.querySelector('.skip-link')
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault()
        const main = document.querySelector('main')
        if (main) {
          main.focus()
          main.scrollIntoView()}
      })}

    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"]')
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus()
              e.preventDefault()}
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus()
              e.preventDefault()}
          }
        }
      }
      modal.addEventListener('keydown', handleKeyDown)})}
  const setupFocusManagement = () => {
    // Add focus indicators
    const style = document.createElement('style')
    style.textContent = `
      .focus-visible *:focus {
        outline: 2px solid #3b82f6
        outline-offset: 2px}
      
      .high-contrast {
        --tw-bg-opacity: 1
        --tw-text-opacity: 1}
      
      .reduced-motion * {
        animation-duration: 0.01ms !important
        animation-iteration-count: 1 !important
        transition-duration: 0.01ms !important}
      
      .font-large {
        font-size: 1.125rem}
      
      .font-extra-large {
        font-size: 1.25rem}
    `
    document.head.appendChild(style)
    // Track focus events for analytics
    document.addEventListener('focusin', (e) => {
      trackEvent('focus_event', {
        category: 'accessibility',
        label: (e.target as HTMLElement).tagName
      })})}
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)
    applyAccessibilitySettings(updatedSettings)
    trackEvent('accessibility_setting_changed', {
      category: 'accessibility',
      label: Object.keys(newSettings)[0]
    })}
  // Provide accessibility context
  useEffect(() => {
    const context = {
      settings,
      updateSettings
    }
    (window as unknown as { accessibilityContext: unknown }).accessibilityContext = context
  }, [settings, updateSettings])
  return <>{children}</>}
export default EnhancedAccessibility
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
=======
import React from 'react';

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = () => {
  return (
    <div className="enhancedaccessibility">
      <h2>EnhancedAccessibility</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default EnhancedAccessibility;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
