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
;

export { ScrollArea, ScrollBar }

export { ScrollArea, ScrollBar }
export { ScrollArea, ScrollBar }
