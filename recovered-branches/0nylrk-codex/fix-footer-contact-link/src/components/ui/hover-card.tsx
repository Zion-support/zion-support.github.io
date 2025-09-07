

<<<<<<< HEAD
import * as React from "react"
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
<<<<<<< HEAD
    className={cn(


      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


      className
=======
    className={cn(      className
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent }
;
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent }
;

import * as React from &quot;react & quot;
import * as HoverCardPrimitive from &quot;@radix - ui / react - hover - card & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { HoverCard, HoverCardTrigger, HoverCardContent }
;

<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent }

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent }
=======
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
;
import { cn } from "@/lib/utils";
;
const HoverCard = HoverCardPrimitive.Root;
;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
;
const HoverCardContent = React.forwardRef<;
  React.ElementRef<typeof HoverCardPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>;
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (;
  <HoverCardPrimitive.Content;
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(;
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
      className;
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
;
export { HoverCard, HoverCardTrigger, HoverCardContent }import * as React from "react" import * as HoverCardPrimitive from "@radix-ui/react-hover-card" const HoverCard = HoverCardPrimitive.Root const HoverCardTrigger = HoverCardPrimitive.Trigger const HoverCardContent = React.forwardRef< React.ElementRef<typeof HoverCardPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>) 
}{
  ...props 
}/>) ) HoverCardContent.displayName = HoverCardPrimitive.Content.displayName export {
  HoverCard, HoverCardTrigger, HoverCardContent 
}
;
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
