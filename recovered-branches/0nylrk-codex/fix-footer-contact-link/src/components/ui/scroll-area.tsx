<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import * as React from "react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  <ScrollAreaPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}

=======
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (;
  <ScrollAreaPrimitive.Root;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
    ref={ref}
    className={cn (&quot;relative overflow - hidden & quot;, class_name)}
    {...props}


  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">


      {children}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      &quot;flex touch-none select-none transition-colors&quot;
      orientation === &quot;vertical&quot; &&
        &quot;h-full w-2.5 border-l border-l-transparent p-[1px]&quot;
      orientation === &quot;horizontal&quot; &&
        &quot;h-2.5 flex-col border-t border-t-transparent p-[1px]&quot;
<<<<<<< HEAD
"
      "flex touch-none select-none transition-colors","
      orientation === "vertical" &&"
        "h-full w-2.5 border-l border-l-transparent p-[1px]","
      orientation === "horizontal" &&"
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  <ScrollAreaPrimitive.Root      orientation === "vertical" &&
=======
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  <ScrollAreaPrimitive.Root      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



      className;
    )}
    {...props}
  >

"
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />

  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export { ScrollArea, ScrollBar }


export { ScrollArea, ScrollBar };
;
export { ScrollArea, ScrollBar };

export { ScrollArea, ScrollBar };
;
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { ScrollArea, ScrollBar }


export { ScrollArea, ScrollBar }
;
export { ScrollArea, ScrollBar };

export { ScrollArea, ScrollBar }
;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>;
    <ScrollAreaPrimitive.Viewport className=&quot;h - full w - full rounded-[inherit]&quot;>;
      {children}
export { ScrollArea, ScrollBar }
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
