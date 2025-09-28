import React, { useEffect, useState } from "react";

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const prefersHighContrast = window.matchMedia(
      "(prefers-contrast: high)",
    ).matches;

    setIsReducedMotion(prefersReducedMotion);
    setIsHighContrast(prefersHighContrast);

    // Apply accessibility styles
    const root = document.documentElement;

    if (isHighContrast) {
      root.style.setProperty("--contrast-multiplier", "1.5");
    }

    if (isReducedMotion) {
      root.style.setProperty("--animation-duration", "0.01ms");
      root.style.setProperty("--animation-iteration-count", "1");
    }

    // Set font size
    root.style.setProperty("--base-font-size", `${fontSize}px`);

    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links functionality
      if (event.key === "Tab" && event.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Add focus indicators
    const style = document.createElement("style");
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      @media (prefers-contrast: high) {
        .text-gray-600 { color: #000 !important; }
        .text-gray-400 { color: #333 !important; }
        .bg-gray-100 { background-color: #fff !important; }
        .border-gray-300 { border-color: #000 !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.head.removeChild(style);
    };
  }, [isHighContrast, fontSize, isReducedMotion]);

  // Keyboard shortcuts for accessibility
  useEffect(() => {
    const handleAccessibilityShortcuts = (event: KeyboardEvent) => {
      // Increase font size (Ctrl/Cmd + Plus)
      if ((event.ctrlKey || event.metaKey) && event.key === "=") {
        event.preventDefault();
        setFontSize((prev) => Math.min(prev + 2, 24));
      }

      // Decrease font size (Ctrl/Cmd + Minus)
      if ((event.ctrlKey || event.metaKey) && event.key === "-") {
        event.preventDefault();
        setFontSize((prev) => Math.max(prev - 2, 12));
      }

      // Reset font size (Ctrl/Cmd + 0)
      if ((event.ctrlKey || event.metaKey) && event.key === "0") {
        event.preventDefault();
        setFontSize(16);
      }

      // Toggle high contrast (Ctrl/Cmd + Shift + C)
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "C"
      ) {
        event.preventDefault();
        setIsHighContrast((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleAccessibilityShortcuts);
    return () =>
      document.removeEventListener("keydown", handleAccessibilityShortcuts);
  }, []);

  return (
    <div
      className={`accessibility-enhanced ${isHighContrast ? "high-contrast" : ""} ${isReducedMotion ? "reduced-motion" : ""}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
