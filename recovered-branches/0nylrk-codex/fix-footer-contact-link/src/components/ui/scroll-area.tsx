import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"


const _ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(_({_className, _children, _...props}, _ref) => (
  <ScrollAreaPrimitive.Root
    ref={_ref}
    className={_cn("relative overflow-hidden", _className)}
    {_...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {_children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const _ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(_({_className, _orientation = "vertical", _...props}, _ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={_ref}
    orientation={_orientation}
    className={_cn(
      "flex touch-none select-none transition-colors", _orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", _orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", _className
    )}
    {_...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export {_ScrollArea, _ScrollBar}
