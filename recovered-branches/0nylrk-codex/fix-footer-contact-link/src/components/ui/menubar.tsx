<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

=======


=======
import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
=======
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof MenubarPrimitive.Trigger>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Trigger>;
=======
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
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
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
import * as React from &quot;react & quot;
import * as MenubarPrimitive from &quot;@radix - ui / react - menubar & quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
const Menubar = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Root>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn (
      &quot;flex h - 10 items - center space - x-1 rounded - md border bg - background p - 1&quot;,
      class_name)}
    {...props}
  />));
Menubar.display_name = MenubarPrimitive.Root.display_name;
const MenubarTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Trigger>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.Trigger;
    ref={ref}
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 3 py - 1.5 text - sm font - medium outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      class_name)}
    {...props}
  />));
MenubarTrigger.display_name = MenubarPrimitive.Trigger.display_name;
const MenubarSubTrigger = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

=======

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const MenubarMenu = MenubarPrimitive.Menu;
;
const MenubarGroup = MenubarPrimitive.Group;
;
const MenubarPortal = MenubarPrimitive.Portal;
;
const MenubarSub = MenubarPrimitive.Sub;
;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
;
const Menubar = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn(;
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",;
      className;
    )}
    {...props}
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
;
const MenubarTrigger = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}
    className={cn(;
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",;
      className;
    )}
    {...props}
  />;
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
;
const MenubarSubTrigger = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
=======

      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
=======
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
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
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
<<<<<<< HEAD

<<<<<<< HEAD
=======

    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
=======
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
<<<<<<< HEAD

<<<<<<< HEAD
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
    </MenubarPrimitive.Portal>;
  );
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
  </MenubarPrimitive.SubTrigger>));
MenubarSubTrigger.display_name = MenubarPrimitive.SubTrigger.display_name;
const MenubarSubContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
MenubarSubContent.display_name = MenubarPrimitive.SubContent.display_name;
const MenubarContent = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Content>;
>(
  (
    { class_name, align = &quot;start & quot;, align_offset = -4, side_offset = 8, ...props },
    ref) => (
=======
    className={cn(;
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  >;
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />;
  </MenubarPrimitive.SubTrigger>;
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
;
const MenubarSubContent = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.SubContent;
    ref={ref}
    className={cn(;
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
      className;
    )}
    {...props}
  />;
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
;
const MenubarContent = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>;
>(;
  (;
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },;
    ref;
  ) => (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <MenubarPrimitive.Portal>;
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
<<<<<<< HEAD
        align_offset={align_offset}
        side_offset={side_offset}
className={cn (
          &quot;z - 50 min - w-[12rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
          class_name)}
        {...props}
      />;
    </MenubarPrimitive.Portal>));
MenubarContent.display_name = MenubarPrimitive.Content.display_name;
const MenubarItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Item> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

=======

  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(;
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
          className;
        )}
        {...props}
      />;
    </MenubarPrimitive.Portal>;
  );
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
;
const MenubarItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <MenubarPrimitive.Item;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
=======

      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
=======
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      className
    )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
MenubarItem.display_name = MenubarPrimitive.Item.display_name;
const MenubarCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <MenubarPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
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
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
<<<<<<< HEAD
=======


  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
<<<<<<< HEAD

=======
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      className
    )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
  </MenubarPrimitive.CheckboxItem>));
MenubarCheckboxItem.display_name = MenubarPrimitive.CheckboxItem.display_name;
const MenubarRadioItem = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <MenubarPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
  </MenubarPrimitive.RadioItem>));
MenubarRadioItem.display_name = MenubarPrimitive.RadioItem.display_name;
const MenubarLabel = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Label> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

=======

  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
;
const MenubarCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    checked={checked}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <MenubarPrimitive.ItemIndicator>;
        <Check className="h-4 w-4" />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children}
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
;
const MenubarRadioItem = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <MenubarPrimitive.ItemIndicator>;
        <Circle className="h-2 w-2 fill-current" />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children}
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
;
const MenubarLabel = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <MenubarPrimitive.Label;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
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
  React.ElementRef<typeof MenubarPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
=======
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
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
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof MenubarPrimitive.Separator>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
MenubarLabel.display_name = MenubarPrimitive.Label.display_name;
const MenubarSeparator = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Separator>;
=======
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/>
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
const MenubarShortcut = ({
  className
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
<<<<<<< HEAD

=======
<<<<<<< HEAD
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
=======
        "ml-auto text-xs tracking-widest text-muted-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        className
      )}
      {...props}
    />;
  );
}
<<<<<<< HEAD

;

=======


        "ml-auto text-xs tracking-widest text-muted-foreground",


        className
      )}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
/>));
MenubarSeparator.display_name = MenubarPrimitive.Separator.display_name;
const MenubarShortcut = ({
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,
        class_name)}
=======
    className={cn(;
      "px-2 py-1.5 text-sm font-semibold",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
;
const MenubarSeparator = React.forwardRef<;
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />;
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
;
const MenubarShortcut = ({;
  className,;
  ...props;
} React.HTMLAttributes<HTMLSpanElement>) => {;
  return (;
    <span;
      className={cn(;
        "ml-auto text-xs tracking-widest text-muted-foreground",;
        className;
      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {...props}
    />);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
MenubarShortcut.displayname = &quot;MenubarShortcut & quot;
;
=======

MenubarShortcut.displayname = "MenubarShortcut"


=======
<<<<<<< HEAD
MenubarShortcut.displayname = &quot;MenubarShortcut&quot;
export {
  Menubar
  MenubarMenu
  MenubarTrigger
  MenubarContent
  MenubarItem
  MenubarSeparator
  MenubarLabel
  MenubarCheckboxItem
  MenubarRadioGroup
  MenubarRadioItem
  MenubarPortal
  MenubarSubContent
  MenubarSubTrigger
  MenubarGroup
  MenubarSub
  MenubarShortcut}
=======
MenubarShortcut.displayname = "MenubarShortcut"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  MenubarShortcut}
=======
MenubarShortcut.displayname = "MenubarShortcut";
;
export {;
  Menubar,;
  MenubarMenu,;
  MenubarTrigger,;
  MenubarContent,;
  MenubarItem,;
  MenubarSeparator,;
  MenubarLabel,;
  MenubarCheckboxItem,;
  MenubarRadioGroup,;
  MenubarRadioItem,;
  MenubarPortal,;
  MenubarSubContent,;
  MenubarSubTrigger,;
  MenubarGroup,;
  MenubarSub,;
  MenubarShortcut} const MenubarMenu = MenubarPrimitive.Menu const MenubarGroup = MenubarPrimitive.Group const MenubarPortal = MenubarPrimitive.Portal const MenubarSub = MenubarPrimitive.Sub const MenubarRadioGroup = MenubarPrimitive.RadioGroup const Menubar = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Root>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> > ( ({
  className, ...props 
}, ref) => (<MenubarPrimitive.Root) 
}{
  ...props 
}/>) ) Menubar.displayName = MenubarPrimitive.Root.displayName const MenubarTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Trigger>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> > ( ({
  className, ...props 
}, ref) => (<MenubarPrimitive.Trigger) 
}{
  ...props 
}/>) ) MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName const MenubarSubTrigger = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean 
}> ( ({
  className, inset, children, ...props 
}, ref) => (<MenubarPrimitive.SubTrigger) 
}{
  ...props 
}> </MenubarPrimitive.SubTrigger>) ) MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName const MenubarSubContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.SubContent>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> > ( ({
  className, ...props 
}, ref) => (<MenubarPrimitive.SubContent) 
}{
  ...props 
}/>) ) MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName const MenubarContent = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>) 
}{
  ...props 
}/> </MenubarPrimitive.Portal>) ) MenubarContent.displayName = MenubarPrimitive.Content.displayName const MenubarItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<MenubarPrimitive.Item) 
}{
  ...props 
}/>) ) MenubarItem.displayName = MenubarPrimitive.Item.displayName const MenubarCheckboxItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> > ( ({
  className, children, checked, ...props 
}, ref) => (<MenubarPrimitive.CheckboxItem) 
}checked= {
  checked 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </MenubarPrimitive.ItemIndicator> </span> {
  children 
}</MenubarPrimitive.CheckboxItem>) ) MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName const MenubarRadioItem = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> > ( ({
  className, children, ...props 
}, ref) => (<MenubarPrimitive.RadioItem) 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <MenubarPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </MenubarPrimitive.ItemIndicator> </span> {
  children 
}</MenubarPrimitive.RadioItem>) ) MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName const MenubarLabel = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<MenubarPrimitive.Label) 
}{
  ...props 
}/>) ) MenubarLabel.displayName = MenubarPrimitive.Label.displayName const MenubarSeparator = React.forwardRef< React.ElementRef<typeof MenubarPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<MenubarPrimitive.Separator />) ) MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName const MenubarShortcut = ({
  className, ...props 
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (<span className= {
  cn () 
}{
  ...props 
}/>) 
}MenubarShortcut.displayname = "MenubarShortcut" export {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/menubar.tsx
=======
<<<<<<< HEAD
  MenubarShortcut};
=======
  MenubarShortcut}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
