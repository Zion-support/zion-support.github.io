import React from "react";

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className = "" }: GradientHeadingProps) {
  return (
    <h1 className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
}