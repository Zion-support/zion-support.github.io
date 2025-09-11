import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      &quot;z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

import * as React from &quot;react & quot;
import * as HoverCardPrimitive from &quot;@radix - ui / react - hover - card & quot;
;
import { cn } from &quot;@/lib / utils & quot;
=======

export { HoverCard, HoverCardTrigger, HoverCardContent }
;

=======
export { HoverCard, HoverCardTrigger, HoverCardContent };
=======
export { HoverCard, HoverCardTrigger, HoverCardContent }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = React.forward_ref<;
  React.ElementRef < typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof HoverCardPrimitive.Content>;
>(({ class_name, align = &quot;center & quot;, side_offset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content;
    ref={ref}
    align={align}
    side_offset={side_offset}
    className={cn (
      &quot;z - 50 w - 64 rounded - md border bg - popover p - 4 text - popover - foreground shadow - md outline - none data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
HoverCardContent.display_name = HoverCardPrimitive.Content.display_name;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { HoverCard, HoverCardTrigger, HoverCardContent }
