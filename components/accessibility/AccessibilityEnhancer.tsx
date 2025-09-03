import React, { useEffect } from "react";

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
  skipToContent?: boolean;
  highContrast?: boolean;
  reducedMotion?: boolean;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  skipToContent = true,
  highContrast = false,
  reducedMotion = false
}) => {
  useEffect(() => {
    // Apply accessibility enhancements
    const root = document.documentElement;
    
    if (highContrast) {
      root.classList.add('high-contrast');
    }
    
    if (reducedMotion) {
      root.classList.add('reduced-motion');
    }

    // Add skip to content link
    if (skipToContent) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }

    return () => {
      // Cleanup
      if (highContrast) {
        root.classList.remove('high-contrast');
      }
      if (reducedMotion) {
        root.classList.remove('reduced-motion');
      }
    };
  }, [skipToContent, highContrast, reducedMotion]);

  return (
    <div id="main-content">
      {children}
    </div>
  );
};

export default AccessibilityEnhancer;