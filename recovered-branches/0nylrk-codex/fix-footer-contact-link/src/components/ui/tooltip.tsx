<<<<<<< HEAD
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
;
import { cn } from "@/lib/utils";
;
const TooltipProvider = TooltipPrimitive.Provider;
;
const Tooltip = TooltipPrimitive.Root;
;
const TooltipTrigger = TooltipPrimitive.Trigger;
;
const TooltipContent = React.forwardRef<;
  React.ElementRef<typeof TooltipPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <TooltipPrimitive.Content;
    ref={ref}
    sideOffset={sideOffset}
    className={cn(;
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
      className;
    )}
    {...props}
  />;
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
=======
import * as React from &quot;react&quot;
import * as TooltipPrimitive from &quot;@radix-ui/react-tooltip&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {_Tooltip, _TooltipTrigger, _TooltipContent, _TooltipProvider}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
