import React from 'react';

interface GradientHeadingProps {
  title: string;
  subtitle?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function GradientHeading({ 
  title, 
  subtitle, 
  level = 'h1', 
  className = '',
  children
}: GradientHeadingProps & { children?: React.ReactNode }) {
  const HeadingTag = level;
  
  return (
    <div className={className}>
      <HeadingTag className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        {children || title}
      </HeadingTag>
      {subtitle && (
        <p className="text-gray-300 mt-4 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
