import * as React from &quot;react&quot;
import * as ScrollAreaPrimitive from &quot;@radix-ui/react-scroll-area&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(_({_className, _children, _...props}, _ref) => (
  <ScrollAreaPrimitive.Root
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;relative overflow-hidden&quot;, className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className=&quot;h-full w-full rounded-[inherit]&quot;>
      {children}
=======
    ref={_ref}
    className={_cn("relative overflow-hidden", _className)}
    {_...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const _ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
<<<<<<< HEAD
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
=======
>(_({_className, _orientation = "vertical", _...props}, _ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={_ref}
    orientation={_orientation}
    className={_cn(
      "flex touch-none select-none transition-colors", _orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", _orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className=&quot;relative flex-1 rounded-full bg-border&quot; />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export {_ScrollArea, _ScrollBar}
