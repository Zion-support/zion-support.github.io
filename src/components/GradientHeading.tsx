<<<<<<< HEAD
import React from 'react';
import { cn } from '@/lib/utils';
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
=======
import React from 'react.ts';
import { cn               } from '@/lib/utils';

interface GradientHeadingProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

<<<<<<< HEAD
export const GradientHeading: React.FC<GradientHeadingProps> = ({;
  children,
  className = '',
as: Component = 'h2';

}) => {
  return (
    <Component
      className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${className}`}

      {children}
    </Component>
  );
};}
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
