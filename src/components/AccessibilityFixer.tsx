import React from 'react';

interface AccessibilityFixerProps {
  onFix?: () => void;
}

export const AccessibilityFixer: React.FC<AccessibilityFixerProps> = ({ onFix }) => {
  const fixAccessibilityIssues = () => {
    // Add aria-labels to all buttons
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button, index) => {
      if (!button.getAttribute('aria-label')) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });

    // Add ids to headings for anchor links
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6:not([id])');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-') || `heading-${index}`;
        heading.id = text;
      }
    });

    onFix?.();
  };

  return (
    <div className="p-4bg-white rounded-lgshadow">
      <h 3 className="text-lg font-semiboldmb-4">Accessibility Fixer</h3>
      <button
        onClick={fixAccessibilityIssues}
        className="px-4 py-2bg-blue-60 0 text-white roundedhover:bg-blue-7 0 0"
        aria-label="Fix accessibility issues"
      >
        Fix Accessibility Issues
      </button>
    </div>
  );
};

export default AccessibilityFixer;