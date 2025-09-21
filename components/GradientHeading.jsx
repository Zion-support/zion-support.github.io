import React from 'react';

export function GradientHeading({ 
  children, 
  className = "", 
  size = "lg",
  gradient = "from-blue-600 to-purple-600"
}) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl", 
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl"
  },
  return (
    <h1 className={`font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}>
      {children}
    </h1>
  );
}