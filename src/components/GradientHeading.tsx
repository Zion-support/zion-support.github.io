import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
};

export default GradientHeading;