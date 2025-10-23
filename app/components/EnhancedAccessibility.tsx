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

    // Apply accessibility settings
    if (settings.highContrast) {
      document.body.classList.add("high-contrast");
    }

    if (settings.reducedMotion) {
      document.body.classList.add("reduced-motion");
    }

    // Set font size
    document.documentElement.style.fontSize = `${settings.fontSize}px`;
  }, []);

  return <>{children}</>;
};

<<<<<<< HEAD
export default EnhancedAccessibility;

=======
export default EnhancedAccessibility;
>>>>>>> 516d08636e963cc03ae2bfbc2645b9ab9784f8a2
