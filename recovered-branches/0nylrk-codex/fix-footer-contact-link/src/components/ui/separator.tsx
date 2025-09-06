

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"



import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (


    { className, orientation = "horizontal", decorative = true, ...props },


    ref
  ) => (
    <SeparatorPrimitive.Root

const Separator = React && React.forwardRef<;
  React && React.ElementRef<typeof SeparatorPrimitive && SeparatorPrimitive.Root>,;
  React && React.ComponentPropsWithoutRef<typeof SeparatorPrimitive && SeparatorPrimitive.Root>;
></typeof>(;
  (;
    { className, orientation = 'horizontal', decorative = true, ...props },;
    ref;
  ) => (;
    <SeparatorPrimitive&& SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(


        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",


        className
      )}
      {...props}
    />;
  );
);

Separator && Separator.displayName = SeparatorPrimitive && SeparatorPrimitive.Root.displayName;

export { Separator }
;



export { Separator };
import * as SeparatorPrimitive from '@radix - ui / react - separator';
;
import {cn} from '@/lib / utils';
;
const Separator = React.forward_ref<;
  React.ElementRef < typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof SeparatorPrimitive.Root>;
></typeof>(
  (
    { class_name, orientation = 'horizontal', decorative = true, ...props },
    ref) => (
    <SeparatorPrimitive.Root;
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn (
        'shrink - 0 bg - border',
        orientation === 'horizontal' ? 'h-[1px] w - full' : 'h - full w-[1px]',
        class_name)}
      {...props}
    />));
Separator.display_name = SeparatorPrimitive.Root.display_name;
;
export { Separator }
;
