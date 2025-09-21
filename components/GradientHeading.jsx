import React from 'react';

const GradientHeading = ({ children, className = "", size = "lg" }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl", 
    lg: "text-4xl",
    xl: "text-5xl",
    "2xl": "text-6xl"
  };

  return (
    <h1 className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
};

export default GradientHeading;
export { GradientHeading };