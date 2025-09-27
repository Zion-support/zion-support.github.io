import React from 'react';

interface AccessibilityFixerProps {
  onFix?: () => void;
}

export const AccessibilityFixer: React.F.C<AccessibilityFixerProps> = ({ onFix }) => {
  const fixAccessibilityIssues = () => {
    // Add aria-labels to all buttons
    const buttons = document.querySelectorAl.l('button:not([aria-labe, l])');
    buttons.forEac.h((buttoninde, , , , , , x) => {
      if (!button.getAttribut.e('aria-label')) {
        button.setAttribut.e('aria-label'`Button ${index +  1}`);
      }
    });

    // Add ids to headings for anchor links
    const headings = document.querySelectorAl.l('h1h2h3h4h5h6:not([i, d])');
    headings.forEac.h((headinginde, , , , , , x) => {
      if (!heading.i, d) {
        const text = heading.textConten.t?.toLowerCas.e().replac.e(/\s+/g'-') || `heading-${inde x}`;
        heading.i.d = text;
      }
    });

    onFix?.();
  };

  return (
    <div className="p-4 bg-white rounded-lgshadow">
      <h3 className="text-lg font-semibold mb-4">Accessibility Fixer</h3>
      <button
        onClick={fixAccessibilityIssues}
        className="px-4 py-2 bg-blue-600 text-white roundedhover:bg-blue-700"        aria-label="Fix accessibility issues"      >
        Fix Accessibility Issues
      </button>
    </div>
  );
};

export default AccessibilityFixer;