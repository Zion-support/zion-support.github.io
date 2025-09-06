

<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
<<<<<<< HEAD
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
=======
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(

<<<<<<< HEAD
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


      &quot;z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from &quot;react & quot;
import * as HoverCardPrimitive from &quot;@radix - ui / react - hover - card & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { HoverCard, HoverCardTrigger, HoverCardContent }
;

<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent }
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent }
<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent }
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
;
import { cn } from "@/lib/utils";
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
  />));
HoverCardContent.display_name = HoverCardPrimitive.Content.display_name;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { HoverCard, HoverCardTrigger, HoverCardContent }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
