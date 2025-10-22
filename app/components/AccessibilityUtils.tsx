import React from 'react';

interface AccessibilityUtilsProps {
  className?: string;
}

const AccessibilityUtils: React.FC<AccessibilityUtilsProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>AccessibilityUtils</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default AccessibilityUtils;