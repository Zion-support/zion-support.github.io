import React, { useEffect } from 'react';

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: string[]) => void;
}

const AccessibilityAuditor: React.FC<AccessibilityAuditorProps> = ({ onIssuesFound }) => {
  useEffect(() => {
    const checkAccessibility = () => {
      const issues: string[] = [];
      
      // Check for missing alt text on images
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt) {
          issues.push(`Image ${index + 1} is missing alt text`);
        }
      });
      
      // Check for missing form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          issues.push(`Form input ${index + 1} is missing a label`);
        }
      });
      
      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push(`Heading hierarchy issue: ${heading.tagName} follows h${previousLevel}`);
        }
        previousLevel = level;
      });
      
      // Check for sufficient color contrast (simplified check)
      const elements = document.querySelectorAll('*');
      elements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        // This is a simplified check - in a real implementation,
        // you would use a proper color contrast calculation library
        if (color === backgroundColor) {
          issues.push('Potential color contrast issue detected');
        }
      });
      
      // Check for keyboard navigation
      const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
      const tabIndexValues = Array.from(focusableElements).map(el => 
        parseInt(el.getAttribute('tabindex') || '0')
      );
      
      if (tabIndexValues.some(index => index > 0)) {
        issues.push('Some elements have positive tabindex values, which may affect keyboard navigation');
      }
      
      if (onIssuesFound && issues.length > 0) {
        onIssuesFound(issues);
      }
      
      if (issues.length > 0) {
        console.warn('Accessibility issues found:', issues);
      } else {
        console.log('No accessibility issues found');
      }
    };
    
    checkAccessibility();
  }, [onIssuesFound]);
  
  return null;
};

export default AccessibilityAuditor;