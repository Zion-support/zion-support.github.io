import React from 'react';

<<<<<<< HEAD
interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`accessibility-components ${className}`} role="region" aria-label="Accessibility Components">
      {children}
    </div>
  );
};

export default AccessibilityComponents;
=======
'use client'

import React from 'react'

interface AccessibilityComponentsProps {
  children: React.ReactNode
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ children }) => {
  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  )
}

export default AccessibilityComponents
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
