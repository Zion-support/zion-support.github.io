import React from 'react';

export function GradientHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
}