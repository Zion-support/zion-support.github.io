<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import * as React from "react""
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu""
import { Check, ChevronRight, Circle } from 'lucide-react''
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
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
<<<<<<< HEAD
=======
=======
import * as React from "react""
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'

;
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {}
    inset?: boolean;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
import * as React from &quot;react & quot;
import * as ContextMenuPrimitive from &quot;@radix - ui / react - context - menu & quot;'
import { Check, ChevronRight, Circle } from 'lucide-react';
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
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from "@/lib/utils"

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  }
>(({ className, inset, children, ...props }, ref) => (;
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
=======
    className={cn("
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      inset && "pl-8",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground","
      inset && "pl-8",",
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <ChevronRight className="ml-auto h-4 w-4" />
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    <ChevronRight className="ml-auto h-4 w-4" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  </ContextMenuPrimitive.SubTrigger>
))
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

=======
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
const ContextMenuSubContent = React.forwardRef<
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
=======
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",",
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
    {...props}
  />;
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
const ContextMenuContent = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>;
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Portal>;
    <ContextMenuPrimitive.Content;
      ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className={cn(
=======
      className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      className={cn(,
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",",
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
        className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      )}
      {...props}
    />;
  </ContextMenuPrimitive.Portal>;
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
const ContextMenuItem = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
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
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
    className={cn("
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50","
      inset && "pl-8",",
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
    {...props}
  />;
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
const ContextMenuCheckboxItem = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, checked, ...props }, ref) => (;
  <ContextMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
    className={cn(
=======
    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    checked={checked}
    {...props}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
  >"
=======
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">"
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />"
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, ...props }, ref) => (;
  <ContextMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
    className={cn(
=======
    className={cn("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
    {...props}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
  >"
=======
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">"
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />"
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
=======

  </ContextMenuPrimitive.RadioItem>));
ContextMenuRadioItem.display_name = ContextMenuPrimitive.RadioItem.display_name;
const ContextMenuLabel = React.forward_ref<;
  React.ElementRef < typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Label> & {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <ContextMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
=======
    className={cn("
      "px-2 py-1.5 text-sm font-semibold text-foreground","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground","
      inset && "pl-8",",
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}
    {...props}
  />;
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
const ContextMenuSeparator = React.forwardRef<;
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, ...props }, ref) => (;
  <ContextMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    className={cn("-mx-1 my-1 h-px bg-border", className)}


    {...props}
<<<<<<< HEAD
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
=======
    {...props}
/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
const ContextMenuShortcut = ({
  className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
        "ml-auto text-xs tracking-widest text-muted-foreground",
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    className={cn("-mx-1 my-1 h-px bg-border", className)}"
    {...props}
        "ml-auto text-xs tracking-widest text-muted-foreground","
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
        className
=======

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      )}
<<<<<<< HEAD
=======
/>));
ContextMenuSeparator.display_name = ContextMenuPrimitive.Separator.display_name;
const ContextMenuShortcut = ({}
  class_name,
  ...props;
}: React.HTMLAttributes < HTMLSpanElement>) =>: any {}
  return (
    <span;
      className={cn (
        &quot;ml - auto text - xs tracking - widest text - muted - foreground & quot;,
        class_name)}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  <ContextMenuPrimitive.Separator;
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      {...props}
    />;
  );
}
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

ContextMenuShortcut.display_name = &quot;ContextMenuShortcut & quot;
;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
ContextMenuShortcut.displayName = "ContextMenuShortcut"

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export {
=======
export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
=======
ContextMenuShortcut.display_name = &quot;ContextMenuShortcut & quot;
;
ContextMenuShortcut.displayName = "ContextMenuShortcut""
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
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
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup}
;
=======
  ContextMenuSubContent,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  ContextMenuSubContent,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  ContextMenuSubContent,'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
=======
  ContextMenuSubContent,
}}}
  ContextMenuSubTrigger,
  ContextMenuRadioGroup}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
