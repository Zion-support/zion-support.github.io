import React, {   useEffect   } from 'react';
export default function AccessibilityAudit() {
  useEffect(() => {
    // Run accessibility checks
    const runAccessibilityChecks = () => {
  
      const issues = [];

      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push(`Image ${index + 1} missing alt text`);
        }
      });

      // Check for missing form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        const id = input.id;
        const label = document.querySelector(`label[for="${id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledBy = input.getAttribute('aria-labelledby');
        
        if (!label && !ariaLabel && !ariaLabelledBy) {
          issues.push(`Input ${index + 1} missing label`);
        }
      });

      // Check for missing heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push(`Heading ${index + 1} (${heading.tagName}) skips level`);
        }
        previousLevel = level;
      });

      // Check for missing focus indicators
      const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
      focusableElements.forEach((element, index) => {
        const styles = window.getComputedStyle(element);
        if (styles.outline === 'none' && !element.classList.contains('focus-visible')) {'
          issues.push(`Focusable element ${index + 1} missing focus indicator`);
        }
      });

      // Check for color contrast (simplified)
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element, index) => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        if (color === backgroundColor) {
          issues.push(`Text element ${index + 1} has same color as background`);
        }
      });

      // Log issues
      if (issues.length > 0) {
        console.warn('Accessibility issues found:', issues);
      } else {
        console.log('✅ No accessibility issues found');
      }

      return issues;
    };

    // Run checks after page load
    setTimeout(runAccessibilityChecks, 1000);

    // Re-run checks on DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(runAccessibilityChecks, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}