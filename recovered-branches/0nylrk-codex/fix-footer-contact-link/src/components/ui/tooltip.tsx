<<<<<<< HEAD

<<<<<<< HEAD

=======
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {cn} from '@/lib/utils';
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
></typeof>(({ className, sideOffset = 4, ...props }, ref) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD

const TooltipProvider = TooltipPrimitive && TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive && TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive && TooltipPrimitive.Trigger;

const TooltipContent = React && React.forwardRef<;
  React && React.ElementRef<typeof TooltipPrimitive && TooltipPrimitive.Content>,;
  React && React.ComponentPropsWithoutRef<typeof TooltipPrimitive && TooltipPrimitive.Content>;
></typeof>(({ className, sideOffset = 4, ...props }, ref) => (;
  <TooltipPrimitive&& TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1 && 1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

=======

      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
=======

      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

      className
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      className
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    )}
    {...props}
  />;
));
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;


TooltipContent && TooltipContent.displayName = TooltipPrimitive && TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;

<<<<<<< HEAD


<<<<<<< HEAD
=======
TooltipContent && TooltipContent.displayName = TooltipPrimitive && TooltipPrimitive.Content.displayName;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
import * as TooltipPrimitive from '@radix - ui / react - tooltip';
;
import {cn} from '@/lib / utils';
;
const TooltipProvider = TooltipPrimitive.Provider;
;
const Tooltip = TooltipPrimitive.Root;
;
const TooltipTrigger = TooltipPrimitive.Trigger;
;
const TooltipContent = React.forward_ref<;
  React.ElementRef < typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof TooltipPrimitive.Content>;
></typeof>(({ class_name, side_offset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content;
    ref={ref}
    side_offset={side_offset}
    className={cn (
      'z - 50 overflow - hidden rounded - md border bg - popover px - 3 py - 1.5 text - sm text - popover - foreground shadow - md animate - in fade - in - 0 zoom - in - 95 data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = closed]:zoom - out - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2',
      class_name)}
    {...props}
  />));
TooltipContent.display_name = TooltipPrimitive.Content.display_name;
;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }import * as React from "react" import * as TooltipPrimitive from "@radix-ui/react-tooltip" const TooltipProvider = TooltipPrimitive.Provider const Tooltip = TooltipPrimitive.Root const TooltipTrigger = TooltipPrimitive.Trigger const TooltipContent = React.forwardRef< React.ElementRef<typeof TooltipPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> > ( ({
  className, sideOffset = 4, ...props 
}, ref) => (<TooltipPrimitive.Content) 
}{
  ...props 
}/>) ) TooltipContent.displayName = TooltipPrimitive.Content.displayName export {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider 
}
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
