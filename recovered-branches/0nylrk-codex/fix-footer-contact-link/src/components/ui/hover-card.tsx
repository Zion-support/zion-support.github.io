<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/hover-card.tsx

=======


=======
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
<<<<<<< HEAD

<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent };

export { HoverCard, HoverCardTrigger, HoverCardContent }

;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/hover-card.tsx
import * as React from &quot;react & quot;
import * as HoverCardPrimitive from &quot;@radix - ui / react - hover - card & quot;
;
import { cn } from &quot;@/lib / utils & quot;
=======

export { HoverCard, HoverCardTrigger, HoverCardContent }
;

=======
<<<<<<< HEAD
<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent }
=======
export { HoverCard, HoverCardTrigger, HoverCardContent }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export { HoverCard, HoverCardTrigger, HoverCardContent };
=======
export { HoverCard, HoverCardTrigger, HoverCardContent }
<<<<<<< HEAD

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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/hover-card.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { HoverCard, HoverCardTrigger, HoverCardContent }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/hover-card.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
