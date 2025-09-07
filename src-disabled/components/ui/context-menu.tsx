<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'


<<<<<<< HEAD
const ContextMenu = ContextMenuPrimitive.Root
import * as React from &quot;react&quot;
import * as ContextMenuPrimitive from &quot;@radix-ui/react-context-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;

import { cn } from "@/lib/utils"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean

import * as React from &quot;react & quot;
import * as ContextMenuPrimitive from &quot;@radix - ui / react - context - menu & quot;'
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
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.SubTrigger> & {}
    inset?: boolean;

  }
>(({ className, inset, children, ...props }, ref) => (;
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",

      inset && "pl-8",

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
    )}
=======

      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    {...props}
  >;
    {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
ursor/fix-website-loading-errors-and-merge-6662
<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <ChevronRight className="ml-auto h-4 w-4" />

  </ContextMenuPrimitive.SubTrigger>
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
))

=======
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
const ContextMenuSubContent = React.forwardRef<

  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

    )}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof ContextMenuPrimitive.Content>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
ursor/fix-website-loading-errors-and-merge-6662
className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
      className={cn(

        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
      )}
=======

        className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
className={cn (,
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border bg - popover p - 1 text - popover - foreground shadow - md animate - in fade - in - 80 data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>));
ContextMenuContent.display_name = ContextMenuPrimitive.Content.display_name;
const ContextMenuItem = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Item>,

  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;

    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======
<<<<<<< HEAD
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ElementRef<typeof ContextMenuPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",

      inset && "pl-8",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx

    )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    {...props}
  />;
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;

>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className

    )}
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx

    checked={checked}
    {...props}

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
=======
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
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
=======

  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;

  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;

>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
    inset?: boolean;
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className

    )}
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
    {...props}

    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
=======
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
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
<<<<<<< HEAD
=======
  React.ElementRef<typeof ContextMenuPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
=======

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
=======
  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  React.ElementRef<typeof ContextMenuPrimitive.Label>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;

    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold text-foreground&quot;
      inset && &quot;pl-8&quot;
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",

      inset && "pl-8",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      className
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx

    )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
ursor/fix-website-loading-errors-and-merge-6662
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;

  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;

>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    className={cn("-mx-1 my-1 h-px bg-border", className)}

    {...props}

=======
    className={cn(&quot;-mx-1 my-1 h-px bg-border&quot; className)}
  React.ElementRef<typeof ContextMenuPrimitive.Separator>;
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-border&quot; className)}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
const ContextMenuShortcut = ({
  className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
<<<<<<< HEAD
=======
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        "ml-auto text-xs tracking-widest text-muted-foreground",

        className
=======
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
        &quot;ml-auto text-xs tracking-widest text-muted-foreground&quot;
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {...props}
    />;
  );
}
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        className
      )}
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
      {...props}
    />);
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx

      )}

      {...props}
    />;
  );
}

ContextMenuShortcut.displayName = "ContextMenuShortcut"

<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
=======

<<<<<<< HEAD
ContextMenuShortcut.displayName = "ContextMenuShortcut"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
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
<<<<<<< HEAD
  ContextMenuSub,
=======
<<<<<<< HEAD:src-disabled/components/ui/context-menu.tsx
  ContextMenuSub,
=======
  ContextMenuSub,
<<<<<<< HEAD
  ContextMenuSubTrigger,;
  ContextMenuRadioGroup};
  ContextMenuSubTrigger,
  ContextMenuRadioGroup}
;
  ContextMenuSubContent,
=======
  ContextMenuSubContent,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/ui/context-menu.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
