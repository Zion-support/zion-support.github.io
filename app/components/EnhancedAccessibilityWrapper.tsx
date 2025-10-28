'use client';

import React, { memo } from 'react';

interface EnhancedAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-accessibility ${className}`}>
      {children}
    </div>
  );
});

EnhancedAccessibility.displayName = 'EnhancedAccessibility';

export default EnhancedAccessibility;