<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;

import { cn } from &quot;@/lib/utils&quot;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
=======
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
const ScrollArea = React.forwardRef<;
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;
>(({ className, children, ...props }, ref) => (;
  <ScrollAreaPrimitive.Root;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    ref={ref}
    className={cn(&quot;relative overflow-hidden&quot;, className)}
    {...props}
<<<<<<< HEAD
  >
    <ScrollAreaPrimitive.Viewport className=&quot;h-full w-full rounded-[inherit]&quot;>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = &quot;vertical&quot;, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      &quot;flex touch-none select-none transition-colors&quot;,
      orientation === &quot;vertical&quot; &&
        &quot;h-full w-2.5 border-l border-l-transparent p-[1px]&quot;,
      orientation === &quot;horizontal&quot; &&
        &quot;h-2.5 flex-col border-t border-t-transparent p-[1px]&quot;,
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

=======
  >;
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">;
      {children}
    </ScrollAreaPrimitive.Viewport>;
    <ScrollBar />;
    <ScrollAreaPrimitive.Corner />;
  </ScrollAreaPrimitive.Root>;
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef<;
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,;
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;
>(({ className, orientation = "vertical", ...props }, ref) => (;
  <ScrollAreaPrimitive.ScrollAreaScrollbar;
    ref={ref}
    orientation={orientation}
    className={cn(;
      "flex touch-none select-none transition-colors",;
      orientation === "vertical" &&;
        "h-full w-2.5 border-l border-l-transparent p-[1px]",;
      orientation === "horizontal" &&;
        "h-2.5 flex-col border-t border-t-transparent p-[1px]";
      className;
    )}
    {...props}
  >;
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />;
  </ScrollAreaPrimitive.ScrollAreaScrollbar>;
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
export { ScrollArea, ScrollBar }
;