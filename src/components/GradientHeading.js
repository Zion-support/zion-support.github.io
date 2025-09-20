import React from 'react';

export function GradientHeading({ children, className = "" }) {
  return (
    <h1 className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
}

export default GradientHeading;