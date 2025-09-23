import React from 'react';

interface GradientHeadingProps {

  text: string;
  className?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({ 
  text, 
  className = '' 
}) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent ${className}`}>
      {text}
    </h1>
  );
};

