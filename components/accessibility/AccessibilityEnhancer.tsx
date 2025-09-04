import React, { useEffect } from 'react';

// Type definitions for browser APIs
declare global {
  interface Window {
    KeyboardEvent: typeof KeyboardEvent;
    HTMLElement: typeof HTMLElement;
    MutationObserver: typeof MutationObserver;
  }
}

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  skipToContent?: boolean;
  focusManagement?: boolean;
  keyboardNavigation?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  skipToContent = true,
  focusManagement = true,
  keyboardNavigation = true
}) => {
  useEffect(() => {
    if (skipToContent) {
      const handleSkipToContent = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && !e.shiftKey) {
          const skipLink = document.getElementById('skip-to-content');
          if (skipLink && document.activeElement === document.body) {
            skipLink.focus();
          }
        }
      };

      document.addEventListener('keydown', handleSkipToContent);
      return () => document.removeEventListener('keydown', handleSkipToContent);
    }
  }, [skipToContent]);

  useEffect(() => {
    if (focusManagement) {
      const handleFocusManagement = () => {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            const handleTabKey = (e: KeyboardEvent) => {
              if (e.key === 'Tab') {
                if (e.shiftKey) {
                  if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                  }
                } else {
                  if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                  }
                }
              }
            };

            modal.addEventListener('keydown', handleTabKey);
          }
        });
      };

      handleFocusManagement();
      const observer = new MutationObserver(handleFocusManagement);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [focusManagement]);

  useEffect(() => {
    if (keyboardNavigation) {
      const handleKeyboardNavigation = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          const openDropdown = document.querySelector('[aria-expanded="true"]');
          
          if (openModal) {
            const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
            closeButton?.click();
          } else if (openDropdown) {
            (openDropdown as HTMLElement).click();
          }
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = document.querySelector('[role="menu"]');
          if (menu && document.activeElement?.closest('[role="menu"]')) {
            e.preventDefault();
            const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
            const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);
            
            if (currentIndex !== -1) {
              const nextIndex = e.key === 'ArrowDown'
                ? (currentIndex + 1) % menuItems.length
                : (currentIndex - 1 + menuItems.length) % menuItems.length;
              menuItems[nextIndex]?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyboardNavigation);
      return () => document.removeEventListener('keydown', handleKeyboardNavigation);
    }
  }, [keyboardNavigation]);

  return (
    <>
      {skipToContent && (
        <a
          id="skip-to-content"
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onFocus={(e) => {
            e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Skip to main content
        </a>
      )}
      {children}
    </>
  );
};

export const generateAccessibleId = (prefix: string, text: string): string => {
  return `${prefix}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`;
};

export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export default AccessibilityEnhancer;