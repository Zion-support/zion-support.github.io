import React from 'react';

interface AccessibilityProps {
  className?: string;
}

const Accessibility: React.FC<AccessibilityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Accessibility</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Accessibility;