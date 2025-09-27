import { useEffect } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: HTMLElement;
  rule?: string;
}

export default function AccessibilityAuditor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") {
      return;
    }
    
    const issues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img: HTMLImageElement) => {
      if (!img.alt) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          element: img,
          rule: 'alt-text'
        });
      }
    });

    // Check for missing labels on form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input: HTMLElement) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        issues.push({
          type: 'error',
          message: 'Form input missing label',
          element: input,
          rule: 'form-labels'
        });
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading: HTMLElement) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push({
          type: 'warning',
          message: 'Heading hierarchy skipped',
          element: heading,
          rule: 'heading-hierarchy'
        });
      }
      lastLevel = level;
    });

    // Log issues for debugging
    if (issues.length > 0) {
      console.log('Accessibility issues found:', issues);
    }

    // Cleanup function
    return () => {
      // Any cleanup needed
    };
  }, []);

  return null;
}