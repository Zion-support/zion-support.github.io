"use client";
import React, { useEffect } from "react";

interface AccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = false,
  enableFocusManagement = true,
}) => {
  useEffect(() => {
    // Enable keyboard navigation
    if (enableKeyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Enable screen reader support
    if (enableScreenReaderSupport) {
      document.body.setAttribute("aria-live", "polite");
    }

    // Enable high contrast mode
    if (enableHighContrast) {
      document.body.classList.add("high-contrast");
    }

    // Enable focus management
    if (enableFocusManagement) {
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle keyboard navigation
    if (event.key === "Tab") {
      // Ensure focus is visible
      document.body.classList.add("keyboard-navigation");
    }
  };

  const handleFocusIn = (event: FocusEvent) => {
    // Handle focus management
    const target = event.target as HTMLElement;
    if (target) {
      target.setAttribute("aria-selected", "true");
    }
  };

  const handleFocusOut = (event: FocusEvent) => {
    // Handle focus management
    const target = event.target as HTMLElement;
    if (target) {
      target.removeAttribute("aria-selected");
    }
  };

  return null;
};

export default AccessibilityEnhancer;