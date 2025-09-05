<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as DropdownMenuPrimitive from &quot;@radix-ui/react-dropdown-menu&quot;
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from &quot;@/lib/utils&quot;
=======
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _DropdownMenu = DropdownMenuPrimitive.Root

const _DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const _DropdownMenuGroup = DropdownMenuPrimitive.Group

const _DropdownMenuPortal = DropdownMenuPrimitive.Portal

const _DropdownMenuSub = DropdownMenuPrimitive.Sub

const _DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const _DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {_inset?: boolean}
>(_({_className, _inset, _children, _...props}, _ref) => (
  <DropdownMenuPrimitive.SubTrigger
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
<<<<<<< HEAD
    {children}
    <ChevronRight className=&quot;ml-auto h-4 w-4&quot; />
=======
    {_children}
    <ChevronRight className="ml-auto h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const _DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(_({_className, _...props}, _ref) => (
  <DropdownMenuPrimitive.SubContent
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const _DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(_({_className, _sideOffset = 4, _...props}, _ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
<<<<<<< HEAD
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        &quot;z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2&quot;,
        className
=======
      ref={_ref}
      sideOffset={_sideOffset}
      className={_cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const _DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <DropdownMenuPrimitive.Item
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const _DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(_({_className, _children, _checked, _...props}, _ref) => (
  <DropdownMenuPrimitive.CheckboxItem
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    checked={_checked}
    {_...props}
  >
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className=&quot;h-4 w-4&quot; />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {_children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const _DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(_({_className, _children, _...props}, _ref) => (
  <DropdownMenuPrimitive.RadioItem
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  >
    <span className=&quot;absolute left-2 flex h-3.5 w-3.5 items-center justify-center&quot;>
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className=&quot;h-2 w-2 fill-current&quot; />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {_children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const _DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {_inset?: boolean}
>(_({_className, _inset, _...props}, _ref) => (
  <DropdownMenuPrimitive.Label
<<<<<<< HEAD
    ref={ref}
    className={cn(
      &quot;px-2 py-1.5 text-sm font-semibold&quot;,
      inset && &quot;pl-8&quot;,
      className
=======
    ref={_ref}
    className={_cn(
      "px-2 py-1.5 text-sm font-semibold", _inset && "pl-8", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    )}
    {_...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const _DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(_({_className, _...props}, _ref) => (
  <DropdownMenuPrimitive.Separator
<<<<<<< HEAD
    ref={ref}
    className={cn(&quot;-mx-1 my-1 h-px bg-muted&quot;, className)}
    {...props}
=======
    ref={_ref}
    className={_cn("-mx-1 my-1 h-px bg-muted", _className)}
    {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const _DropdownMenuShortcut = (_{_className, _...props}: React.HTMLAttributes<HTMLSpanElement>) => {_return (
    <span
<<<<<<< HEAD
      className={cn(&quot;ml-auto text-xs tracking-widest opacity-60&quot;, className)}
      {...props}
=======
      className={cn("ml-auto text-xs tracking-widest opacity-60", _className)}
      {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}
DropdownMenuShortcut.displayName = &quot;DropdownMenuShortcut&quot;

export {_DropdownMenu, _DropdownMenuTrigger, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuCheckboxItem, _DropdownMenuRadioItem, _DropdownMenuLabel, _DropdownMenuSeparator, _DropdownMenuShortcut, _DropdownMenuGroup, _DropdownMenuPortal, _DropdownMenuSub, _DropdownMenuSubContent, _DropdownMenuSubTrigger, _DropdownMenuRadioGroup}
