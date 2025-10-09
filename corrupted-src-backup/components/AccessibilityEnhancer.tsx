import React, { useEffect, useState } from "react";

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableReducedMotion = true,
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  useEffect(() => {
    // Check for user preferences
    if (enableHighContrast) {
      const _mediaQuery = window.matchMedia("(prefers-contrast: high)");
      setIsHighContrast(mediaQuery.matches);

      const _handleChange = (e: MediaQueryListEvent) =>
        setIsHighContrast(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    return undefined;
  }, [enableHighContrast]);

  useEffect(() => {
    // Check for reduced motion preference
    if (enableReducedMotion) {
      const _mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);

      const _handleChange = (e: MediaQueryListEvent) =>
        setIsReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    return undefined;
  }, [enableReducedMotion]);

  useEffect(() => {
    // Keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === "Tab" && e.shiftKey && e.target === document.body) {
          const _skipLink = document.querySelector(".skip-link") as HTMLElement;
          if (skipLink) {
            skipLink.focus();
            e.preventDefault();
          }
        }

        // Escape key handling
        if (e.key === "Escape") {
          const _activeElement = document.activeElement as HTMLElement;
          if (activeElement && activeElement.blur) {
            activeElement.blur();
          }
        }
      };

      // Focus management
      const handleFocusIn = (e: FocusEvent) => {
        setFocusVisible(true);
        const _target = e.target as HTMLElement;

        // Announce focus changes to screen readers
        if (enableScreenReaderSupport && target.getAttribute("aria-label")) {
          const _announcement = target.getAttribute("aria-label");
          if (announcement) {
            announceToScreenReader(announcement);
          }
        }
      };

      const handleFocusOut = () => {
        setFocusVisible(false);
      };

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
    return undefined;
  }, [enableKeyboardNavigation, enableScreenReaderSupport]);

  useEffect(() => {
    // Apply accessibility styles
    const _root = document.documentElement;

    if (isHighContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    if (isReducedMotion) {
      root.classList.add("reduced-motion");
    } else {
      root.classList.remove("reduced-motion");
    }

    if (focusVisible) {
      root.classList.add("focus-visible");
    } else {
      root.classList.remove("focus-visible");
    }
  }, [isHighContrast, isReducedMotion, focusVisible]);

  // Announce to screen reader
  const announceToScreenReader = (message: string) => {
    if (enableScreenReaderSupport) {
      const _announcement = document.createElement("div");
      announcement.setAttribute("aria-live", "polite");
      announcement.setAttribute("aria-atomic", "true");
      announcement.className = "sr-only";
      announcement.textContent = message;

      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  return (
    <div
      className={`accessibility-enhancer ${isHighContrast ? "high-contrast" : ""} ${isReducedMotion ? "reduced-motion" : ""}`}
      role="main"
      aria-label="Main content"
    >
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const _main =
            document.querySelector("main") ||
            document.querySelector("#main-content");
          if (main) {
            (main as HTMLElement).focus();
            (main as HTMLElement).scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Skip to main content
      </a>

      {/* Accessibility controls */}
      <div
        className="accessibility-controls"
        role="toolbar"
        aria-label="Accessibility controls"
      >
        <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="accessibility-toggle"
          aria-label={`${isHighContrast ? "Disable" : "Enable"} high contrast mode`}
        >
          {isHighContrast ? "🔆" : "🌙"} High Contrast
        </button>

        <button
          onClick={() => setIsReducedMotion(!isReducedMotion)}
          className="accessibility-toggle"
          aria-label={`${isReducedMotion ? "Disable" : "Enable"} reduced motion`}
        >
          {isReducedMotion ? "🏃" : "🚶"} Motion
        </button>
      </div>

      {children}
    </div>
  );
};

export default AccessibilityEnhancer;
