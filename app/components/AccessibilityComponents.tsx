
import React from 'react'

interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AccessibilityComponents({ className, children }: AccessibilityComponentsProps) {
  return (
    <div className={`accessibilitycomponents-component ${className || ''}`}>
      {children}
    </div>
  );
}
