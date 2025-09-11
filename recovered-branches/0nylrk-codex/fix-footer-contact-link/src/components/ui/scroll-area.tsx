<<<<<<< HEAD


<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
>
    <ScrollAreaPrimitive.Viewport className=&quot;h-full w-full rounded-[inherit]&quot;>
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      &quot;flex touch-none select-none transition-colors&quot;
      orientation === &quot;vertical&quot; &&
        &quot;h-full w-2.5 border-l border-l-transparent p-[1px]&quot;
      orientation === &quot;horizontal&quot; &&
        &quot;h-2.5 flex-col border-t border-t-transparent p-[1px]&quot;
<<<<<<< HEAD
=======


  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {children}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className
    )}
    {...props}
  >
<<<<<<< HEAD
<<<<<<< HEAD
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
=======
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

<<<<<<< HEAD
<<<<<<< HEAD
>;
    <ScrollAreaPrimitive.Viewport className=&quot;h - full w - full rounded-[inherit]&quot;>;
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
;
import { cn } from "@/lib/utils";
;
const ScrollArea = React.forwardRef<;
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>;
>(({ className, children, ...props }, ref) => (;
  <ScrollAreaPrimitive.Root;
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >;
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">;
      {children}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
export { ScrollArea, ScrollBar }import * as React from "react" import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area" const ScrollArea = React.forwardRef< React.ElementRef<typeof ScrollAreaPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> > ( ({
  className, children, ...props 
}, ref) => (<ScrollAreaPrimitive.Root </ScrollAreaPrimitive.Viewport> <ScrollBar /> <ScrollAreaPrimitive.Corner /> </ScrollAreaPrimitive.Root>) ) ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName const ScrollBar = React.forwardRef< React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;
React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) 
}{
  ...props 
}> <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" /> </ScrollAreaPrimitive.ScrollAreaScrollbar>) ) ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName export {
  ScrollArea, ScrollBar 
}
=======
=======
    </ScrollAreaPrimitive.Viewport>;
    <ScrollBar />;
    <ScrollAreaPrimitive.Corner />;
  </ScrollAreaPrimitive.Root>));
ScrollArea.display_name = ScrollAreaPrimitive.Root.display_name;
const ScrollBar = React.forward_ref<;
  React.ElementRef < typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef < typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;
>(({ class_name, orientation = &quot;vertical & quot;, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar;
    ref={ref}
    orientation={orientation}
    className={cn (
      &quot;flex touch - none select - none transition - colors & quot;,
      orientation === &quot;vertical & quot; &&;
        &quot;h - full w - 2.5 border - l border - l-transparent p-[1px]&quot;,
      orientation === &quot;horizontal & quot; &&;
        &quot;h - 2.5 flex - col border - t border - t-transparent p-[1px]&quot;,
      class_name)}
    {...props}
  >;
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex - 1 rounded - full bg - border & quot; />;
  </ScrollAreaPrimitive.ScrollAreaScrollbar>));
ScrollBar.display_name = ScrollAreaPrimitive.ScrollAreaScrollbar.display_name;

export { ScrollArea, ScrollBar }


export { ScrollArea, ScrollBar }
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
export { ScrollArea, ScrollBar };
=======

export { ScrollArea, ScrollBar }
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
