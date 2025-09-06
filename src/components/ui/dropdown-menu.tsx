<<<<<<< HEAD
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'

=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
<<<<<<< HEAD
=======
import * as React from &quot;react & quot;
import * as DropdownMenuPrimitive from &quot;@radix - ui / react - dropdown - menu & quot;
import { Check, ChevronRight, Circle } from 'lucide-react';
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
>(({ className, inset, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.SubTrigger;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    )}
    {...props}
  >;
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <ChevronRight className="ml-auto h-4 w-4" />
=======
    <ChevronRight className="ml-auto h-4 w-4" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;
>(({ className, sideOffset = 4, ...props }, ref) => (;
  <DropdownMenuPrimitive.Portal>;
    <DropdownMenuPrimitive.Content;
      ref={ref}
      sideOffset={sideOffset}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      )}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>;
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef<;
<<<<<<< HEAD
=======

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
      &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border border - border bg - popover p - 1 text - popover - foreground shadow - lg data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
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
        &quot;z - 50 min - w-[8rem] overflow - hidden rounded - md border border - border bg - popover p - 1 text - popover - foreground shadow - md data-[state = open]:animate - in data-[state = closed]:animate - out data-[state = closed]:fade - out - 0 data-[state = open]:fade - in - 0 data-[state = closed]:zoom - out - 95 data-[state = open]:zoom - in - 95 data-[side = bottom]:slide - in - from - top - 2 data-[side = left]:slide - in - from - right - 2 data-[side = right]:slide - in - from - left - 2 data-[side = top]:slide - in - from - bottom - 2&quot;,
        class_name)}
      {...props}
    />;
  </DropdownMenuPrimitive.Portal>));
DropdownMenuContent.display_name = DropdownMenuPrimitive.Content.display_name;
const DropdownMenuItem = React.forward_ref<;
  React.ElementRef < typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef < typeof DropdownMenuPrimitive.Item> & {

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
=======
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,;

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Item;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, checked, ...props }, ref) => (;
  <DropdownMenuPrimitive.CheckboxItem;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      className
    )}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
<<<<<<< HEAD
<<<<<<< HEAD
  </DropdownMenuPrimitive.CheckboxItem>;
));
DropdownMenuCheckboxItem.displayName =;
  DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef<;
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, children, ...props }, ref) => (;
  <DropdownMenuPrimitive.RadioItem;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
=======
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
<<<<<<< HEAD
  </DropdownMenuPrimitive.RadioItem>;
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef<;
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (;
  <DropdownMenuPrimitive.Label;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
=======
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>(({ className, ...props }, ref) => (;
  <DropdownMenuPrimitive.Separator;
    ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    className={cn("-mx-1 my-1 h-px bg-muted", className)}


    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
=======
    {...props}
/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
const DropdownMenuShortcut = ({
  className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />;
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

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
<<<<<<< HEAD
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup}
;
=======
  DropdownMenuSubContent,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {...props}
    />);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
