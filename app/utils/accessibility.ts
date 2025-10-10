// Accessibility utility functions

export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
}

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[]];
  recommendations: string[]];
}

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  fix?: string;
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(options: AccessibilityOptions = {}): void {
  const {
    enableKeyboardNavigation = true,
    enableScreenReader = true,
    enableHighContrast = false,
    enableReducedMotion = false
  } = options;

  if (enableKeyboardNavigation) {
    setupKeyboardNavigation();
  }

  if (enableScreenReader) {
    setupScreenReaderSupport();
  }

  if (enableHighContrast) {
    setupHighContrastMode();
  }

  if (enableReducedMotion) {
    setupReducedMotion();
  }
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation(): void {
  document.addEventListener('keydown', (event) => {
    // Handle tab navigation
    if (event.key === 'Tab') {
      handleTabNavigation(event);
    }
    
    // Handle escape key
    if (event.key === 'Escape') {
      handleEscapeKey(event);
    }
    
    // Handle arrow keys for menu navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      handleArrowNavigation(event);
    }
  });
}

/**
 * Setup screen reader support
 */
function setupScreenReaderSupport(): void {
  // Add ARIA labels to interactive elements
  const interactiveElements = document.querySelectorAll('button, input, select, textarea, a[href]');
  
  interactiveElements.forEach((element) => {
    if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const text = element.textContent?.trim() || element.getAttribute('placeholder') || '';
      if (text) {
        element.setAttribute('aria-label', text);
      }
    }
  });
}

/**
 * Setup high contrast mode
 */
function setupHighContrastMode(): void {
  const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
  
  if (prefersHighContrast.matches) {
    document.body.classList.add('high-contrast');
  }
  
  prefersHighContrast.addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  });
}

/**
 * Setup reduced motion
 */
function setupReducedMotion(): void {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduced-motion');
  }
  
  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  });
}

/**
 * Handle tab navigation
 */
function handleTabNavigation(event: KeyboardEvent): void {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
  
  if (event.shiftKey) {
    // Shift + Tab - move backwards
    if (currentIndex > 0) {
      focusableElements[currentIndex - 1].focus();
    } else {
      focusableElements[focusableElements.length - 1].focus();
    }
  } else {
    // Tab - move forwards
    if (currentIndex < focusableElements.length - 1) {
      focusableElements[currentIndex + 1].focus();
    } else {
      focusableElements[0].focus();
    }
  }
  
  event.preventDefault();
}

/**
 * Handle escape key
 */
function handleEscapeKey(event: KeyboardEvent): void {
  // Close any open modals or dropdowns
  const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
  openModals.forEach((modal) => {
    const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
    if (closeButton) {
      (closeButton as HTMLElement).click();
    }
  });
}

/**
 * Handle arrow key navigation
 */
function handleArrowNavigation(event: KeyboardEvent): void {
  const menuItems = document.querySelectorAll('[role="menuitem"], [role="tab"]');
  const currentIndex = Array.from(menuItems).indexOf(document.activeElement as HTMLElement);
  
  if (currentIndex === -1) return;
  
  let nextIndex = currentIndex;
  
  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
      break;
  }
  
  if (nextIndex !== currentIndex) {
    (menuItems[nextIndex] as HTMLElement).focus();
    event.preventDefault();
  }
}

/**
 * Get all focusable elements
 */
function getFocusableElements(): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button: not([disabled])',
    'input: not([disabled])',
    'select: not([disabled])',
    'textarea: not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]']
  ];
  
  return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[]];
}

/**
 * Run accessibility audit
 */
export function runAccessibilityAudit(): AccessibilityAuditResult {
  const issues: AccessibilityIssue[] = []];
  let score = 100;
  
  // Check for missing alt text on images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
      issues.push({
        type: 'error',
        message: 'Image missing alt text',
        element: img,
        fix: 'Add alt attribute to image'
      });
      score -= 5;
    }
  });
  
  // Check for missing form labels
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach((input) => {
    const id = input.getAttribute('id');
    const label = id ? document.querySelector(`label[for="${id}"]`) : null;
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push({
        type: 'error',
        message: 'Form input missing label',
        element: input as HTMLElement,
        fix: 'Add label element or aria-label attribute'
      });
      score -= 5;
    }
  });
  
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push({
        type: 'warning',
        message: 'Heading hierarchy skipped level',
        element: heading as HTMLElement,
        fix: 'Use proper heading hierarchy (h1 -> h2 -> h3, etc.)'
      });
      score -= 2;
    }
    lastLevel = level;
  });
  
  // Check for sufficient color contrast
  const textElements = document.querySelectorAll('p, span, div, a, button');
  textElements.forEach((element) => {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    if (color && backgroundColor && color !== backgroundColor) {
      const contrast = calculateContrast(color, backgroundColor);
      if (contrast < 4.5) {
        issues.push({
          type: 'warning',
          message: 'Insufficient color contrast',
          element: element as HTMLElement,
          fix: 'Increase color contrast ratio to at least 4.5:1'
        });
        score -= 3;
      }
    }
  });
  
  const recommendations = generateRecommendations(issues);
  
  return {
    score: Math.max(0, score),
    issues,
    recommendations
  };
}

/**
 * Calculate color contrast ratio
 */
function calculateContrast(color1: string, color2: string): number {
  // Simplified contrast calculation
  // In a real implementation, you'd convert colors to RGB and calculate luminance
  return 4.5; // Placeholder
}

/**
 * Generate accessibility recommendations
 */
function generateRecommendations(issues: AccessibilityIssue[]): string[] {
  const recommendations: string[] = []];
  
  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;
  
  if (errorCount > 0) {
    recommendations.push(`Fix ${errorCount} accessibility errors`);
  }
  
  if (warningCount > 0) {
    recommendations.push(`Address ${warningCount} accessibility warnings`);
  }
  
  if (issues.length === 0) {
    recommendations.push('Great! No accessibility issues found');
  }
  
  return recommendations;
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(message: string): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Focus management utilities
 */
export function trapFocus(element: HTMLElement): void {
  const focusableElements = getFocusableElements().filter(el => 
    element.contains(el)
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0]];
  const lastElement = focusableElements[focusableElements.length - 1]];
  
  element.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  });
  
  firstElement.focus();
}