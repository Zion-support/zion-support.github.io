import React from 'react';

interface AccessibilityPageProps {
  className?: string;
}

const AccessibilityPage: React.FC<AccessibilityPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AccessibilityPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AccessibilityPage;