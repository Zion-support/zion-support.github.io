"use client";

import React, { useEffect } from "react";

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Enhanced accessibility features
    const settings: AccessibilitySettings = {
      highContrast: false,
      fontSize: 16,
      reducedMotion: false,
    };

    // Apply accessibility settings only in browser
    if (typeof window !== 'undefined' && document) {
      if (settings.highContrast) {
        document.body.classList.add("high-contrast");
      }

      if (settings.reducedMotion) {
        document.body.classList.add("reduced-motion");
      }

      // Set font size
      document.documentElement.style.fontSize = `${settings.fontSize}px`;
    }
  }, []);

  return <>{children}</>;
};

export default EnhancedAccessibility;
