'use client';

import React from 'react';

interface EnhancedAccessibilityProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedAccessibility;