<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

=======


=======
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
import * as React from &quot;react & quot;
import * as DropdownMenuPrimitive from &quot;@radix - ui / react - dropdown - menu & quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
=======
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const DropdownMenu = DropdownMenuPrimitive.Root;
;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
;
const DropdownMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
=======

      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
>(({ className, inset, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD

<<<<<<< HEAD
=======

    <ChevronRight className="ml-auto h-4 w-4" />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
    <ChevronRight className="ml-auto h-4 w-4" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.Content>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
<<<<<<< HEAD

<<<<<<< HEAD
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent data-[state = open]:bg - accent & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
  </DropdownMenuPrimitive.SubTrigger>));
DropdownMenuSubTrigger.display_name =;
  DropdownMenuPrimitive.SubTrigger.display_name;
const DropdownMenuSubContent = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuSubContent.display_name =;
  DropdownMenuPrimitive.SubContent.display_name;
const DropdownMenuContent = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Content>;
>(({ class_name, side_offset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      side_offset={side_offset}
className={cn (
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>));
DropdownMenuContent.display_name = DropdownMenuPrimitive.Content.display_name;
const DropdownMenuItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

=======

  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
    className={cn(;
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  >;
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />;
  </DropdownMenuPrimitive.SubTrigger>;
));
DropdownMenuSubTrigger.displayName =;
  DropdownMenuPrimitive.SubTrigger.displayName;
;
const DropdownMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubContent;
    ref={ref}
    className={cn(;
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
      className;
    )}
    {...props}
  />;
));
DropdownMenuSubContent.displayName =;
  DropdownMenuPrimitive.SubContent.displayName;
;
const DropdownMenuContent = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
      className={cn(;
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
        className;
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
;
const DropdownMenuItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
=======

      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {inset?: boolean;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuItem.display_name = DropdownMenuPrimitive.Item.display_name;
const DropdownMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;
<<<<<<< HEAD
=======


  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
<<<<<<< HEAD

=======
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
    )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
  </DropdownMenuPrimitive.CheckboxItem>));
DropdownMenuCheckboxItem.display_name =;
  DropdownMenuPrimitive.CheckboxItem.display_name;
const DropdownMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none transition - colors focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
  </DropdownMenuPrimitive.RadioItem>));
DropdownMenuRadioItem.display_name = DropdownMenuPrimitive.RadioItem.display_name;
const DropdownMenuLabel = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

=======

  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
;
const DropdownMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    checked={checked}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Check className="h-4 w-4" />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
;
const DropdownMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <DropdownMenuPrimitive.ItemIndicator>;
        <Circle className="h-2 w-2 fill-current" />;
      </DropdownMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
;
const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
=======

      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {inset?: boolean;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
DropdownMenuLabel.display_name = DropdownMenuPrimitive.Label.display_name;
const DropdownMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
/>));
DropdownMenuSeparator.display_name = DropdownMenuPrimitive.Separator.display_name;
const DropdownMenuShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
  return (
    <span;
      className={cn (&quot;ml - auto text - xs tracking - widest opacity - 60 & quot;, class_name)}
=======
    className={cn(;
      "px-2 py-1.5 text-sm font-semibold",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
;
const DropdownMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
=======
<<<<<<< HEAD
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
<<<<<<< HEAD
  />;
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
;
const DropdownMenuShortcut = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;
    <span;
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {...props}
    />);
}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx

;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
DropdownMenuShortcut.display_name = &quot;DropdownMenuShortcut & quot;
;
=======

DropdownMenuShortcut.displayName = "DropdownMenuShortcut"


=======
/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
const DropdownMenuShortcut = ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />;
  );
}
<<<<<<< HEAD
DropdownMenuShortcut.displayName = &quot;DropdownMenuShortcut&quot;
export {
  DropdownMenu
  DropdownMenuTrigger
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuCheckboxItem
  DropdownMenuRadioItem
  DropdownMenuLabel
  DropdownMenuSeparator
  DropdownMenuShortcut
  DropdownMenuGroup
  DropdownMenuPortal
  DropdownMenuSub
  DropdownMenuSubContent
  DropdownMenuSubTrigger
  DropdownMenuRadioGroup}
=======
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  DropdownMenuRadioGroup}
=======
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
export {;
  DropdownMenu,;
  DropdownMenuTrigger,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuCheckboxItem,;
  DropdownMenuRadioItem,;
  DropdownMenuLabel,;
  DropdownMenuSeparator,;
  DropdownMenuShortcut,;
  DropdownMenuGroup,;
  DropdownMenuPortal,;
  DropdownMenuSub,;
  DropdownMenuSubContent,;
  DropdownMenuSubTrigger,;
  DropdownMenuRadioGroup} const DropdownMenu = DropdownMenuPrimitive.Root const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger const DropdownMenuGroup = DropdownMenuPrimitive.Group const DropdownMenuPortal = DropdownMenuPrimitive.Portal const DropdownMenuSub = DropdownMenuPrimitive.Sub const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup const DropdownMenuSubTrigger = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean 
}> ( ({
  className, inset, children, ...props 
}, ref) => (<DropdownMenuPrimitive.SubTrigger) 
}{
  ...props 
}> </DropdownMenuPrimitive.SubTrigger>) ) DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName const DropdownMenuSubContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.SubContent>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> > ( ({
  className, ...props 
}, ref) => (<DropdownMenuPrimitive.SubContent) 
}{
  ...props 
}/>) ) DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName const DropdownMenuContent = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> > ( ({
  className, sideOffset = 4, ...props 
}, ref) => (<DropdownMenuPrimitive.Portal> <DropdownMenuPrimitive.Content) 
}{
  ...props 
}/> </DropdownMenuPrimitive.Portal>) ) DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName const DropdownMenuItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<DropdownMenuPrimitive.Item) 
}{
  ...props 
}/>) ) DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName const DropdownMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> > ( ({
  className, children, checked, ...props 
}, ref) => (<DropdownMenuPrimitive.CheckboxItem) 
}checked= {
  checked 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </DropdownMenuPrimitive.ItemIndicator> </span> {
  children 
}</DropdownMenuPrimitive.CheckboxItem>) ) DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName const DropdownMenuRadioItem = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> > ( ({
  className, children, ...props 
}, ref) => (<DropdownMenuPrimitive.RadioItem) 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <DropdownMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </DropdownMenuPrimitive.ItemIndicator> </span> {
  children 
}</DropdownMenuPrimitive.RadioItem>) ) DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName const DropdownMenuLabel = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<DropdownMenuPrimitive.Label) 
}{
  ...props 
}/>) ) DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName const DropdownMenuSeparator = React.forwardRef< React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<DropdownMenuPrimitive.Separator />) ) DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName const DropdownMenuShortcut = ({
  className, ...props 
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (<span />) 
}DropdownMenuShortcut.displayName = "DropdownMenuShortcut" export {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/dropdown-menu.tsx
=======
<<<<<<< HEAD
  DropdownMenuRadioGroup};
=======
  DropdownMenuRadioGroup}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
