import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import {cn} from '@/lib/utils';
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import { cn } from "@/lib/utils"

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
></typeof>(
  (

=======
    { className, orientation = 'horizontal', decorative = true, ...props }
    { className, orientation = "horizontal", decorative = true, ...props },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(

=======
        'shrink-0 bg-border'
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        className
      )}
      {...props}
    />;
  );
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export { Separator };
export { Separator }
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
