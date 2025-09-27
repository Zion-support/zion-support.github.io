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
      <h3 className="text-lg font-semiboldmb-4">Accessibility Fixer</h3>
      <button
        onClick={fixAccessibilityIssues}
        className="px-4py-2bg-blue-600 text-white roundedhover:bg-blue-700"
        aria-label="Fix accessibility issues"
      >
        Fix Accessibility Issues
      </button>
    </div>
  );
};

export default AccessibilityFixer;