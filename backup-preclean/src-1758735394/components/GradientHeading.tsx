import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className = "" }: GradientHeadingProps) {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
}