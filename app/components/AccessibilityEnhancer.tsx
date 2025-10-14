'use client';

import React, { use Effect } from 'react';

interface Accessibility Enhancer Props {
  enable Keyboard Navigation?: boolean;
  enable Screen Reader Support?: boolean;
  enable High Contrast?: boolean;
  enable Focus Management?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enable Keyboard Navigation = true,
  enable Screen Reader Support = true,
  enable High Contrast = true,
  enable Focus Management = true
}) => {
  use Effect(() => {
    // Keyboard navigation enhancements
    if (enable Keyboard Navigation && typeof window !== 'undefined') {
      const handle Key Down = (event: Keyboard Event) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shift Key && event.target === document.body) {
          const skip Link = document.query Selector('a[href="#main-content"]') as HTMLAnchor Element;
          if (skip Link) {
            skip Link.focus();
            event.prevent Default();
          }
        }

        // Close dropdowns with Escape key
        if (event.key === 'Escape') {
          const open Dropdowns = document.query Selector All('[aria-expanded="true"]');
          open Dropdowns.for Each(dropdown => {
            (dropdown as HTMLElement).set Attribute('aria-expanded', 'false');
          });
        }
      };

      document.add Event Listener('keydown', handle Key Down);
      return () => document.remove Event Listener('keydown', handle Key Down);
    }

    // Focus management
    if (enable Focus Management && typeof window !== 'undefined') {
      const focusable Elements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trap Focus = (container: HTMLElement) => {
        const focusable Content = container.query Selector All(focusable Elements);
        const first Focusable Element = focusable Content[0] as HTMLElement;
        const last Focusable Element = focusable Content[focusable Content.length - 1] as HTMLElement;

        const handle Tab Key = (e: Keyboard Event) => {
          if (e.key !== 'Tab') return;

          if (e.shift Key) {
            if (document.active Element === first Focusable Element) {
              last Focusable Element.focus();
              e.prevent Default();
            }
          } else {
            if (document.active Element === last Focusable Element) {
              first Focusable Element.focus();
              e.prevent Default();
            }
          }
        };

        container.add Event Listener('keydown', handle Tab Key);
        first Focusable Element?.focus();

        return () => container.remove Event Listener('keydown', handle Tab Key);
      };

      // Apply focus trap to modals and dropdowns
      const modals = document.query Selector All('[role="dialog"], [aria-modal="true"]');
      modals.for Each(modal => trap Focus(modal as HTMLElement));
    }

    // Screen reader support
    if (enable Screen Reader Support && typeof window !== 'undefined') {
      // Add live region for dynamic content updates
      const live Region = document.create Element('div');
      live Region.set Attribute('aria-live', 'polite');
      live Region.set Attribute('aria-atomic', 'true');
      live Region.className = 'sr-only';
      live Region.id = 'live-region';
      document.body.append Child(live Region);

      // Announce page changes
      const announce Page Change = (message: string) => {
        const live Region = document.get Element By Id('live-region');
        if (live Region) {
          live Region.text Content = message;
        }
      };

      // Listen for route changes (if using React Router)
      const original Push State = history.push State;
      const original Replace State = history.replace State;

      history.push State = function(...args) {
        original Push State.apply(history, args);
        announce Page Change('Page changed');
      };

      history.replace State = function(...args) {
        original Replace State.apply(history, args);
        announce Page Change('Page updated');
      };

      return () => {
        document.body.remove Child(live Region);
        history.push State = original Push State;
        history.replace State = original Replace State;
      };
    }

    // High contrast mode support
    if (enable High Contrast && typeof window !== 'undefined') {
      const prefers High Contrast = window.match Media('(prefers-contrast: high)');
      
      const update High Contrast = (e: Media Query List Event) => {
        if (e.matches) {
          document.document Element.class List.add('high-contrast');
        } else {
          document.document Element.class List.remove('high-contrast');
        }
      };

      prefers High Contrast.add Event Listener('change', update High Contrast);
      update High Contrast(prefers High Contrast);

      return () => prefers High Contrast.remove Event Listener('change', update High Contrast);
    }
  }, [enable Keyboard Navigation, enable Screen Reader Support, enable High Contrast, enable Focus Management]);

  return null;
};

export default AccessibilityEnhancer;