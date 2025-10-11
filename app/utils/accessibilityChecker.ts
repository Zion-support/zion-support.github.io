// Accessibility Checker Utility
export class AccessibilityChecker {
  private violations: string[] = [];

  checkAccessibility(): string[] {
    this.violations = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.violations.push(`Image ${index + 1} is missing alt text`);
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel > previousLevel + 1) {
        this.violations.push(`Heading hierarchy issue: ${heading.tagName} after h${previousLevel}`);
      }
      previousLevel = currentLevel;
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.violations.push(`Form input ${index + 1} is missing a label`);
      }
    });

    // Check for color contrast (basic check)
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        // Basic contrast check - this is simplified
        if (color === backgroundColor) {
          this.violations.push('Potential color contrast issue detected');
        }
      }
    });

    return this.violations;
  }

  getViolations(): string[] {
    return this.violations;
  }

  clearViolations(): void {
    this.violations = [];
  }
}

export default AccessibilityChecker;