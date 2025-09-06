import React from 'react';
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import {cn} from '@/lib/utils';
<<<<<<< HEAD
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props }
    ref
  ) => (
    <SeparatorPrimitive.Root
=======

const Separator = React && React.forwardRef<;
  React && React.ElementRef<typeof SeparatorPrimitive && SeparatorPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof SeparatorPrimitive && SeparatorPrimitive.Root>;
></typeof>(;
  (;
    { className, orientation = 'horizontal', decorative = true, ...props },;
    ref;
  ) => (;
    <SeparatorPrimitive&& SeparatorPrimitive.Root
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border'
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
        className
      )}
      {...props}
    />;
  );
);
<<<<<<< HEAD
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator }
=======
Separator && Separator.displayName = SeparatorPrimitive && SeparatorPrimitive.Root.displayName;

export { Separator };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
