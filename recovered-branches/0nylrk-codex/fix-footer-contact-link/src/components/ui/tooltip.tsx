import * as React from &quot;react&quot;
import * as TooltipPrimitive from &quot;@radix-ui/react-tooltip&quot;

<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _TooltipProvider = TooltipPrimitive.Provider

const _Tooltip = TooltipPrimitive.Root

const _TooltipTrigger = TooltipPrimitive.Trigger

const _TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(_({_className, _sideOffset = 4, _...props}, _ref) => (
  <TooltipPrimitive.Content
<<<<<<< HEAD
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      &quot;z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className
=======
    ref={_ref}
    sideOffset={_sideOffset}
    className={_cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {_Tooltip, _TooltipTrigger, _TooltipContent, _TooltipProvider}
