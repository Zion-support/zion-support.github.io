<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from &quot;react&quot;
import * as MenubarPrimitive from &quot;@radix-ui/react-menubar&quot;
import { Check, ChevronRight, Circle } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as MenubarPrimitive from "@radix-ui/react-menubar"
=======

import * as React from "react""
import * as MenubarPrimitive from "@radix-ui/react-menubar""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Check, ChevronRight, Circle } from "lucide-react"
"
import { cn } from "@/lib/utils"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
=======


;
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

      &quot;flex h-10 items-center space-x-1 rounded-md border bg-background p-1&quot;
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(      className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />;
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
const MenubarTrigger = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.Trigger>;
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Trigger;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
className={cn(
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",

=======

<<<<<<< HEAD
  React.ElementRef<typeof MenubarPrimitive.Trigger>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  React.ElementRef<typeof MenubarPrimitive.Trigger>,;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    className={cn(
=======
    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",

      &quot;flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />;
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import * as React from &quot;react & quot;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.SubTrigger> & {}
    inset?: boolean;

<<<<<<< HEAD
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
=======

  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
>(({ class_name, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger;
    ref={ref}
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,

<<<<<<< HEAD
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
=======

    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      inset && "pl-8",

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {;
    inset?: boolean;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
>(({ className, inset, children, ...props }, ref) => (;
  <MenubarPrimitive.SubTrigger;
    ref={ref}
className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;
      inset && &quot;pl-8&quot;
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground&quot;,
      inset && &quot;pl-8&quot;,
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======


    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
      inset && "pl-8",

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    <ChevronRight className="ml-auto h-4 w-4" />
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD

    <ChevronRight className="ml-auto h-4 w-4" />
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

<ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
    <ChevronRight className="ml-auto h-4 w-4" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className
=======
    className={cn(      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn(      className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
<<<<<<< HEAD
<<<<<<< HEAD
  (
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

    { className, align = &quot;start&quot;, alignOffset = -4, sideOffset = 8, ...props }
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ref
=======
    ref;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content;
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        className={cn("
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
className={cn(
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;
        className={cn("
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        className={cn("
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


        className={cn("
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

          &quot;z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        className={cn("
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className
=======
  (          className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  (          className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

className={cn (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    inset?: boolean;  }
=======



  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;

        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(;"
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



  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>(({ class_name, inset, ...props }, ref) => (
  <MenubarPrimitive.Item;
    ref={ref}
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,

<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======

    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      inset && "pl-8",

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  React.ElementRef<typeof MenubarPrimitive.Item>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {;
    inset?: boolean;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Item;
    ref={ref}
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
      inset && &quot;pl-8&quot;
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======


    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      inset && "pl-8",

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />;
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
const MenubarCheckboxItem = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>;
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>;
>(({ className, children, checked, ...props }, ref) => (;
  <MenubarPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

=======
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
<<<<<<< HEAD
=======
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      className
    )}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


=======

  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    className={cn(
=======



    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className;
    )}
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    checked={checked}
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <MenubarPrimitive.ItemIndicator>;
        <Check className=&quot;h - 4 w - 4&quot; />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
<<<<<<< HEAD
<<<<<<< HEAD
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
  </MenubarPrimitive.CheckboxItem>;
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef<;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;


<<<<<<< HEAD
<<<<<<< HEAD
=======
  React.ElementRef<typeof MenubarPrimitive.RadioItem>;
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>;
>(({ className, children, ...props }, ref) => (;
  <MenubarPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

=======
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      className;
    )}

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


      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
<<<<<<< HEAD
=======
    {children}      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    {children}      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    className={cn(
=======
    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

<<<<<<< HEAD
    className={cn(
=======

    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

      className;
    )}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    {...props}
  >;
    <span className=&quot;absolute left - 2 flex h - 3.5 w - 3.5 items - center justify - center & quot;>;
      <MenubarPrimitive.ItemIndicator>;
        <Circle className=&quot;h - 2 w - 2 fill - current & quot; />;
      </MenubarPrimitive.ItemIndicator>;
    </span>;
    {children}
<<<<<<< HEAD
=======

  </MenubarPrimitive.RadioItem>));
MenubarRadioItem.display_name = MenubarPrimitive.RadioItem.display_name;
const MenubarLabel = React.forward_ref<;
  React.ElementRef < typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof MenubarPrimitive.Label> & {}
    inset?: boolean;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
>(({ class_name, inset, ...props }, ref) => (
  <MenubarPrimitive.Label;
    ref={ref}
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,

<<<<<<< HEAD
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
=======

    className={cn("
      "px-2 py-1.5 text-sm font-semibold","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      inset && "pl-8",

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  React.ElementRef<typeof MenubarPrimitive.Label>;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {inset?: boolean;
  React.ElementRef<typeof MenubarPrimitive.Label>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {;
    inset?: boolean;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
  }
>(({ className, inset, ...props }, ref) => (;
  <MenubarPrimitive.Label;
    ref={ref}
className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;
      inset && &quot;pl-8&quot;
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className
=======


    className={cn("
      "px-2 py-1.5 text-sm font-semibold","
      inset && "pl-8",

      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    )}
    {...props}
  />;
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
const MenubarSeparator = React.forwardRef<;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  React.ElementRef<typeof MenubarPrimitive.Separator>;
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  React.ElementRef<typeof MenubarPrimitive.Separator>,;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;


  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn (&quot;-mx - 1 my - 1 h - px bg - muted & quot;, class_name)}
    {...props}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  React.ElementRef<typeof MenubarPrimitive.Separator>;
  React.ElementRef<typeof MenubarPrimitive.Separator>,;
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>;
>(({ className, ...props }, ref) => (;
  <MenubarPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
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

        className
      )}
      {...props}
    />;
  );
}
<<<<<<< HEAD

;
      {...props}
    />;
  );
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
        "ml-auto text-xs tracking-widest text-muted-foreground",


        className;
      )}

/>));
MenubarSeparator.display_name = MenubarPrimitive.Separator.display_name;
const MenubarShortcut = ({}
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {}
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,
        class_name)}

"
MenubarShortcut.displayname = "MenubarShortcut"


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
MenubarShortcut.displayname = "MenubarShortcut"
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      {...props}
    />);
}"
MenubarShortcut.displayname = "MenubarShortcut"


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export {
=======
MenubarShortcut.displayname = "MenubarShortcut"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
MenubarShortcut.displayname = "MenubarShortcut"

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


;
;



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  MenubarShortcut}
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  MenubarShortcut};
  MenubarShortcut}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  MenubarShortcut}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  MenubarShortcut}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  MenubarShortcut}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  MenubarShortcut}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
