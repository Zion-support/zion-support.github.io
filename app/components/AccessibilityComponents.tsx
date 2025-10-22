import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>AccessibilityComponents</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default AccessibilityComponents;