"use client";
import React from "react";

interface AccessibilityComponentsProps {
  children?: React.ReactNode;
  className?: string;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`accessibility-components ${className}`}>
      <h2>Accessibility Components</h2>
      <p>Accessibility components for enhanced user experience.</p>
      {children}
    </div>
  );
};

export default AccessibilityComponents;
