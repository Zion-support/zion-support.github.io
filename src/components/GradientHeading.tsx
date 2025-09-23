import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const GradientHeading = React.forwardRef<HTMLHeadingElement, GradientHeadingProps>(
  ({ children, className, as: Component = 'h2', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GradientHeading.displayName = 'GradientHeading';

export { GradientHeading };