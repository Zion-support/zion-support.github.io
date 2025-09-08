import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: string;
}

export function GradientHeading({
  children,
  className,
  as: Component = 'h1',
  gradient = 'from-blue-600 via-purple-600 to-cyan-600'
}: GradientHeadingProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent font-bold',
        gradient,
        className
      )}
    >
      {children}
    </Component>
  );
}