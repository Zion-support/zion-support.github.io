import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

// Accessibility enhancement component with keyboard navigation and screen reader support
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }

      // Skip to navigation with Alt + N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav') || document.querySelector('[role="navigation"]');
        if (navigation) {
          (navigation as HTMLElement).focus();
        }
      }
    };

    // Add focus management for modals and dropdowns
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      
      // Ensure focus is visible
      if (target && target.classList.contains('focus:outline-none')) {
        target.classList.add('focus:ring-2', 'focus:ring-blue-500', 'focus:ring-offset-2');
      }
    };

    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    // Add skip links
    const skipLinks = document.createElement('div');
    skipLinks.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50';
    skipLinks.innerHTML = `
      <a href="#main-content" class="bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        Skip to main content
      </a>
      <a href="#navigation" class="bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
        Skip to navigation
      </a>
    `;
    document.body.insertBefore(skipLinks, document.body.firstChild);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      if (document.body.contains(skipLinks)) {
        document.body.removeChild(skipLinks);
      }
    };
  }, []);

  return <>{children}</>;
};

export default AccessibilityEnhancer;