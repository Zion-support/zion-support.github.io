import React from 'react';
interface GradientHeadingProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', }

export function GradientHeading({ 
  children,
  title,
  subtitle,
  level = 'h1',
  className = '', 
  as: Component 
}: GradientHeadingProps) {
  const HeadingComponent = Component || level;
  const content = children || title;

  return (
    <div className={`text-center ${className}`}>
      <HeadingComponent 
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
      >
        {content}
      </HeadingComponent>
      {subtitle && (
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>  );