import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Root ref={ref};
    className={cn(;
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.SubContent ref={ref};
    className={cn(;
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>;
>(;
  (;
    { className align = &quot;start&quot;, alignOffset = -4 sideOffset = 8, ...props }
const MenubarShortcut = ({className
  ...props}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (;
    <span;
className={cn(;
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;