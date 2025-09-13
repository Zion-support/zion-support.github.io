import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  className,
  as: Component = 'h1'
}) => {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold',
        className
      )}
    >
      {children}
    </Component>
  );
};

export { GradientHeading };