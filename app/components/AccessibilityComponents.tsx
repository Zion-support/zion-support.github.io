<<<<<<< HEAD
"use client";
import React from 'react';

const AccessibilityComponents = () => {
  return (
    <div>
      <h1>AccessibilityComponents</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default AccessibilityComponents;
=======
'use client'
import React from 'react'
interface AccessibilityComponentsProps {
  className?: string;
  children?: React.ReactNode;
}
const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default AccessibilityComponents
>>>>>>> 6d21a698833607de6a5fc802b68ed751e474e57d
