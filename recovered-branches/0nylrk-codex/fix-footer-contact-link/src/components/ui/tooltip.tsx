<<<<<<< HEAD
import React from 'react';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
=======
<<<<<<< HEAD
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import {cn} from '@/lib/utils';
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
<<<<<<< HEAD
=======
=======
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
=======
=======
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
></typeof>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
      className
    )}
    {...props}
  />;
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
<<<<<<< HEAD
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
=======
<<<<<<< HEAD
<<<<<<< HEAD
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
=======

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
;

=======

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
