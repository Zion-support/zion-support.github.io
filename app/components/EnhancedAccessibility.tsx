'use client';
import React, { useEffect, useCallback, useRef } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableReducedMotion?: boolean;
  enableVoiceNavigation?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableReducedMotion = true,
  enableVoiceNavigation = false
}) => {
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const focusHistoryRef = useRef<HTMLElement[]>([]);

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation || typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, ctrlKey, altKey, shiftKey, target } = event;
      
      // Skip to main content (Alt + S)
      if (altKey && key === 's') {
        const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          event.preventDefault();
        }
      }

      // Skip to navigation (Alt + N)
      if (altKey && key === 'n') {
        const nav = document.querySelector('nav') as HTMLElement;
        if (nav) {
          const firstFocusable = nav.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      }

      // Skip to footer (Alt + F)
      if (altKey && key === 'f') {
        const footer = document.querySelector('footer') as HTMLElement;
        if (footer) {
          const firstFocusable = footer.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      }

      // Close dropdowns with Escape key
      if (key === 'Escape') {
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');
        openDropdowns.forEach(dropdown => {
          (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
          (dropdown as HTMLElement).blur();
        });
      }

      // Navigate between sections (Ctrl + Arrow keys)
      if (ctrlKey && (key === 'ArrowUp' || key === 'ArrowDown')) {
        const sections = document.querySelectorAll('section, main, nav, footer');
        const currentSection = Array.from(sections).find(section => 
          section.contains(target as Node)
        );
        
        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          const nextIndex = key === 'ArrowDown' 
            ? Math.min(currentIndex + 1, sections.length - 1)
            : Math.max(currentIndex - 1, 0);
          
          const nextSection = sections[nextIndex] as HTMLElement;
          const firstFocusable = nextSection.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      }

      // Announce current section
      if (key === 'Tab' && !shiftKey) {
        const currentElement = target as HTMLElement;
        const section = currentElement.closest('section, main, nav, footer');
        if (section) {
          const sectionTitle = section.querySelector('h1, h2, h3, h4, h5, h6')?.textContent;
          if (sectionTitle && liveRegionRef.current) {
            liveRegionRef.current.textContent = `Now in ${sectionTitle}`;
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation]);

  // Enhanced focus management
  useEffect(() => {
    if (!enableFocusManagement || typeof window === 'undefined') return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
    
    const trapFocus = (container: HTMLElement) => {
      const focusableContent = container.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent[0] as HTMLElement;
      const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          container.setAttribute('aria-hidden', 'true');
          container.style.display = 'none';
          const previousElement = focusHistoryRef.current.pop();
          if (previousElement) {
            previousElement.focus();
          }
        }
      };

      container.addEventListener('keydown', handleTabKey);
      container.addEventListener('keydown', handleEscape);
      firstFocusableElement?.focus();

      return () => {
        container.removeEventListener('keydown', handleTabKey);
        container.removeEventListener('keydown', handleEscape);
      };
    };

    // Apply focus trap to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [aria-modal="true"], [data-focus-trap="true"]');
    modals.forEach(modal => {
      const cleanup = trapFocus(modal as HTMLElement);
      return cleanup;
    });

    // Track focus history
    const trackFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && !focusHistoryRef.current.includes(target)) {
        focusHistoryRef.current.push(target);
        if (focusHistoryRef.current.length > 10) {
          focusHistoryRef.current.shift();
        }
      }
    };

    document.addEventListener('focusin', trackFocus);
    return () => document.removeEventListener('focusin', trackFocus);
  }, [enableFocusManagement]);

  // Enhanced screen reader support
  useEffect(() => {
    if (!enableScreenReaderSupport || typeof window === 'undefined') return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    liveRegion.ref = liveRegionRef;
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (message: string) => {
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes
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

    // Announce form validation errors
    const announceValidationError = (message: string) => {
      if (liveRegion) {
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.setAttribute('aria-live', 'polite');
        }, 1000);
      }
    };

    // Listen for form validation
    document.addEventListener('invalid', (e) => {
      const target = e.target as HTMLInputElement;
      const message = target.validationMessage || 'Please fill in this field correctly';
      announceValidationError(message);
    });

    return () => {
      document.body.removeChild(liveRegion);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [enableScreenReaderSupport]);

  // High contrast mode support
  useEffect(() => {
    if (!enableHighContrast || typeof window === 'undefined') return;

    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateHighContrast = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
        document.documentElement.style.setProperty('--contrast-ratio', '4.5');
      } else {
        document.documentElement.classList.remove('high-contrast');
        document.documentElement.style.removeProperty('--contrast-ratio');
      }
    };

    prefersHighContrast.addEventListener('change', updateHighContrast);
    updateHighContrast(prefersHighContrast);

    return () => prefersHighContrast.removeEventListener('change', updateHighContrast);
  }, [enableHighContrast]);

  // Reduced motion support
  useEffect(() => {
    if (!enableReducedMotion || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        `;
        document.head.appendChild(style);
      } else {
        document.documentElement.classList.remove('reduced-motion');
        // Remove the style if it exists
        const existingStyle = document.querySelector('style[data-reduced-motion]');
        if (existingStyle) {
          existingStyle.remove();
        }
      }
    };

    prefersReducedMotion.addEventListener('change', updateReducedMotion);
    updateReducedMotion(prefersReducedMotion);

    return () => prefersReducedMotion.removeEventListener('change', updateReducedMotion);
  }, [enableReducedMotion]);

  // Voice navigation support
  useEffect(() => {
    if (!enableVoiceNavigation || typeof window === 'undefined') return;

    const handleVoiceCommand = (event: SpeechRecognitionEvent) => {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      
      switch (command) {
        case 'go to home':
        case 'home page':
          window.location.href = '/';
          break;
        case 'go to about':
        case 'about page':
          window.location.href = '/about';
          break;
        case 'go to services':
        case 'services page':
          window.location.href = '/services';
          break;
        case 'go to contact':
        case 'contact page':
          window.location.href = '/contact';
          break;
        case 'scroll up':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'scroll down':
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          break;
        case 'search':
          const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
          }
          break;
      }
    };

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = handleVoiceCommand;
      
      // Start listening on voice command key (Ctrl + V)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'v') {
          recognition.start();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        recognition.stop();
      };
    }
  }, [enableVoiceNavigation]);

  return <>{children}</>;
};

export default EnhancedAccessibility;