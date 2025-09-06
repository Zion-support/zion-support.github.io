<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx

=======


=======
import * as React from &quot;react&quot;
import * as ContextMenuPrimitive from &quot;@radix-ui/react-context-menu&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
import * as React from &quot;react & quot;
import * as ContextMenuPrimitive from &quot;@radix - ui / react - context - menu & quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react & quot;
;
import { cn } from &quot;@/lib / utils & quot;
;
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
=======
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
;
import { cn } from "@/lib/utils";
;
const ContextMenu = ContextMenuPrimitive.Root;
;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
;
const ContextMenuGroup = ContextMenuPrimitive.Group;
;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
;
const ContextMenuSub = ContextMenuPrimitive.Sub;
;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
;
const ContextMenuSubTrigger = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
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
  }
>(({ className, inset, children, ...props }, ref) => (;
  <ContextMenuPrimitive.SubTrigger;
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
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
=======

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      className
    )}
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof ContextMenuPrimitive.Content>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
<<<<<<< HEAD

<<<<<<< HEAD
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
=======
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
className={cn (
      &quot;flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[state = open]:bg - accent data-[state = open]:text - accent - foreground & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  >;
    {children}
<ChevronRight className=&quot;ml - auto h - 4 w - 4&quot; />;
  </ContextMenuPrimitive.SubTrigger>));
ContextMenuSubTrigger.display_name = ContextMenuPrimitive.SubTrigger.display_name;
const ContextMenuSubContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubContent>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn (
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
      class_name)}
    {...props}
  />));
ContextMenuSubContent.display_name = ContextMenuPrimitive.SubContent.display_name;
const ContextMenuContent = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Content>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
className={cn (
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md animate - in fade - in - 80 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>));
ContextMenuContent.display_name = ContextMenuPrimitive.Content.display_name;
const ContextMenuItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx

=======

  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
  </ContextMenuPrimitive.SubTrigger>;
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
;
const ContextMenuSubContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(;
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
      className;
    )}
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
;
const ContextMenuContent = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
      className={cn(;
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",;
        className;
      )}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
;
const ContextMenuItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
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
  React.ElementRef<typeof ContextMenuPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
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
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm px - 2 py - 1.5 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
ContextMenuItem.display_name = ContextMenuPrimitive.Item.display_name;
const ContextMenuCheckboxItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.CheckboxItem>;
>(({ class_name, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <ContextMenuPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
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
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
<<<<<<< HEAD
=======


  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
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
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
  </ContextMenuPrimitive.CheckboxItem>));
ContextMenuCheckboxItem.display_name =;
  ContextMenuPrimitive.CheckboxItem.display_name;
const ContextMenuRadioItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.RadioItem>;
>(({ class_name, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn (
      &quot;relative flex cursor - default select - none items - center rounded - sm py - 1.5 pl - 8 pr - 2 text - sm outline - none focus:bg - accent focus:text - accent - foreground data-[disabled]:pointer - events - none data-[disabled]:opacity - 50 & quot;,
      class_name)}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <ContextMenuPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx

=======

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
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
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
;
const ContextMenuCheckboxItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    checked={checked}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <ContextMenuPrimitive.ItemIndicator>;
        <Check className="h-4 w-4" />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
;
const ContextMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
    className={cn(;
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",;
      className;
    )}
    {...props}
  >;
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">;
      <ContextMenuPrimitive.ItemIndicator>;
        <Circle className="h-2 w-2 fill-current" />;
      </ContextMenuPrimitive.ItemIndicator>;
    </span>;
    {children}
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
;
const ContextMenuLabel = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
    inset?:boolean;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
  }
>(({ class_name, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label;
    ref={ref}

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
=======

      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;,
      inset && &quot;pl-8&quot;,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
    inset?: boolean;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD
className={cn(
<<<<<<< HEAD
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
=======
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;,
      inset && &quot;pl-8&quot;,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
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
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
<<<<<<< HEAD

<<<<<<< HEAD
=======

  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
className={cn (
      &quot;px - 2 py - 1.5 text - sm font - semibold text - foreground & quot;,
      inset && &quot;pl - 8&quot;,
      class_name)}
    {...props}
  />));
ContextMenuLabel.display_name = ContextMenuPrimitive.Label.display_name;
const ContextMenuSeparator = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Separator>;
>(({ class_name, ...props }, ref) => (
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - border & quot;, class_name)}
    {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
const ContextMenuShortcut = ({
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
/>));
ContextMenuSeparator.display_name = ContextMenuPrimitive.Separator.display_name;
const ContextMenuShortcut = ({
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
      "px-2 py-1.5 text-sm font-semibold text-foreground",;
      inset && "pl-8",;
      className;
    )}
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
;
const ContextMenuSeparator = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />;
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
;
const ContextMenuShortcut = ({;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
ContextMenuShortcut.display_name = &quot;ContextMenuShortcut & quot;
;
=======

ContextMenuShortcut.displayName = "ContextMenuShortcut"


=======
<<<<<<< HEAD
ContextMenuShortcut.displayName = &quot;ContextMenuShortcut&quot;
export {
  ContextMenu
  ContextMenuTrigger
  ContextMenuContent
  ContextMenuItem
  ContextMenuCheckboxItem
  ContextMenuRadioItem
  ContextMenuLabel
  ContextMenuSeparator
  ContextMenuShortcut
  ContextMenuGroup
  ContextMenuPortal
  ContextMenuSub
  ContextMenuSubContent
  ContextMenuSubTrigger
  ContextMenuRadioGroup}
=======
ContextMenuShortcut.displayName = "ContextMenuShortcut"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx


;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  ContextMenuRadioGroup}
=======
ContextMenuShortcut.displayName = "ContextMenuShortcut";
;
export {;
  ContextMenu,;
  ContextMenuTrigger,;
  ContextMenuContent,;
  ContextMenuItem,;
  ContextMenuCheckboxItem,;
  ContextMenuRadioItem,;
  ContextMenuLabel,;
  ContextMenuSeparator,;
  ContextMenuShortcut,;
  ContextMenuGroup,;
  ContextMenuPortal,;
  ContextMenuSub,;
  ContextMenuSubContent,;
  ContextMenuSubTrigger,;
  ContextMenuRadioGroup} const ContextMenu = ContextMenuPrimitive.Root const ContextMenuTrigger = ContextMenuPrimitive.Trigger const ContextMenuGroup = ContextMenuPrimitive.Group const ContextMenuPortal = ContextMenuPrimitive.Portal const ContextMenuSub = ContextMenuPrimitive.Sub const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup const ContextMenuSubTrigger = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean 
}> ( ({
  className, inset, children, ...props 
}, ref) => (<ContextMenuPrimitive.SubTrigger) 
}{
  ...props 
}> </ContextMenuPrimitive.SubTrigger>) ) ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName const ContextMenuSubContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.SubContent>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> > ( ({
  className, ...props 
}, ref) => (<ContextMenuPrimitive.SubContent) 
}{
  ...props 
}/>) ) ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName const ContextMenuContent = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Content>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> > ( ({
  className, ...props 
}, ref) => (<ContextMenuPrimitive.Portal> <ContextMenuPrimitive.Content) 
}{
  ...props 
}/> </ContextMenuPrimitive.Portal>) ) ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName const ContextMenuItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Item>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<ContextMenuPrimitive.Item) 
}{
  ...props 
}/>) ) ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName const ContextMenuCheckboxItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> > ( ({
  className, children, checked, ...props 
}, ref) => (<ContextMenuPrimitive.CheckboxItem) 
}checked= {
  checked 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Check className="h-4 w-4" /> </ContextMenuPrimitive.ItemIndicator> </span> {
  children 
}</ContextMenuPrimitive.CheckboxItem>) ) ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName const ContextMenuRadioItem = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> > ( ({
  className, children, ...props 
}, ref) => (<ContextMenuPrimitive.RadioItem) 
}{
  ...props 
}> <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center" > <ContextMenuPrimitive.ItemIndicator> <Circle className="h-2 w-2 fill-current" /> </ContextMenuPrimitive.ItemIndicator> </span> {
  children 
}</ContextMenuPrimitive.RadioItem>) ) ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName const ContextMenuLabel = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Label>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean 
}> ( ({
  className, inset, ...props 
}, ref) => (<ContextMenuPrimitive.Label) 
}{
  ...props 
}/>) ) ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName const ContextMenuSeparator = React.forwardRef< React.ElementRef<typeof ContextMenuPrimitive.Separator>;
React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> > ( ({
  className, ...props 
}, ref) => (<ContextMenuPrimitive.Separator />) ) ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName const ContextMenuShortcut = ({
  className, ...props 
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (<span className= {
  cn () 
}{
  ...props 
}/>) 
}ContextMenuShortcut.displayName = "ContextMenuShortcut" export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/context-menu.tsx
=======
<<<<<<< HEAD
  ContextMenuRadioGroup};
=======
  ContextMenuRadioGroup}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
