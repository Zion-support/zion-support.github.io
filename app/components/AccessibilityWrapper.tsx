'use client';
import React from 'react';

interface AccessibilityWrapperProps {
  children: React.ReactNode;
}

const AccessibilityWrapper: React.FC<AccessibilityWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccessibilityWrapper;