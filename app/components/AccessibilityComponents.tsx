'use client';
import React from "react";

interface AccessibilityComponentsProps {
  className?: string;
;}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Accessibility Components</h2>
      <p>Accessibility components for enhanced user experience.</p>
    </div>
  );
};

export default AccessibilityComponents;
