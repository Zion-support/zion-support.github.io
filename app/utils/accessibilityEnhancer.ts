/**
 * Accessibility enhancement utilities
 * Provides methods for improving application accessibility
 */

import { logger } from './logger';

interface AccessibilityMetrics {
  focusableElements: number;
  headingStructure: string[];
  colorContrastIssues: number;
  missingAltText: number;
  keyboardNavigationScore: number;
}

class AccessibilityEnhancer {
  private metrics: AccessibilityMetrics = {
    focusableElements: 0,
    headingStructure: [],
    colorContrastIssues: 0,
    missingAltText: 0,
    keyboardNavigationScore: 0,
  };

  /**
   * Initialize accessibility monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.analyzeFocusableElements();
    this.analyzeHeadingStructure();
    this.analyzeImages();
    this.analyzeColorContrast();
    this.setupKeyboardNavigation();

    logger.info('Accessibility monitoring initialized', 'AccessibilityEnhancer');
  }

  /**
   * Analyze focusable elements
   */
  private analyzeFocusableElements(): void {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusableElements = document.querySelectorAll(focusableSelectors.join(', '));
    this.metrics.focusableElements = focusableElements.length;

    // Check for proper tab order
    const elements = Array.from(focusableElements);
    const tabIndices = elements.map(el => parseInt(el.getAttribute('tabindex') || '0'));
    const isSequential = tabIndices.every((index, i) => i === 0 || index >= tabIndices[i - 1]);

    if (!isSequential) {
      logger.warn('Non-sequential tab order detected', 'AccessibilityEnhancer', {
        focusableElements: this.metrics.focusableElements,
        tabIndices,
      });
    }

    logger.info('Focusable elements analyzed', 'AccessibilityEnhancer', {
      count: this.metrics.focusableElements,
      sequential: isSequential,
    });
  }

  /**
   * Analyze heading structure
   */
  private analyzeHeadingStructure(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const structure: string[] = [];

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent?.trim() || '';
      structure.push(`H${level}: ${text}`);
    });

    this.metrics.headingStructure = structure;

    // Check for proper heading hierarchy
    const levels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
    let hasIssues = false;

    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        hasIssues = true;
        break;
      }
    }

    if (hasIssues) {
      logger.warn('Heading hierarchy issues detected', 'AccessibilityEnhancer', {
        structure: this.metrics.headingStructure,
      });
    }

    logger.info('Heading structure analyzed', 'AccessibilityEnhancer', {
      count: headings.length,
      hasIssues,
    });
  }

  /**
   * Analyze images for alt text
   */
  private analyzeImages(): void {
    const images = document.querySelectorAll('img');
    let missingAltText = 0;

    images.forEach(img => {
      const alt = img.getAttribute('alt');
      if (!alt || alt.trim() === '') {
        missingAltText++;
        logger.warn('Image missing alt text', 'AccessibilityEnhancer', {
          src: img.src,
          className: img.className,
        });
      }
    });

    this.metrics.missingAltText = missingAltText;

    logger.info('Images analyzed for alt text', 'AccessibilityEnhancer', {
      totalImages: images.length,
      missingAltText,
    });
  }

  /**
   * Analyze color contrast (simplified check)
   */
  private analyzeColorContrast(): void {
    // This is a simplified check - in a real implementation, you'd use a proper contrast checker
    const textElements = document.querySelectorAll('p, span, div, a, button, h1, h2, h3, h4, h5, h6');
    let contrastIssues = 0;

    textElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;

      // Basic check for high contrast (simplified)
      if (color === backgroundColor) {
        contrastIssues++;
      }
    });

    this.metrics.colorContrastIssues = contrastIssues;

    if (contrastIssues > 0) {
      logger.warn('Potential color contrast issues detected', 'AccessibilityEnhancer', {
        issues: contrastIssues,
      });
    }

    logger.info('Color contrast analyzed', 'AccessibilityEnhancer', {
      textElements: textElements.length,
      contrastIssues,
    });
  }

  /**
   * Setup keyboard navigation monitoring
   */
  private setupKeyboardNavigation(): void {
    let keyboardScore = 0;
    const maxScore = 5;

    // Check for skip links
    const skipLinks = document.querySelectorAll('a[href="#main"], a[href="#content"]');
    if (skipLinks.length > 0) keyboardScore++;

    // Check for proper focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    const hasFocusStyles = Array.from(focusableElements).some(el => {
      const style = window.getComputedStyle(el, ':focus');
      return style.outline !== 'none' || style.boxShadow !== 'none';
    });
    if (hasFocusStyles) keyboardScore++;

    // Check for ARIA landmarks
    const landmarks = document.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"]');
    if (landmarks.length > 0) keyboardScore++;

    // Check for proper form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    const labeledInputs = Array.from(inputs).filter(input => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      return label || ariaLabel || ariaLabelledBy;
    });
    if (labeledInputs.length === inputs.length) keyboardScore++;

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 1 && headings.length > 0) keyboardScore++;

    this.metrics.keyboardNavigationScore = (keyboardScore / maxScore) * 100;

    logger.info('Keyboard navigation analyzed', 'AccessibilityEnhancer', {
      score: this.metrics.keyboardNavigationScore,
      maxScore,
      details: {
        skipLinks: skipLinks.length,
        hasFocusStyles,
        landmarks: landmarks.length,
        labeledInputs: labeledInputs.length,
        totalInputs: inputs.length,
        h1Count,
        totalHeadings: headings.length,
      },
    });
  }

  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate accessibility report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    const report = [
      `Focusable Elements: ${metrics.focusableElements}`,
      `Missing Alt Text: ${metrics.missingAltText}`,
      `Color Contrast Issues: ${metrics.colorContrastIssues}`,
      `Keyboard Navigation Score: ${metrics.keyboardNavigationScore.toFixed(1)}%`,
      `Heading Structure: ${metrics.headingStructure.length} headings`,
    ].join('\n');

    logger.info('Accessibility report generated', 'AccessibilityEnhancer', { report });
    return report;
  }

  /**
   * Enhance focus management
   */
  enhanceFocusManagement(): void {
    // Add focus trap for modals
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach(modal => {
      this.addFocusTrap(modal as HTMLElement);
    });

    // Add skip links if they don't exist
    this.addSkipLinks();

    logger.info('Focus management enhanced', 'AccessibilityEnhancer');
  }

  private addFocusTrap(element: HTMLElement): void {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  private addSkipLinks(): void {
    if (document.querySelector('.skip-link')) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();
