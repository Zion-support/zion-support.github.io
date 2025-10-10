'use client';
import React, { useEffect } from 'react';

<<<<<<< HEAD
interface AccessibilityEnhancerProps {children: React.ReactNode;,}
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;}const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({,
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true;}) => {useEffect(() => {
    // Keyboard navigation enhancements;
=======
interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    // Keyboard navigation enhancements
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
    if (enableKeyboardNavigation && typeof window !== 'undefined') {
      const handleKeyDown = (event: KeyboardEvent) => {,
        // Skip to main content;
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();}}

        // Close dropdowns with Escape key;
        if (event.key === 'Escape') {const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
          openDropdowns.forEach(dropdown => {)
            (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');})
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
<<<<<<< HEAD

    // Focus management;
    if (enableFocusManagement && typeof window !== 'undefined') {const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (container: HTMLElement) => {,
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {,
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();}} else {if (document.activeElement === lastFocusableElement) {}
              firstFocusableElement.focus();
              e.preventDefault();}}
        }

        container.addEventListener('keydown', handleTabKey);
        firstFocusableElement?.focus();

        return () => container.removeEventListener('keydown', handleTabKey);
      }

      // Apply focus trap to modals and dropdowns;
      const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
    }

    // Screen reader support;
    if (enableScreenReaderSupport && typeof window !== 'undefined') {// Add live region for dynamic content updates;
=======
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader support
    if (enableScreenReaderSupport && typeof window !== 'undefined') {
      // Add live region for announcements
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);

<<<<<<< HEAD
      // Announce page changes;
      const announcePageChange = (message: string) => {,
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
          liveRegion.textContent = message;}}

      // Listen for route changes (if using React Router)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {originalPushState.apply(history, args);
        announcePageChange('Page changed');}history.replaceState = function(...args) {originalReplaceState.apply(history, args);
        announcePageChange('Page updated');}return () => {document.body.removeChild(liveRegion);
        history.pushState = originalPushState;
        history.replaceState = originalReplaceState;}}

    // High contrast mode support;
    if (enableHighContrast && typeof window !== 'undefined') {const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');,
      
      const updateHighContrast = (e: MediaQueryListEvent) => {,
=======
      return () => {
        const existingLiveRegion = document.getElementById('live-region');
        if (existingLiveRegion) {
          existingLiveRegion.remove();
        }
      };
    }
  }, [enableScreenReaderSupport]);

  useEffect(() => {
    // High contrast mode
    if (enableHighContrast && typeof window !== 'undefined') {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');}else {document.documentElement.classList.remove('high-contrast');}}}

      if (prefersHighContrast.matches) {
        document.documentElement.classList.add('high-contrast');
      }

      prefersHighContrast.addEventListener('change', handleContrastChange);
      return () => prefersHighContrast.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast]);

<<<<<<< HEAD
  return <React.Fragment>{children</React.Fragment>}</React.Fragment>;
=======
  useEffect(() => {
    // Focus management
    if (enableFocusManagement && typeof window !== 'undefined') {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        
        // Ensure focus is visible
        if (target && target.focus) {
          target.style.outline = '2px solid #3b82f6';
          target.style.outlineOffset = '2px';
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        
        // Remove focus outline
        if (target) {
          target.style.outline = '';
          target.style.outlineOffset = '';
        }
      };

      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }
  }, [enableFocusManagement]);

  return null;
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
};

export default AccessibilityEnhancer;
