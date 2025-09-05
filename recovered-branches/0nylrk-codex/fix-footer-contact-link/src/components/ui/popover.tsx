import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"


const _Popover = PopoverPrimitive.Root

const _PopoverTrigger = PopoverPrimitive.Trigger

const _PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(_({_className, _align = "center", _sideOffset = 4, _...props}, _ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={_ref}
      align={_align}
      sideOffset={_sideOffset}
      className={_cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
      )}
      {_...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export {_Popover, _PopoverTrigger, _PopoverContent}
