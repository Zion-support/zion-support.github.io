import React, { useEffect } from "react";

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (event.altKey && event.key === "m") {
        const main = document.querySelector("main");
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add focus indicators
    const addFocusStyles = () => {
      const style = document.createElement("style");
      style.textContent = `
        *:focus {
          outline: 2px solid #8b5cf6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    };

    document.addEventListener("keydown", handleKeyDown);
    addFocusStyles();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;
