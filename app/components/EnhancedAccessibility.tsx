'use client';
import React, { ReactNode } from 'react';

interface EnhancedAccessibilityProps {
  children: ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAccessibility;
