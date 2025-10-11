// Accessibility checker utilities
export const checkAccessibility = (element: HTMLElement): string[] => {
  const issues: string[] = [];
  
  // Check for missing alt text on images
  const images = element.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push(`Image ${index + 1} is missing alt text`);
    }
  });
  
  // Check for missing labels on form inputs
  const inputs = element.querySelectorAll('input, textarea, select');
  inputs.forEach((input, index) => {
    const id = input.getAttribute('id');
    const label = element.querySelector(`label[for="${id}"]`);
    const ariaLabel = input.getAttribute('aria-label');
    
    if (!label && !ariaLabel) {
      issues.push(`Form input ${index + 1} is missing a label`);
    }
  });
  
  // Check for proper heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > lastLevel + 1) {
      issues.push(`Heading hierarchy issue: h${level} follows h${lastLevel} at position ${index + 1}`);
    }
    lastLevel = level;
  });
  
  return issues;
};

export const generateAccessibilityReport = (element: HTMLElement): {
  score: number;
  issues: string[];
  recommendations: string[];
} => {
  const issues = checkAccessibility(element);
  const score = Math.max(0, 100 - (issues.length * 10));
  
  const recommendations = [
    'Ensure all images have descriptive alt text',
    'Provide labels for all form inputs',
    'Maintain proper heading hierarchy',
    'Use sufficient color contrast',
    'Provide keyboard navigation support'
  ];
  
  return {
    score,
    issues,
    recommendations
  };
};