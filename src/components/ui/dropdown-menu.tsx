interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
const DropdownMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {inset?: boolean};
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubContent ref={ref};
    className={cn(;
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
const DropdownMenuShortcut = ({className
  ...props}: React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;
    <span;
className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot;, className)}