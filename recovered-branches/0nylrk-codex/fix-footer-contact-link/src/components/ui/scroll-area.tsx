import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
"
import { cn } from "@/lib/utils"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (

<<<<<<< HEAD

  <ScrollAreaPrimitive.Root


    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}


      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>"
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar;
    ref={ref}
    orientation={orientation}
    className={cn(


        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",



=======
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}
      &quot;flex touch-none select-none transition-colors&quot;
      orientation === &quot;vertical&quot; &&
        &quot;h-full w-2.5 border-l border-l-transparent p-[1px]&quot;
      orientation === &quot;horizontal&quot; &&
        &quot;h-2.5 flex-col border-t border-t-transparent p-[1px]&quot;
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      className
    )}
    {...props}
  >
<<<<<<< HEAD


=======
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
>>>>>>> origin/cursor/delete-old-data-records-6bba
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

<<<<<<< HEAD


    </ScrollAreaPrimitive.Viewport>;
    <ScrollBar />;
    <ScrollAreaPrimitive.Corner />;



export { ScrollArea, ScrollBar }
;

export { ScrollArea, ScrollBar }

export { ScrollArea, ScrollBar }
;
export { ScrollArea, ScrollBar };

export { ScrollArea, ScrollBar }
;
export { ScrollArea, ScrollBar }
  </ScrollAreaPrimitive.Root>;
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
;
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
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",;
      className;
    )}
    {...props}
  >;
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />;
  </ScrollAreaPrimitive.ScrollAreaScrollbar>;
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
;





=======
    </ScrollAreaPrimitive.Viewport>;
    <ScrollBar />;
    <ScrollAreaPrimitive.Corner />;
    </ScrollAreaPrimitive.Viewport>;
    <ScrollBar />;
    <ScrollAreaPrimitive.Corner />;

export { ScrollArea, ScrollBar }
>>>>>>> origin/cursor/delete-old-data-records-6bba
