export interface AccessibilityCheckResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
  score: number;
}

export const accessibilityChecker = {
  // Check for missing alt text on images
  checkImageAltText: (): AccessibilityCheckResult => {
    const images = document.querySelectorAll('img');
    const errors: string[] = [];
    const warnings: string[] = [];

    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        errors.push(`Image ${index + 1} is missing alt text`);
      } else if (img.alt === '') {
        warnings.push(`Image ${index + 1} has empty alt text`);
      }
    });

    const score = errors.length === 0 ? (warnings.length === 0 ? 100 : 80) : 0;

    return {
      passed: errors.length === 0,
      errors,
      warnings,
      score
    };
  },

  // Check for proper heading hierarchy
  checkHeadingHierarchy: (): AccessibilityCheckResult => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const errors: string[] = [];
    const warnings: string[] = [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        errors.push(`Heading ${index + 1} (${heading.tagName}) skips level(s)`);
      }
      
      if (level === 1 && index > 0) {
        warnings.push(`Multiple h1 elements found (heading ${index + 1})`);
      }
      
      previousLevel = level;
    });

    const score = errors.length === 0 ? (warnings.length === 0 ? 100 : 80) : 0;

    return {
      passed: errors.length === 0,
      errors,
      warnings,
      score
    };
  },

  // Check for proper form labels
  checkFormLabels: (): AccessibilityCheckResult => {
    const inputs = document.querySelectorAll('input, select, textarea');
    const errors: string[] = [];
    const warnings: string[] = [];

    inputs.forEach((input, index) => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');

      if (!label && !ariaLabel && !ariaLabelledBy) {
        errors.push(`Form control ${index + 1} is missing a label`);
      }
    });

    const score = errors.length === 0 ? 100 : 0;

    return {
      passed: errors.length === 0,
      errors,
      warnings,
      score
    };
  },

  // Check for proper color contrast
  checkColorContrast: (): AccessibilityCheckResult => {
    const errors: string[] = [];
    const warnings: string[] = [];

    // This is a simplified check - in a real implementation,
    // you would use a library like color-contrast-checker
    const elements = document.querySelectorAll('*');
    
    elements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic check for contrast (simplified)
      if (color === backgroundColor) {
        errors.push(`Element ${index + 1} has identical text and background color`);
      }
    });

    const score = errors.length === 0 ? 100 : 0;

    return {
      passed: errors.length === 0,
      errors,
      warnings,
      score
    };
  },

  // Run all accessibility checks
  runAllChecks: (): AccessibilityCheckResult => {
    const imageCheck = accessibilityChecker.checkImageAltText();
    const headingCheck = accessibilityChecker.checkHeadingHierarchy();
    const formCheck = accessibilityChecker.checkFormLabels();
    const contrastCheck = accessibilityChecker.checkColorContrast();

    const allErrors = [
      ...imageCheck.errors,
      ...headingCheck.errors,
      ...formCheck.errors,
      ...contrastCheck.errors
    ];

    const allWarnings = [
      ...imageCheck.warnings,
      ...headingCheck.warnings,
      ...formCheck.warnings,
      ...contrastCheck.warnings
    ];

    const averageScore = Math.round(
      (imageCheck.score + headingCheck.score + formCheck.score + contrastCheck.score) / 4
    );

    return {
      passed: allErrors.length === 0,
      errors: allErrors,
      warnings: allWarnings,
      score: averageScore
    };
  }
};

export default accessibilityChecker;