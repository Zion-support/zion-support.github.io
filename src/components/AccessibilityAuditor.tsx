import React, { useEffect } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: HTMLElement;
  rule: string;
}

export default function AccessibilityAuditor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") {
      return;
    }

    const issues: AccessibilityIssue[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.alt) {
        issues.push({
          type: "error",
          message: "Image missing alt text",
          element: img,
          rule: "alt-text"
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const id = input.getAttribute("id");
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      if (!label) {
        issues.push({
          type: "warning",
          message: "Form input missing label",
          element: input as HTMLElement,
          rule: "label"
        });
      }
    });

    // Check for color contrast (simplified check)
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push({
          type: "warning",
          message: "Potential color contrast issue",
          element: element as HTMLElement,
          rule: "color-contrast"
        });
      }
    });

    // Log issues for debugging
    if (issues.length > 0) {
      console.log("Accessibility Issues Found:", issues);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
}