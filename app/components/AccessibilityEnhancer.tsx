import React, { ReactNode, useEffect } from "react";

interface AccessibilityEnhancerProps {
  children?: ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanupFunctions: (() => void)[] = [];

    // Add keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip links functionality
        if (event.key === "Tab" && event.shiftKey === false) {
          const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
        
        // Escape key to close modals/dropdowns
        if (event.key === "Escape") {
          const activeElement = document.activeElement as HTMLElement;
          if (activeElement?.getAttribute("aria-expanded") === "true") {
            activeElement.click();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      cleanupFunctions.push(() => document.removeEventListener("keydown", handleKeyDown));
    }

    // Add screen reader announcements
    if (enableScreenReader) {
      const announceToScreenReader = (message: string) => {
        const announcement = document.createElement("div");
        announcement.setAttribute("aria-live", "polite");
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          if (document.body.contains(announcement)) {
            document.body.removeChild(announcement);
          }
        }, 1000);
      };

      // Announce page changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            const addedNodes = Array.from(mutation.addedNodes);
            const hasNewContent = addedNodes.some(node => 
              node.nodeType === Node.ELEMENT_NODE && 
              (node as Element).querySelector("h1, h2, h3, h4, h5, h6")
            );
            if (hasNewContent) {
              announceToScreenReader("Page content updated");
            }
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      cleanupFunctions.push(() => observer.disconnect());
    }

    // Add high contrast mode detection
    if (enableHighContrast) {
      const checkHighContrast = () => {
        const prefersHighContrast = window.matchMedia("(prefers-contrast: high)").matches;
        if (prefersHighContrast) {
          document.documentElement.classList.add("high-contrast");
        } else {
          document.documentElement.classList.remove("high-contrast");
        }
      };

      const mediaQuery = window.matchMedia("(prefers-contrast: high)");
      mediaQuery.addEventListener("change", checkHighContrast);
      checkHighContrast();

      cleanupFunctions.push(() => mediaQuery.removeEventListener("change", checkHighContrast));
    }

    // Add focus management
    if (enableFocusManagement) {
      const manageFocus = () => {
        // Add focus indicators
        const style = document.createElement("style");
        style.textContent = `
          .focus-visible:focus {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
          .keyboard-navigation *:focus {
            outline: 2px solid #00ffff !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(style);

        // Add focus trap for modals
        const trapFocus = (element: HTMLElement) => {
          const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          const handleTabKey = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  e.preventDefault();
                  lastElement?.focus();
                }
              } else {
                if (document.activeElement === lastElement) {
                  e.preventDefault();
                  firstElement?.focus();
                }
              }
            }
          };

          element.addEventListener("keydown", handleTabKey);
          return () => element.removeEventListener("keydown", handleTabKey);
        };

        // Apply focus trap to modals
        const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
        const modalCleanups = Array.from(modals).map(modal => trapFocus(modal as HTMLElement));
        cleanupFunctions.push(...modalCleanups);
      };

      manageFocus();
    }

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [enableKeyboardNavigation, enableScreenReader, enableHighContrast, enableFocusManagement]);

  return <>{children}</>;
};

export default AccessibilityEnhancer;
