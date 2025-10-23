<<<<<<< HEAD
"use client";
import React, { useEffect } from "react";

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Keyboard navigation support
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Handle keyboard navigation
        if (event.key === "Tab") {
          // Ensure focus is visible
          document.body.classList.add("keyboard-navigation");
=======
import React, { useEffect, useState } from "react";

interface AccessibilitySettings {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: "small" | "medium" | "large";
  screenReader: boolean;
}

const AccessibilityEnhancer: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    reducedMotion: false,
    fontSize: "medium",
    screenReader: false,
  });

  useEffect(() => {
    // Detect user preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const prefersHighContrast = window.matchMedia(
      "(prefers-contrast: high)",
    ).matches;

    setSettings((prev) => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }));

    // Add skip links
    const existingSkipLink = document.querySelector(".skip-link");
    if (!existingSkipLink) {
      const skipLink = document.createElement("a");
      skipLink.href = "#main-content";
      skipLink.textContent = "Skip to main content";
      skipLink.className =
        "skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50";
      skipLink.setAttribute("aria-label", "Skip to main content");
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Add additional skip links for better navigation
    const skipLinks = [
      { href: "#navigation", text: "Skip to navigation" },
      { href: "#main-content", text: "Skip to main content" },
      { href: "#footer", text: "Skip to footer" },
    ];

    skipLinks.forEach(({ href, text }) => {
      const existingLink = document.querySelector(`.skip-link[href="${href}"]`);
      if (!existingLink) {
        const skipLink = document.createElement("a");
        skipLink.href = href;
        skipLink.textContent = text;
        skipLink.className =
          "skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 mr-2";
        skipLink.setAttribute("aria-label", text);
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    });

    // Add main content landmark
    const main = document.querySelector("main");
    if (main && !main.id) {
      main.id = "main-content";
      main.setAttribute("role", "main");
      main.setAttribute("aria-label", "Main content");
    }

    // Add navigation landmark
    const nav = document.querySelector("nav");
    if (nav && !nav.getAttribute("role")) {
      nav.id = "navigation";
      nav.setAttribute("role", "navigation");
      nav.setAttribute("aria-label", "Main navigation");
    }

    // Add footer landmark
    const footer = document.querySelector("footer");
    if (footer && !footer.getAttribute("role")) {
      footer.id = "footer";
      footer.setAttribute("role", "contentinfo");
      footer.setAttribute("aria-label", "Site footer");
    }

    // Add heading hierarchy validation
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (index === 0 && level !== 1) {
        if (process.env.NODE_ENV === "development") {
          // console.warn('First heading should be h1');
        }
      }
      if (level > previousLevel + 1) {
        if (process.env.NODE_ENV === "development") {
          // console.warn(`Heading level skipped: ${heading.tagName} after h${previousLevel}`);
        }
      }
      previousLevel = level;
    });

    // Add ARIA landmarks for better screen reader navigation
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      if (
        !section.getAttribute("aria-label") &&
        !section.getAttribute("aria-labelledby")
      ) {
        const heading = section.querySelector("h1, h2, h3, h4, h5, h6");
        if (heading) {
          section.setAttribute(
            "aria-labelledby",
            heading.id || `section-heading-${index}`,
          );
          if (!heading.id) {
            heading.id = `section-heading-${index}`;
          }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
        }
      };

<<<<<<< HEAD
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }

    // Add screen reader support
    if (enableScreenReaderSupport) {
      // Add skip links
      const skipLinks = document.createElement("div");
      skipLinks.className = "sr-only";
      skipLinks.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);

      return () => {
        if (skipLinks.parentNode) {
          skipLinks.parentNode.removeChild(skipLinks);
        }
      };
    }

    // High contrast mode
    if (enableHighContrast) {
      document.body.classList.add("high-contrast");
      return () => document.body.classList.remove("high-contrast");
=======
    // Enhance focus management
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation");
      }

      // Handle escape key for closing modals/dropdowns
      if (e.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("keyboard-navigation");
    };

    // Add comprehensive accessibility styles
    const style = document.createElement("style");
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        outline: 2px solid #ffffff !important;
        outline-offset: 2px !important;
      }

      /* High contrast mode */
      .high-contrast {
        filter: contrast(150%) brightness(1.2);
      }

      /* Reduced motion */
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Font size adjustments */
      .font-small {
        font-size: 0.875rem;
      }

      .font-large {
        font-size: 1.125rem;
      }

      .font-extra-large {
        font-size: 1.25rem;
      }

      /* Focus indicators */
      .focus-visible:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* Screen reader only content */
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

      .sr-only:focus {
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

    // Apply accessibility settings
    const body = document.body;
    if (settings.highContrast) {
      body.classList.add("high-contrast");
    }
    if (settings.reducedMotion) {
      body.classList.add("reduced-motion");
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    }

<<<<<<< HEAD
    // Focus management
    if (enableFocusManagement) {
      const handleFocusIn = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.add("focused");
        }
      };

      const handleFocusOut = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        if (target) {
          target.classList.remove("focused");
        }
      };

      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);

      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }

    return () => {
      // Cleanup function
=======
    // Add live region for announcements
    const liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only";
    liveRegion.id = "live-region";
    document.body.appendChild(liveRegion);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      const liveRegion = document.getElementById("live-region");
      if (liveRegion) {
        liveRegion.remove();
      }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    };
  }, [
    enableKeyboardNavigation,
    enableScreenReaderSupport,
    enableHighContrast,
    enableFocusManagement,
  ]);

<<<<<<< HEAD
  return <>{children}</>;
=======
  // Accessibility announcement function
  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById("live-region");
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  // Expose accessibility functions globally for other components
  useEffect(() => {
    (window as any).accessibilityUtils = {
      announce: announceToScreenReader,
      setHighContrast: (enabled: boolean) => {
        setSettings((prev) => ({ ...prev, highContrast: enabled }));
        document.body.classList.toggle("high-contrast", enabled);
      },
      setReducedMotion: (enabled: boolean) => {
        setSettings((prev) => ({ ...prev, reducedMotion: enabled }));
        document.body.classList.toggle("reduced-motion", enabled);
      },
      setFontSize: (size: "small" | "medium" | "large") => {
        setSettings((prev) => ({ ...prev, fontSize: size }));
        document.body.className = document.body.className.replace(
          /font-\w+/,
          "",
        );
        document.body.classList.add(`font-${size}`);
      },
    };
  }, []);

  return null;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
};

export default AccessibilityEnhancer;
