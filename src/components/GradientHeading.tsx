import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: 'primary' | 'secondary' | 'accent' | 'custom';
  customGradient?: string;
}

export const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  className,
  as: Component = 'h1',
  gradient = 'primary',
  customGradient,
}) => {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800',
    secondary: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600',
    accent: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600',
    custom: customGradient || 'bg-gradient-to-r from-blue-600 to-purple-600',
  };

  return (
    <Component
      className={cn(
        'bg-clip-text text-transparent font-bold',
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientHeading;