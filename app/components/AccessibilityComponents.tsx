"use client"
import React from "react"

&quot;use client&quot;
interface AccessibilityComponentsProps {
  className?: string;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Accessibility Components</h1>
    </div>
  );
};

export default AccessibilityComponents;
