import * as React from 'react'
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn  } from '../../utils/cn'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
  {/* Removed stray closing parenthesis */}
Separator.displayName = SeparatorPrimitive.Root.displayName

<<<<<<< HEAD
export { Separator };
=======
export { Separator };
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
