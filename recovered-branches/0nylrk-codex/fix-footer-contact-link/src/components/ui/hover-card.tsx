import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"


const _HoverCard = HoverCardPrimitive.Root

const _HoverCardTrigger = HoverCardPrimitive.Trigger

const _HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(_({_className, _align = "center", _sideOffset = 4, _...props}, _ref) => (
  <HoverCardPrimitive.Content
    ref={_ref}
    align={_align}
    sideOffset={_sideOffset}
    className={_cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
    )}
    {_...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export {_HoverCard, _HoverCardTrigger, _HoverCardContent}
