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
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
<<<<<<< HEAD
    { className, orientation = 'horizontal', decorative = true, ...props }
=======
    { className, orientation = "horizontal", decorative = true, ...props },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
<<<<<<< HEAD
        'shrink-0 bg-border'
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
=======
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
export { Separator }
=======
export { Separator }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export { Separator };
=======
export { Separator }
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
