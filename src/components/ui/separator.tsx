import React from 'react';
<<<<<<< HEAD

interface SeparatorProps {
<<<<<<< HEAD
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '', 
  orientation = 'horizontal' 
=======
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal', 
  className = '' 
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
}) => {
  const baseClasses = 'shrink-0 bg-border';
  const orientationClasses = orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
  
  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
<<<<<<< HEAD
};

export { Separator };
=======
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
  }
>(({ className, orientation = 'horizontal', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    {...props}
  />
));
Separator.displayName = 'Separator';

export { Separator };
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
