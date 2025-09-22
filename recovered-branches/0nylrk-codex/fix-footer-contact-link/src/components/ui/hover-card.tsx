<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
import * as React from &quot;react&quot;
import * as HoverCardPrimitive from &quot;@radix-ui/react-hover-card&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import * as React from "react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import * as React from "react"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = &quot;center&quot;, sideOffset = 4, ...props }, ref) => (
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
=======

;
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>

"
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (

  <HoverCardPrimitive.Content;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    ref={ref}
    align={align}
    sideOffset={sideOffset}
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

&quot;z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(      className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    className={cn(

      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

"z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

      &quot;z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )}
    {...props}
  />;
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export { HoverCard, HoverCardTrigger, HoverCardContent }
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent };
;
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent };
;
export { HoverCard, HoverCardTrigger, HoverCardContent }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import * as React from &quot;react & quot;
import * as HoverCardPrimitive from &quot;@radix - ui / react - hover - card & quot;
;
import { cn } from &quot;@/lib / utils & quot;

export { HoverCard, HoverCardTrigger, HoverCardContent };
;

<<<<<<< HEAD
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { HoverCard, HoverCardTrigger, HoverCardContent }

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
import * as React from "react"""
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"""
import { cn } from "@/lib/utils""
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>
</typeof>
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
  <HoverCardPrimitive.Content;
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(

"
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","
      className;)
    )}
    {...props}
  />;

pr-12325
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export { HoverCard, HoverCardTrigger, HoverCardContent }

export { HoverCard, HoverCardTrigger, HoverCardContent }

";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export { HoverCard, HoverCardTrigger, HoverCardContent }
export { HoverCard, HoverCardTrigger, HoverCardContent }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
