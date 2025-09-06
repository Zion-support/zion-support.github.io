

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"



const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
=======
import * as React from &quot;react & quot;
import * as ScrollAreaPrimitive from &quot;@radix - ui / react - scroll - area & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const ScrollArea = React.forward_ref<;
  React.ElementRef < typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof ScrollAreaPrimitive.Root>;
>(({ class_name, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}


  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {children}


      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",


      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
<<<<<<< HEAD
<<<<<<< HEAD
export { ScrollArea, ScrollBar }
=======


export { ScrollArea, ScrollBar }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export { ScrollArea, ScrollBar };
=======

export { ScrollArea, ScrollBar }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
