:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from 'lucide-react'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

=======
import * as React from "react""
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from 'lucide-react'

;
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
const Menubar = React.forwardRef<
:src_backup/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root;
    ref={ref}
    className={cn(
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  />;
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
import * as React from &quot;react & quot;
import * as MenubarPrimitive from &quot;@radix - ui / react - menubar & quot;'
import { Check, ChevronRight, Circle } from 'lucide-react';
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
:src_backup/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {
<<<<<<< HEAD:src_backup/components/ui/menubar.tsx

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
=======
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
      inset && "pl-8",",
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  >;
    {children}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronRight className="ml-auto h-4 w-4" />
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    <ChevronRight className="ml-auto h-4 w-4" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  </MenubarPrimitive.SubTrigger>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
))
:src_backup/components/ui/menubar.tsx
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
const MenubarSubContent = React.forwardRef<
:src_backup/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent;
    ref={ref}
    className={cn(
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",",
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  />
))
:src_backup/components/ui/menubar.tsx
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },"
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },"
    { className, align = &quot;start&quot; alignOffset = -4, sideOffset = 8, ...props },
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },",

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
    ref
=======
    ref;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
        )}
        {...props}
      />;
    </MenubarPrimitive.Portal>;
  );
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
const MenubarItem = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
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
    <MenubarPrimitive.Portal>;
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
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
:src_backup/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Item> & {
<<<<<<< HEAD:src_backup/components/ui/menubar.tsx

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ElementRef<typeof MenubarPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      inset && "pl-8",",
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  />;
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}

    checked={checked}
    {...props}
:src_backup/components/ui/menubar.tsx
  >"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>"
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
:src_backup/components/ui/menubar.tsx
  >"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>"
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  </MenubarPrimitive.RadioItem>;
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
const MenubarLabel = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
  React.ElementRef<typeof MenubarPrimitive.Label>,;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
  React.ElementRef<typeof MenubarPrimitive.Label>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold","
      inset && "pl-8",",
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
    )}
    {...props}
  />;
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef<;
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn("-mx-1 my-1 h-px bg-muted", className)}

    {...props}
/>
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
        "ml-auto text-xs tracking-widest text-muted-foreground",
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

:src_backup/components/ui/menubar.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        className
=======

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
      )}

=======
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
      {...props}
    />;
  );
}
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
MenubarShortcut.displayname = "MenubarShortcut"

<<<<<<< HEAD
export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
=======
MenubarShortcut.displayname = &quot;MenubarShortcut & quot;
;
MenubarShortcut.displayname = "MenubarShortcut""
MenubarShortcut.displayname = "MenubarShortcut"

export {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
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
:src_backup/components/ui/menubar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  MenubarGroup,
  MenubarSub,
  MenubarShortcut}
;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  MenubarGroup,'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/menubar.tsx
=======
  MenubarGroup,
}}}
  MenubarSub,
  MenubarShortcut}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/menubar.tsx
