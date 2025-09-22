:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
>(({ className, inset, children, ...props }, ref) => (;
  <ContextMenuPrimitive.SubTrigger;
    ref={ref}
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    <ChevronRight className="ml-auto h-4 w-4" />
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
:src_backup/components/ui/context-menu.tsx
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
const ContextMenuSubContent = React.forwardRef<
:src_backup/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent;
    ref={ref}
    className={cn(
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Content>,;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:src_backup/components/ui/context-menu.tsx
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
:src_backup/components/ui/context-menu.tsx
  React.ComponentPropsWithoutRef < typeof ContextMenuPrimitive.Item> & {
<<<<<<< HEAD:src_backup/components/ui/context-menu.tsx

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;
  React.ElementRef<typeof ContextMenuPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/context-menu.tsx
      className
=======
      className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
    )}

    checked={checked}
    {...props}
:src_backup/components/ui/context-menu.tsx
  >"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  </ContextMenuPrimitive.CheckboxItem>;
));
ContextMenuCheckboxItem.displayName =;
  ContextMenuPrimitive.CheckboxItem.displayName;
const ContextMenuRadioItem = React.forwardRef<;
:src_backup/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
:src_backup/components/ui/context-menu.tsx
  >"
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>"
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  </ContextMenuPrimitive.RadioItem>;
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
const ContextMenuLabel = React.forwardRef<;
:src_backup/components/ui/context-menu.tsx
  React.ElementRef<typeof ContextMenuPrimitive.Label>,;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,;
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
        "ml-auto text-xs tracking-widest text-muted-foreground",
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

:src_backup/components/ui/context-menu.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        className
=======

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ui/context-menu.tsx
      )}

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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
ContextMenuShortcut.displayName = "ContextMenuShortcut"

<<<<<<< HEAD
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
:src_backup/components/ui/context-menu.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup}
;
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
