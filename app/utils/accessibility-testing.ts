
// Accessibility testing utilities
export const accessibilityTesting = {
  // Check for missing alt text
  checkAltText: () => {
    const images = document.querySelectorAll('img');
    const missingAlt = Array.from(images).filter(img => !img.alt);
    return {
      total: images.length,
      missing: missingAlt.length,
      elements: missingAlt
    };
  },
  
  // Check for proper heading hierarchy
  checkHeadingHierarchy: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const levels = Array.from(headings).map(h => parseInt(h.tagName[1]));
    const issues = [];
    
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i-1] > 1) {
        issues.push({
          element: headings[i],
          issue: 'Heading level skipped',
          current: levels[i],
          previous: levels[i-1]
        });
      }
    }
    
    return {
      total: headings.length,
      issues: issues.length,
      details: issues
    };
  },
  
  // Check for keyboard accessibility
  checkKeyboardAccess: () => {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    const issues = [];
    
    interactiveElements.forEach(el => {
      if (el.tabIndex < 0 && el.tabIndex !== -1) {
        issues.push({
          element: el,
          issue: 'Invalid tabIndex value',
          value: el.tabIndex
        });
      }
    });
    
    return {
      total: interactiveElements.length,
      issues: issues.length,
      details: issues
    };
  }
};
