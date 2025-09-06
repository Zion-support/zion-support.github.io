<<<<<<< HEAD
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
<<<<<<< HEAD
import {cn} from '@/lib/utils';
=======
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
=======
=======
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (


    { className, orientation = "horizontal", decorative = true, ...props },


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


        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",


        className
      )}
      {...props}
    />;
  );
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
export { Separator }
=======

export { Separator }
;

=======

export { Separator };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
