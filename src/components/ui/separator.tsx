<<<<<<< HEAD
import * as React from 'react';
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn  } from "../../utils/cn";
const Separator = React.forwardRef<;
  React.ElementRef<typeof SeparatorPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
>(;
  (;
    { className, orientation = "horizontal", decorative = true, ...props },;
    ref;
  ) => (;
    <SeparatorPrimitive.Root;
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className = {;
  cn(;
        "shrink-0 bg-border",;
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",;
  className;
      );
=======
import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Separator({ orientation = 'horizontal', className = '' }: SeparatorProps) {
  return (
    <div
      className={`${
        orientation === 'horizontal' 
          ? 'h-px w-full' 
          : 'h-full w-px'
      } bg-border ${className}`}
    />
  );
}
>>>>>>> origin/backup-improvements-20250827-015311
