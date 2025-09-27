import { useEffect } from 'react';

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  rule?: string;
}

export default function AccessibilityAuditor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }

    const issues: AccessibilityIssue[] = [];

    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        issues.push({
          type: 'error', 
          message: 'Image missing alt attribute', 
          element: img as HTMLElement,
          rule: 'img-alt'
        });
      }
    });

    // Check for missing labels on form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label) {
          issues.push({
            type: 'error', 
            message: 'Form input missing label', 
            element: input as HTMLElement,
            rule: 'label'
          });
        }
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push({
          type: 'warning', 
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading as HTMLElement,
          rule: 'heading-order'
        });
      }
      previousLevel = level;
    });

    // Check for sufficient color contrast (simplified check)
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // This is a simplified check - in production use a proper contrast checker
      if (color === backgroundColor) {
        issues.push({
          type: 'warning', 
          message: 'Potential color contrast issue', 
          element: element as HTMLElement,
          rule: 'color-contrast'
        });
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, input, select, textarea[tabindex]');
    interactiveElements.forEach((element) => {
      if (element.getAttribute('tabindex') === '-1' && !element.getAttribute('aria-hidden')) {
        issues.push({
          type: 'info', 
          message: 'Element is focusable but has tabindex="-1"', 
          element: element as HTMLElement,
          rule: 'tabindex'
        });
      }
    });

    // Check for proper ARIA attributes
    const elementsWithAria = document.querySelectorAll('[aria-expanded], [aria-selected], [aria-checked]');
    elementsWithAria.forEach((element) => {
      const role = element.getAttribute('role');
      const ariaExpanded = element.getAttribute('aria-expanded');
      const ariaSelected = element.getAttribute('aria-selected');
      const ariaChecked = element.getAttribute('aria-checked');
      
      if (ariaExpanded && !['button', 'menuitem', 'tab'].includes(role || '')) {
        issues.push({
          type: 'warning', 
          message: 'aria-expanded used without appropriate role', 
          element: element as HTMLElement,
          rule: 'aria-valid-attr'
        });
      }
    });

    // Log issues to console in development
    if (process.env.NODE_ENV === 'development' && issues.length > 0) {
      console.group('🔍 Accessibility Issues Found');
      issues.forEach((issue) => {
        const logMethod = issue.type === 'error' ? 'error' : issue.type === 'warning' ? 'warn' : 'info';
        console[logMethod](`${issue.type.toUpperCase()}: ${issue.message}`, issue.element);
      });
      console.groupEnd();
    }

    // Send issues to analytics in production
    if (process.env.NODE_ENV === 'production' && issues.length > 0) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'accessibility_audit', {
          event_category: 'Accessibility', 
          event_label: 'Issues Found', 
          value: issues.length,
          custom_parameter_1: issues.filter(i => i.type === 'error').length,
          custom_parameter_2: issues.filter(i => i.type === 'warning').length
        });
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}